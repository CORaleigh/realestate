var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/widgets/LayerList", "esri/widgets/Legend", "esri/widgets/BasemapGallery", "esri/widgets/Expand", "esri/WebMap", "esri/views/MapView", "esri/widgets/Search", "esri/widgets/Search/SearchSource", "esri/widgets/FeatureForm", "esri/identity/OAuthInfo", "esri/identity/IdentityManager", "esri/support/actions/ActionButton", "esri/widgets/FeatureForm/FieldGroupConfig", "esri/core/Collection"], function (require, exports, LayerList_1, Legend_1, BasemapGallery_1, Expand_1, WebMap_1, MapView_1, Search_1, SearchSource_1, FeatureForm_1, OAuthInfo_1, IdentityManager_1, ActionButton_1, FieldGroupConfig_1, Collection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    LayerList_1 = __importDefault(LayerList_1);
    Legend_1 = __importDefault(Legend_1);
    BasemapGallery_1 = __importDefault(BasemapGallery_1);
    Expand_1 = __importDefault(Expand_1);
    WebMap_1 = __importDefault(WebMap_1);
    MapView_1 = __importDefault(MapView_1);
    Search_1 = __importDefault(Search_1);
    SearchSource_1 = __importDefault(SearchSource_1);
    FeatureForm_1 = __importDefault(FeatureForm_1);
    OAuthInfo_1 = __importDefault(OAuthInfo_1);
    IdentityManager_1 = __importDefault(IdentityManager_1);
    ActionButton_1 = __importDefault(ActionButton_1);
    FieldGroupConfig_1 = __importDefault(FieldGroupConfig_1);
    Collection_1 = __importDefault(Collection_1);
    var info = new OAuthInfo_1.default({
        appId: 'IBzkn4XKa7OGFvYs',
        popup: false
    });
    var feeFilter = new Collection_1.default([]);
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    ;
    function getSuggestions(params, field, layer) {
        return layer.queryFeatures({
            where: field + " like '" + params.suggestTerm.toUpperCase() + "%'",
            num: 6,
            outFields: [field],
            outSpatialReference: { wkid: 102100 },
            returnDistinctValues: true,
            returnGeometry: false,
            orderByFields: [field]
        }).then(function (results) {
            return results.features.map(function (feature) {
                return {
                    key: field,
                    text: feature.attributes[field],
                    sourceIndex: params.sourceIndex
                };
            });
        });
    }
    function showCreateForm(view, feature, form, formExpand) {
        var zoning = view.map.layers.filter(function (layer) {
            return layer.title === 'Raleigh Zoning';
        }).getItemAt(0);
        zoning.queryFeatures({ geometry: feature.geometry.centroid,
            returnGeometry: false,
            outFields: ['ZONING']
        }).then(function (featureSet) {
            if (featureSet.features.length) {
                feature.attributes.Zoning = featureSet.features[0].attributes.ZONING;
            }
            feature.attributes.Maintenance_Manager = "";
            feature.attributes.Purpose = "";
            feature.attributes.Restrictions = "";
            feature.attributes.Appraised_Value = "";
            feature.attributes.Comments = "";
            feature.attributes.Private_Comments = "";
            form.feature = feature;
            document.getElementById("form").classList.remove('esri-hidden');
            document.getElementById("btnUpdate").classList.remove('esri-hidden');
            document.getElementById("updateText").classList.add('esri-hidden');
            formExpand.expand();
            document.getElementById("btnDelete").classList.add('esri-hidden');
            document.getElementById("btnUpdate").setAttribute("value", "CREATE");
        });
    }
    function getResults(params, field, layer) {
        return layer.queryFeatures({
            where: field + " = '" + params.suggestResult.text.toUpperCase() + "'",
            outFields: ['*'],
            outSpatialReference: { wkid: 102100 },
            returnGeometry: true
        }).then(function (results) {
            var searchResults = results.features.map(function (feature) {
                var searchResult = {
                    extent: feature.geometry.extent,
                    feature: feature,
                    name: feature.attributes.REID
                };
                return searchResult;
            });
            return searchResults;
        });
    }
    function loadSearch(view, layer) {
        var reidSource = new SearchSource_1.default({
            placeholder: "Search By REID",
            getSuggestions: function (params) {
                return getSuggestions(params, 'REID', layer);
            },
            getResults: function (params) {
                return getResults(params, 'REID', layer);
            },
            minSuggestCharacters: 4,
            //@ts-ignore
            name: 'REID'
        });
        var addrSource = new SearchSource_1.default({
            placeholder: "Search By Site Address",
            getSuggestions: function (params) {
                return getSuggestions(params, 'SITE_ADDRESS', layer);
            },
            getResults: function (params) {
                return getResults(params, 'SITE_ADDRESS', layer);
            },
            minSuggestCharacters: 4,
            //@ts-ignore
            name: 'Address'
        });
        var search = new Search_1.default({
            container: document.createElement('div'),
            includeDefaultSources: false,
            sources: [reidSource, addrSource]
        });
        view.ui.add(search, 'top-left');
        var reid = getUrlParameter('reid');
        if (reid) {
            search.search(getUrlParameter('reid'));
        }
        return search;
    }
    function searchResult(result, view, fee, form, expand) {
        view.goTo(result.result.feature);
        view.popup.open({ features: [result.result.feature] });
        fee.queryFeatures({ where: "REID = '" + result.result.feature.attributes.REID + "'",
            outFields: ['*']
        }).then(function (featureSet) {
            if (featureSet.features.length) {
                form.feature = featureSet.features[0];
                document.getElementById("form").classList.remove('esri-hidden');
                document.getElementById("btnUpdate").classList.remove('esri-hidden');
                document.getElementById("btnDelete").classList.remove('esri-hidden');
                document.getElementById("updateText").classList.add('esri-hidden');
                expand.expand();
                document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
                document.getElementById('deleteConfirm').setAttribute('data-oid', form.feature.attributes.OBJECTID);
            }
            else {
                showCreateForm(view, result.result.feature, form, expand);
            }
        });
    }
    function loadForm(view, layer) {
        var form = new FeatureForm_1.default({
            container: "form",
            layer: layer,
            groupDisplay: 'sequential',
            fieldConfig: [new FieldGroupConfig_1.default({
                    label: "Real Estate Information",
                    description: "This is the first group in the FeatureForm",
                    fieldConfig: [{
                            name: "Maintenance_Manager",
                            label: "Maintenance Manager",
                            description: "Department that manages property",
                            required: true
                        },
                        {
                            name: "Purpose",
                            label: "Purpose",
                            editorType: "text-area",
                        },
                        {
                            name: "Restrictions",
                            label: "Restrictions",
                            editorType: "text-area"
                        },
                        {
                            name: "Appraised_Value",
                            label: "Appraised Value"
                        },
                        {
                            name: "Zoning",
                            label: "Zoning"
                        },
                        {
                            name: "Comments",
                            label: "Comments",
                            editorType: "text-area"
                        },
                        {
                            name: "Private_Comments",
                            label: "Private Comments",
                            editorType: "text-area"
                        }
                    ]
                }),
                new FieldGroupConfig_1.default({
                    label: "Property Information",
                    description: "Wake County property information",
                    fieldConfig: [{
                            name: "PIN_NUM",
                            label: "PIN Number",
                        },
                        {
                            name: "REID",
                            label: "Real Estate ID"
                        },
                        {
                            name: "OWNER",
                            label: "Owner"
                        },
                        {
                            name: "ADDR1",
                            label: "Mailing Address Line 1"
                        },
                        {
                            name: "ADDR2",
                            label: "Mailing Address Line 12"
                        },
                        {
                            name: "ADDR3",
                            label: "Mailing Address Line 3"
                        },
                        {
                            name: "DEED_BOOK",
                            label: "Deed Book"
                        },
                        {
                            name: "DEED_PAGE",
                            label: "Deed Page"
                        },
                        {
                            name: "DEED_DATE",
                            label: "Deed Date"
                        },
                        {
                            name: "DEED_ACRES",
                            label: "Deed Acres"
                        },
                        {
                            name: "BLDG_VAL",
                            label: "Building Value"
                        },
                        {
                            name: "LAND_VAL",
                            label: "Land Value"
                        },
                        {
                            name: "TOTAL_VALUE_ASSD",
                            label: "Total Assessed Value"
                        },
                        {
                            name: "PROPDESC",
                            label: "Property Description"
                        },
                        {
                            name: "SITE_ADDRESS",
                            label: "Site Address"
                        },
                        {
                            name: "CITY_DECODE",
                            label: "City"
                        },
                        {
                            name: "PLANNING_JURISDICTION",
                            label: "Planning Jurisdiction"
                        },
                        {
                            name: "YEAR_BUILT",
                            label: "Year Built"
                        },
                        {
                            name: "TOTSALPRICE",
                            label: "Total Sale Price"
                        },
                        {
                            name: "SALE_DATE",
                            label: "Sale Date"
                        },
                        {
                            name: "OLD_PARCEL_NUMBER",
                            label: "Old Parcel Number"
                        }
                    ]
                })],
        });
        return form;
    }
    function formSubmitted(view, form, fee, expand) {
        form.feature.attributes = form.getValues();
        var adds = [];
        var updates = [];
        if (form.feature.layer === fee) {
            updates.push(form.feature);
        }
        else {
            adds.push(form.feature);
        }
        fee.applyEdits({ addFeatures: adds, updateFeatures: updates }).then(function (result) {
            fee.refresh();
            form.feature = null;
            document.getElementById("form").classList.add('esri-hidden');
            document.getElementById("btnUpdate").classList.add('esri-hidden');
            document.getElementById("updateText").classList.remove('esri-hidden');
            expand.collapse();
            view.popup.close();
        });
    }
    function layerListTriggered(event) {
        if (event.action.id === 'propertyFilter') {
            //@ts-ignore
            if (event.action.value) {
                event.item.layer.definitionExpression = "(((UPPER(OWNER) LIKE '%RALEIGH%') AND (UPPER(OWNER) LIKE '%CITY%') AND (UPPER(OWNER) NOT LIKE '%HOUSING%') AND (UPPER(OWNER) NOT LIKE '%CENTER%') AND (UPPER(REID) <> '0112518')))";
                //@ts-ignore
                document.querySelector('#propMatTable').setAttribute('where', event.item.layer.definitionExpression);
                //@ts-ignore
                event.item.layer.refresh();
            }
            else {
                event.item.layer.definitionExpression = "1=1";
                //@ts-ignore
                document.querySelector('#propMatTable').setAttribute('where', "1=1");
                event.item.layer.refresh();
            }
        }
        else {
            if (event.action.id === 'community') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager like '%Community Development%'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager like '%Community Development%'");
                }
            }
            if (event.action.id === 'prcr') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'PRCR'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'PRCR'");
                }
            }
            if (event.action.id === 'pu') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'Public Utilities'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'Public Utilities'");
                }
            }
            if (event.action.id === 'fire') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'Fire Department'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'Fire Department'");
                }
            }
            if (event.action.id === 'engineering') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager like 'ES/%'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager like 'ES/%'");
                }
            }
            if (event.action.id === 'construction') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'ES/Construction Management'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'ES/Construction Management'");
                }
            }
            if (event.action.id === 'fo') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'ES/Construction Management'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'ES/Construction Management'");
                }
            }
            if (event.action.id === 'planning') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'City Planning'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'City Planning'");
                }
            }
            if (event.action.id === 'stormwater') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'ES/Stormwater'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'ES/Stormwater'");
                }
            }
            if (event.action.id === 'sws') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'Solid Waste Services'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'Solid Waste Services'");
                }
            }
            if (event.action.id === 'transportation') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager like '%Transportation%'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager like '%Transportation%'");
                }
            }
            if (event.action.id === 'rcc') {
                //@ts-ignore
                if (event.action.value) {
                    feeFilter.add("Maintenance_Manager = 'Convention and Conference Center'");
                }
                else {
                    feeFilter.remove("Maintenance_Manager = 'Convention and Conference Center'");
                }
            }
            //@ts-ignore
            if (feeFilter.length) {
                event.item.layer.definitionExpression = feeFilter.toArray().toString().replace(/,/g, ' OR ');
                document.querySelector('#feeMatTable').setAttribute('where', event.item.layer.definitionExpression);
                event.item.layer.refresh();
            }
            else {
                event.item.layer.definitionExpression = '1=1';
                document.querySelector('#feeMatTable').setAttribute('where', '1=1');
                event.item.layer.refresh();
            }
        }
    }
    function loadLayerList(view) {
        var layerList = new LayerList_1.default({ view: view,
            container: document.createElement('div'),
            listItemCreatedFunction: function (event) {
                var item = event.item;
                if (item.title === 'Property Boundaries') {
                    item.open = true;
                    item.actionsOpen = true;
                    item.actionsSections = [[{
                                title: 'Filter Potential Properties',
                                id: 'propertyFilter',
                                type: 'toggle',
                                visible: true
                            }]];
                }
                if (item.title === 'City of Raleigh Fee Properties') {
                    item.open = true;
                    item.actionsOpen = false;
                    item.actionsSections = [[{
                                title: 'Community Development',
                                id: 'community',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'PRCR',
                                id: 'prcr',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Public Utilities',
                                id: 'pu',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Fire',
                                id: 'fire',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Engineering Services',
                                id: 'engineering',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Construction Management',
                                id: 'construction',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Facilities & Operations',
                                id: 'fo',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'City Planning',
                                id: 'planning',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Stormwater',
                                id: 'stormwater',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'SWS',
                                id: 'sws',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'Transportation',
                                id: 'transportation',
                                type: 'toggle',
                                visible: true
                            }],
                        [{
                                title: 'RCCC',
                                id: 'rcc',
                                type: 'toggle',
                                visible: true
                            }]
                    ];
                }
            }
        });
        layerList.on('trigger-action', layerListTriggered);
        return layerList;
    }
    function loadWidgets(view) {
        var layerExpand = new Expand_1.default({ container: document.createElement('div'), group: 'bottom-left', content: loadLayerList(view), expanded: false });
        var legendExpand = new Expand_1.default({ container: document.createElement('div'), group: 'bottom-left', content: new Legend_1.default({ view: view, container: document.createElement('div') }) });
        var basemapExpand = new Expand_1.default({ container: document.createElement('div'), group: 'bottom-left', content: new BasemapGallery_1.default({ view: view, container: document.createElement('div') }) });
        layerExpand.watch('expanded', function (expanded) {
            if (expanded) {
                legendExpand.collapse();
                basemapExpand.collapse();
            }
        });
        legendExpand.watch('expanded', function (expanded) {
            if (expanded) {
                layerExpand.collapse();
                basemapExpand.collapse();
            }
        });
        basemapExpand.watch('expanded', function (expanded) {
            if (expanded) {
                layerExpand.collapse();
                legendExpand.collapse();
            }
        });
        view.ui.add([layerExpand, legendExpand, basemapExpand], 'bottom-left');
    }
    function loadTables(view) {
        var tableExpand = new Expand_1.default({ expandIconClass: 'esri-icon-organization', mode: 'floating', container: document.createElement('div'), group: 'bottom-right', content: document.getElementById('feeTable') });
        var propTableExpand = new Expand_1.default({ expandIconClass: 'esri-icon-table', mode: 'floating', container: document.createElement('div'), group: 'bottom-right', content: document.getElementById('propTable') });
        tableExpand.watch('expanded', function (expanded) {
            if (expanded) {
                propTableExpand.collapse();
                document.querySelector('#feeMatTable').classList.remove('esri-hidden');
            }
            else {
                document.querySelector('#feeMatTable').classList.add('esri-hidden');
            }
        });
        view.ui.add(tableExpand, 'bottom-right');
        propTableExpand.watch('expanded', function (expanded) {
            if (expanded) {
                tableExpand.collapse();
                document.querySelector('#propMatTable').classList.remove('esri-hidden');
            }
            else {
                document.querySelector('#propMatTable').classList.add('esri-hidden');
            }
        });
        view.ui.add(propTableExpand, 'bottom-right');
    }
    function getLayer(view, title) {
        return view.map.layers.filter(function (l) {
            return l.title === title;
        }).getItemAt(0);
    }
    function propertyLoaded(view, layerView, fee) {
        var copyAction = new ActionButton_1.default({
            title: "Create Real Estate",
            id: "create",
            className: "esri-icon-edit"
        });
        var template = layerView.layer.popupTemplate.clone();
        template.actions.add(copyAction);
        layerView.layer.popupTemplate = template;
        var search = loadSearch(view, layerView.layer);
        view.whenLayerView(fee).then(function (layerView) { return feeLoaded(view, layerView, search); });
    }
    function mapViewClicked(view, layer, event, form, expand) {
        view.hitTest(view.toScreen(event.mapPoint)).then(function (result) {
            if (result.results.length) {
                var matches = result.results.filter(function (r) {
                    return r.graphic.layer === layer;
                });
                if (matches.length) {
                    form.feature = matches[0].graphic;
                    document.getElementById("form").classList.remove('esri-hidden');
                    document.getElementById("btnUpdate").classList.remove('esri-hidden');
                    document.getElementById("btnDelete").classList.remove('esri-hidden');
                    document.getElementById("updateText").classList.add('esri-hidden');
                    expand.expand();
                    document.getElementById('deleteConfirm').setAttribute('data-oid', form.feature.attributes.OBJECTID);
                    document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
                }
            }
        });
    }
    function feeLoaded(view, layerView, search) {
        var form = loadForm(view, layerView.layer);
        var formExpand = new Expand_1.default({ container: document.createElement('div'), expandIconClass: 'esri-icon-edit', autoCollapse: true, group: 'right', content: document.getElementById('update') });
        view.ui.add(formExpand, 'top-right');
        view.popup.on("trigger-action", function (event) {
            if (event.action.id === "create") {
                showCreateForm(view, view.popup.features[0], form, formExpand);
            }
        });
        layerView.layer.outFields = ['*'];
        view.on('click', function (event) { return mapViewClicked(view, layerView.layer, event, form, formExpand); });
        form.on('submit', function () {
            formSubmitted(view, form, layerView.layer, formExpand);
        });
        loadWidgets(view);
        loadTables(view);
        document.addEventListener('rowSelected', function (event) {
            event.detail.layer.queryFeatures({ returnGeometry: true, objectIds: [event.detail.attributes.OBJECTID], outFields: ['*'], outSpatialReference: view.spatialReference }).then(function (featureSet) {
                view.goTo(featureSet.features);
            });
        });
        search.on('select-result', function (result) {
            searchResult(result, view, layerView.layer, form, formExpand);
        });
        document.getElementById("btnUpdate").onclick = function () {
            form.submit();
        };
        document.getElementById("btnDelete").onclick = function () {
            var modal = document.querySelector("calcite-modal");
            //@ts-ignore
            modal.open();
        };
        document.getElementById('deleteConfirm').onclick = function (e) {
            layerView.layer.applyEdits({ deleteFeatures: [{ attributes: { OBJECTID: document.getElementById('deleteConfirm').dataset.oid } }] }).then(function (result) {
                console.log(result);
                layerView.layer.refresh();
                var modal = document.querySelector("calcite-modal");
                //@ts-ignore
                modal.close();
                form.feature = null;
                document.getElementById("form").classList.add('esri-hidden');
                document.getElementById("btnUpdate").classList.add('esri-hidden');
                document.getElementById("btnDelete").classList.add('esri-hidden');
                document.getElementById("updateText").classList.remove('esri-hidden');
                formExpand.collapse();
                view.popup.close();
            });
        };
    }
    function viewLoaded(view) {
        var property = getLayer(view, 'Property Boundaries');
        var fee = getLayer(view, "City of Raleigh Fee Properties");
        view.whenLayerView(property).then(function (layerView) { return propertyLoaded(view, layerView, fee); });
    }
    function signedIn(event) {
        var webMap = new WebMap_1.default({ portalItem: { id: "473e977864324dcf8c6ffbdfa1bcc92f" } });
        var view = new MapView_1.default({
            map: webMap,
            container: "viewDiv",
            center: [-78.65, 35.8],
            zoom: 13
        });
        view.ui.remove('zoom');
        view.when(viewLoaded);
    }
    IdentityManager_1.default.registerOAuthInfos([info]);
    IdentityManager_1.default.checkSignInStatus(info.portalUrl + '/sharing').then(signedIn).catch(function () {
        IdentityManager_1.default.getCredential(info.portalUrl + '/sharing');
    });
});
//# sourceMappingURL=main.js.map