var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map", "esri/widgets/LayerList", "esri/widgets/Expand", "esri/WebMap", "esri/views/MapView", "esri/widgets/Search", "esri/widgets/Search/SearchSource", "esri/widgets/FeatureForm", "esri/identity/OAuthInfo", "esri/identity/IdentityManager", "esri/support/actions/ActionButton", "esri/widgets/FeatureForm/FieldGroupConfig"], function (require, exports, Map_1, LayerList_1, Expand_1, WebMap_1, MapView_1, Search_1, SearchSource_1, FeatureForm_1, OAuthInfo_1, IdentityManager_1, ActionButton_1, FieldGroupConfig_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = __importDefault(Map_1);
    LayerList_1 = __importDefault(LayerList_1);
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
    var info = new OAuthInfo_1.default({
        appId: 'IBzkn4XKa7OGFvYs',
        popup: false
    });
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
    function getResults(params, field, layer) {
        return layer.queryFeatures({
            where: field + " = '" + params.suggestResult.text.toUpperCase() + "'",
            outFields: ['*'],
            outSpatialReference: { wkid: 102100 },
            returnGeometry: true
        }).then(function (results) {
            //this.selectionMade.emit(results.features[0]);
            // if (!this.view) {
            //   this.createMap(results.features[0]);
            // }
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
    IdentityManager_1.default.registerOAuthInfos([info]);
    IdentityManager_1.default.checkSignInStatus(info.portalUrl + '/sharing').then(function (event) {
        var map = new Map_1.default({
            basemap: "gray-vector"
        });
        var webMap = new WebMap_1.default({ portalItem: { id: "473e977864324dcf8c6ffbdfa1bcc92f" } });
        var view = new MapView_1.default({
            map: webMap,
            container: "viewDiv",
            center: [-78.65, 35.8],
            zoom: 13
        });
        view.ui.remove('zoom');
        view.when(function () {
            var property = view.map.layers.filter(function (layer) {
                return layer.title === 'Property Boundaries';
            }).getItemAt(0);
            var fee = view.map.layers.filter(function (layer) {
                return layer.title === "City of Raleigh Fee Properties";
            }).getItemAt(0);
            view.whenLayerView(property).then(function (layerView) {
                var copyAction = new ActionButton_1.default({
                    title: "Create Real Estate",
                    id: "create",
                    className: "esri-icon-plus-circled"
                });
                // const template = new PopupTemplate({
                //   // autocasts as new PopupTemplate()
                //   title: "Property",
                //   content: property.popupTemplate.content,
                //   actions: [copyAction]
                // });   
                var template = property.popupTemplate.clone();
                template.actions.add(copyAction);
                property.popupTemplate = template;
                var reidSource = new SearchSource_1.default({
                    placeholder: "Search By REID",
                    getSuggestions: function (params) {
                        return getSuggestions(params, 'REID', property);
                    },
                    getResults: function (params) {
                        return getResults(params, 'REID', property);
                    },
                    minSuggestCharacters: 4,
                    //@ts-ignore
                    name: 'REID'
                });
                var addrSource = new SearchSource_1.default({
                    placeholder: "Search By Site Address",
                    getSuggestions: function (params) {
                        return getSuggestions(params, 'SITE_ADDRESS', property);
                    },
                    getResults: function (params) {
                        return getResults(params, 'SITE_ADDRESS', property);
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
                view.ui.add(new Expand_1.default({ container: document.createElement('div'), content: new LayerList_1.default({ view: view, container: document.createElement('div') }) }), 'top-left');
                view.whenLayerView(fee).then(function (layerView) {
                    var form = new FeatureForm_1.default({
                        container: "form",
                        layer: layerView.layer,
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
                    view.popup.on("trigger-action", function (event) {
                        // Execute the measureThis() function if the measure-this action is clicked
                        if (event.action.id === "create") {
                            debugger;
                            form.feature = view.popup.features[0];
                            document.getElementById("update").classList.remove('esri-hidden');
                            formExpand.expand();
                            document.getElementById("btnUpdate").setAttribute("value", "CREATE");
                        }
                    });
                    fee.outFields = ['*'];
                    view.on('click', function (event) {
                        view.hitTest(view.toScreen(event.mapPoint)).then(function (result) {
                            if (result.results.length) {
                                var matches = result.results.filter(function (r) {
                                    return r.graphic.layer === fee;
                                });
                                if (matches.length) {
                                    console.log(matches[0].graphic);
                                    form.feature = matches[0].graphic;
                                    document.getElementById("update").classList.remove('esri-hidden');
                                    formExpand.expand();
                                    document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
                                }
                            }
                        });
                    });
                    form.on('submit', function () {
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
                            document.getElementById("update").classList.add('esri-hidden');
                        });
                    });
                    var formExpand = new Expand_1.default({ container: document.createElement('div'), content: document.getElementById('update') });
                    view.ui.add(formExpand, 'top-right');
                    search.on('select-result', function (result) {
                        view.goTo(result.result.feature);
                        //view.popup.open({features: [result.result.feature]});
                        fee.queryFeatures({ where: "REID = '" + result.result.feature.attributes.REID + "'",
                            outFields: ['*']
                        }).then(function (featureSet) {
                            if (featureSet.features.length) {
                                form.feature = featureSet.features[0];
                                document.getElementById("update").classList.remove('esri-hidden');
                                formExpand.expand();
                                document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
                            }
                            else {
                                var zoning = view.map.layers.filter(function (layer) {
                                    return layer.title === 'Raleigh Zoning';
                                }).getItemAt(0);
                                zoning.queryFeatures({ geometry: result.result.feature.geometry.centroid,
                                    returnGeometry: false,
                                    outFields: ['ZONING']
                                }).then(function (featureSet) {
                                    if (featureSet.features.length) {
                                        result.result.feature.attributes.Zoning = featureSet.features[0].attributes.ZONING;
                                    }
                                    result.result.feature.attributes.Maintenance_Manager = "";
                                    result.result.feature.attributes.Purpose = "";
                                    result.result.feature.attributes.Restrictions = "";
                                    result.result.feature.attributes.Appraised_Value = "";
                                    result.result.feature.attributes.Zoning = "";
                                    result.result.feature.attributes.Comments = "";
                                    result.result.feature.attributes.Private_Comments = "";
                                    form.feature = result.result.feature;
                                    document.getElementById("update").classList.remove('esri-hidden');
                                    formExpand.expand();
                                    document.getElementById("btnUpdate").setAttribute("value", "CREATE");
                                });
                            }
                        });
                        document.getElementById("btnUpdate").onclick = function () {
                            // Fires feature form's submit event.
                            form.submit();
                        };
                    });
                });
            });
        });
    }).catch(function () {
        IdentityManager_1.default.getCredential(info.portalUrl + '/sharing');
    });
});
//# sourceMappingURL=main.js.map