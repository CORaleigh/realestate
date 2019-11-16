import LayerList from "esri/widgets/LayerList";
import Legend from "esri/widgets/Legend";
import BasemapGallery from "esri/widgets/BasemapGallery";
import Expand from "esri/widgets/Expand";
import WebMap from "esri/WebMap";
import MapView from "esri/views/MapView";
import FeatureLayer from "esri/layers/FeatureLayer";
import Search from "esri/widgets/Search";
import SearchSource from "esri/widgets/Search/SearchSource";
import FeatureForm from "esri/widgets/FeatureForm";
import OAuthInfo from "esri/identity/OAuthInfo";
import esriId from "esri/identity/IdentityManager";
import ActionButton from "esri/support/actions/ActionButton";
import FieldGroupConfig from "esri/widgets/FeatureForm/FieldGroupConfig";
import Collection from "esri/core/Collection";


const info = new OAuthInfo({
  appId: 'IBzkn4XKa7OGFvYs',
  popup: false
});
let feeFilter:Collection = new Collection([]);
function getUrlParameter(name:string) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
};
function getSuggestions(params:any, field:string, layer:FeatureLayer) {
  return layer.queryFeatures({
    where: field+" like '" + params.suggestTerm.toUpperCase() + "%'",
    num: 6,
    outFields: [field],
    outSpatialReference: {wkid: 102100},
    returnDistinctValues: true,
    returnGeometry: false,
    orderByFields: [field]
  }).then((results:any) => {
    return results.features.map((feature:any) => {
      return {
        key: field,
        text: feature.attributes[field],
        sourceIndex: params.sourceIndex
      }
    })
  });
}
function showCreateForm(view:MapView, feature:__esri.Graphic, form: FeatureForm, formExpand: Expand) {
  const zoning = view.map.layers.filter(layer => {
    return layer.title === 'Raleigh Zoning'
  }).getItemAt(0) as FeatureLayer;
  zoning.queryFeatures({geometry: (feature.geometry as __esri.Polygon).centroid,
    returnGeometry: false,
    outFields: ['ZONING']
  }).then(featureSet => {
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
function getResults(params:any, field:string, layer:FeatureLayer) {
  return layer.queryFeatures({
    where: field + " = '"+params.suggestResult.text.toUpperCase() + "'",
    outFields: ['*'],
    outSpatialReference: {wkid: 102100},
    returnGeometry: true
  }).then((results:any) => {
    let searchResults = results.features.map((feature:any) => {
      let searchResult = {
        extent: feature.geometry.extent,
        feature: feature,
        name: feature.attributes.REID
      }
      return searchResult;
    });
    return searchResults;
  });
}
esriId.registerOAuthInfos([info]);
esriId.checkSignInStatus(info.portalUrl + '/sharing').then(event => {
  const webMap = new WebMap({portalItem: {id: "473e977864324dcf8c6ffbdfa1bcc92f"}});
  const view = new MapView({
    map: webMap,
    container: "viewDiv",
    center: [-78.65, 35.8],
    zoom: 13
  });
  view.ui.remove('zoom');
  view.when(() => {
    let property = view.map.layers.filter(layer => {
      return layer.title === 'Property Boundaries'
    }).getItemAt(0) as FeatureLayer;
    let fee = view.map.layers.filter(layer => {
      return layer.title === "City of Raleigh Fee Properties"
    }).getItemAt(0) as FeatureLayer;      
    view.whenLayerView(property).then(layerView => {
      const copyAction = new ActionButton({
        title: "Create Real Estate",
        id: "create",
        className: "esri-icon-edit"
      });
      const template = property.popupTemplate.clone();
      template.actions.add(copyAction);
      property.popupTemplate = template;
      const reidSource = new SearchSource({
        placeholder:"Search By REID",
        getSuggestions: (params) => {
          return getSuggestions(params, 'REID', property);
        },
        getResults: params => {
          return getResults(params, 'REID', property);
        },
        minSuggestCharacters: 4,
        //@ts-ignore
        name: 'REID'
      });
      const addrSource = new SearchSource({
        placeholder:"Search By Site Address",
        getSuggestions: (params) => {
          return getSuggestions(params, 'SITE_ADDRESS', property)
        },
        getResults: params => {
          return getResults(params, 'SITE_ADDRESS', property);
        },
        minSuggestCharacters: 4,
        //@ts-ignore
        name: 'Address'
      });   
      const search = new Search({
        container: document.createElement('div'),
        includeDefaultSources: false,
        sources: [reidSource, addrSource]
      });
      view.ui.add(search, 'top-left');
      view.whenLayerView(fee).then(layerView => {
        let reid = getUrlParameter('reid');
        if (reid) {
          search.search(getUrlParameter('reid'));
        }
        let form = new FeatureForm({
          container: "form",
          layer: layerView.layer,
          groupDisplay: 'sequential',
          fieldConfig: [new FieldGroupConfig({
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
          ]}),
          new FieldGroupConfig({
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
          ]})],  
        });
        view.popup.on("trigger-action", function(event) {
          if (event.action.id === "create") {
            showCreateForm(view, view.popup.features[0], form, formExpand);      
          }
        });  
        fee.outFields = ['*'];
        view.on('click', (event) => {
          view.hitTest(view.toScreen(event.mapPoint)).then(result => {
            if (result.results.length) {
              let matches = result.results.filter(r => {
                return r.graphic.layer === fee;
              });
              if (matches.length) {
                form.feature = matches[0].graphic;
                document.getElementById("form").classList.remove('esri-hidden');
                document.getElementById("btnUpdate").classList.remove('esri-hidden');
                document.getElementById("btnDelete").classList.remove('esri-hidden');

                document.getElementById("updateText").classList.add('esri-hidden');
                formExpand.expand();
                document.getElementById('deleteConfirm').setAttribute('data-oid', form.feature.attributes.OBJECTID);          

                document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
              }
            }
          });
        })
        form.on('submit', () => {
          form.feature.attributes = form.getValues();
          let adds = [];
          let updates = [];
          if (form.feature.layer === fee) {
            updates.push(form.feature);
          } else {
            adds.push(form.feature);
          }
          fee.applyEdits({addFeatures: adds, updateFeatures: updates}).then(result => {
            fee.refresh();
            form.feature = null;
            document.getElementById("form").classList.add('esri-hidden');
            document.getElementById("btnUpdate").classList.add('esri-hidden');
            document.getElementById("updateText").classList.remove('esri-hidden');
            formExpand.collapse();
            view.popup.close();
          });
        })
        let layerList = new LayerList({view: view, 
          container: document.createElement('div'),
          listItemCreatedFunction: (event) => {
            let item = event.item;
            if (item.title === 'Property Boundaries') {
              item.open = true;
              item.actionsOpen = true;
              item.actionsSections = [[{
                title: 'Filter Potential Properties',
                id: 'propertyFilter',
                type: 'toggle',
                visible: true
              }]]
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
            ]
          }            
        }
      });
      layerList.on('trigger-action', (event) => {
        if (event.action.id === 'propertyFilter') {
          //@ts-ignore
          if(event.action.value) {
            (event.item.layer as FeatureLayer).definitionExpression = "(((UPPER(OWNER) LIKE '%RALEIGH%') AND (UPPER(OWNER) LIKE '%CITY%') AND (UPPER(OWNER) NOT LIKE '%HOUSING%') AND (UPPER(OWNER) NOT LIKE '%CENTER%') AND (UPPER(REID) <> '0112518')))";
            //@ts-ignore
            document.querySelector('#propMatTable').setAttribute('where', (event.item.layer as FeatureLayer).definitionExpression);
            //@ts-ignore
            (event.item.layer as FeatureLayer).refresh();
          } else {
            (event.item.layer as FeatureLayer).definitionExpression = "1=1"           
            //@ts-ignore
            document.querySelector('#propMatTable').setAttribute('where', "1=1");
            (event.item.layer as FeatureLayer).refresh();
          }
        } else {
          if (event.action.id === 'community') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager like '%Community Development%'")
            } else {
              feeFilter.remove("Maintenance_Manager like '%Community Development%'")               
            }
          }
          if (event.action.id === 'prcr') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'PRCR'")
            } else {
              feeFilter.remove("Maintenance_Manager = 'PRCR'")               
            }
          }
          if (event.action.id === 'pu') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'Public Utilities'")
            } else {
              feeFilter.remove("Maintenance_Manager = 'Public Utilities'")               
            }
          }
          if (event.action.id === 'fire') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'Fire Department'")
            } else {
              feeFilter.remove("Maintenance_Manager = 'Fire Department'")               
            }
          }
          if (event.action.id === 'engineering') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager like 'ES/%'")     
            } else {
              feeFilter.remove("Maintenance_Manager like 'ES/%'")               
            }
          }
          if (event.action.id === 'construction') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'ES/Construction Management'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'ES/Construction Management'")            
            }
          }
          if (event.action.id === 'fo') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'ES/Construction Management'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'ES/Construction Management'")            
            }
          }
          if (event.action.id === 'planning') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'City Planning'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'City Planning'")            
            }
          }
          if (event.action.id === 'stormwater') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'ES/Stormwater'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'ES/Stormwater'")            
            }
          }      
          if (event.action.id === 'sws') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'Solid Waste Services'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'Solid Waste Services'")            
            }
          }
          if (event.action.id === 'transportation') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager like '%Transportation%'")     
            } else {
              feeFilter.remove("Maintenance_Manager like '%Transportation%'")             
            }
          }
          if (event.action.id === 'rcc') {
            //@ts-ignore
            if(event.action.value) {
              feeFilter.add("Maintenance_Manager = 'Convention and Conference Center'")     
            } else {
              feeFilter.remove("Maintenance_Manager = 'Convention and Conference Center'")            
            }
          }
          //@ts-ignore
          if (feeFilter.length) {
            (event.item.layer as FeatureLayer).definitionExpression = feeFilter.toArray().toString().replace(/,/g,' OR '); 
            document.querySelector('#feeMatTable').setAttribute('where', (event.item.layer as FeatureLayer).definitionExpression);              
            (event.item.layer as FeatureLayer).refresh();
          } else {
            (event.item.layer as FeatureLayer).definitionExpression = '1=1';
            document.querySelector('#feeMatTable').setAttribute('where','1=1');
            (event.item.layer as FeatureLayer).refresh();
          }
        }
      });
      let layerExpand = new Expand({container: document.createElement('div'),group:'bottom-left', content:layerList, expanded: true});
      let legendExpand = new Expand({container: document.createElement('div'),group:'bottom-left', content:new Legend({view: view, container: document.createElement('div')})});
      let basemapExpand = new Expand({container: document.createElement('div'),group:'bottom-left', content:new BasemapGallery({view: view, container: document.createElement('div')})});

      layerExpand.watch('expanded', expanded => {
        if (expanded) {
          legendExpand.collapse();
          basemapExpand.collapse();
        }
      });
      legendExpand.watch('expanded', expanded => {
        if (expanded) {
          layerExpand.collapse();
          basemapExpand.collapse();
        }
      });
      basemapExpand.watch('expanded', expanded => {
        if (expanded) {
          layerExpand.collapse();
          legendExpand.collapse();

        }
      });      
      let formExpand = new Expand({container: document.createElement('div'), mode: 'floating', expandIconClass: 'esri-icon-edit', autoCollapse: true,group:'right', content:document.getElementById('update')});
      view.ui.add(formExpand, 'top-right');
      view.ui.add([layerExpand, legendExpand, basemapExpand], 'bottom-left');
      let tableExpand = new Expand({expandIconClass: 'esri-icon-organization', container: document.createElement('div'),group:'bottom-right', content: document.getElementById('feeTable')});
      let propTableExpand = new Expand({expandIconClass: 'esri-icon-table', container: document.createElement('div'),group:'bottom-right', content: document.getElementById('propTable')});
      tableExpand.watch('expanded', expanded => {
        if (expanded) {
          propTableExpand.collapse();
          document.querySelector('#feeMatTable').classList.remove('esri-hidden');
        } else {
          document.querySelector('#feeMatTable').classList.add('esri-hidden');
        }
      });
      view.ui.add(tableExpand, 'bottom-right');
      propTableExpand.watch('expanded', expanded => {
        if (expanded) {
          tableExpand.collapse();
          document.querySelector('#propMatTable').classList.remove('esri-hidden');
        } else {
          document.querySelector('#propMatTable').classList.add('esri-hidden');
        }
      });        
      view.ui.add(propTableExpand, 'bottom-right');
      document.addEventListener('rowSelected', (event:any) => {
        
        event.detail.layer.queryFeatures({returnGeometry: true, objectIds:[event.detail.attributes.OBJECTID], outFields:['*'], outSpatialReference:view.spatialReference}).then(
          (featureSet:any) => {
            view.goTo(featureSet.features);
          }
          )
        });     
        search.on('select-result', result => {
          view.goTo(result.result.feature);
          view.popup.open({features: [result.result.feature]});
          fee.queryFeatures({where: "REID = '" + result.result.feature.attributes.REID + "'",
          outFields: ['*']
        }).then(featureSet => {
          if (featureSet.features.length) {
            form.feature = featureSet.features[0];
            document.getElementById("form").classList.remove('esri-hidden');
            document.getElementById("btnUpdate").classList.remove('esri-hidden');
            document.getElementById("btnDelete").classList.remove('esri-hidden');

            document.getElementById("updateText").classList.add('esri-hidden');
            formExpand.expand();
            document.getElementById("btnUpdate").setAttribute("value", "UPDATE");
            document.getElementById('deleteConfirm').setAttribute('data-oid', form.feature.attributes.OBJECTID);          
          } else {
            showCreateForm(view, result.result.feature, form, formExpand);
          }
        });
             
      });   
      document.getElementById("btnUpdate").onclick = () => {
        form.submit();
      };   
      document.getElementById("btnDelete").onclick = () => {
        const modal = document.querySelector("calcite-modal");
        //@ts-ignore
        modal.open();
      };       
      document.getElementById('deleteConfirm').onclick = (e) => {
        fee.applyEdits({deleteFeatures:[{attributes:{OBJECTID:document.getElementById('deleteConfirm').dataset.oid }}]}).then(result => {
          console.log(result);
          fee.refresh();
          const modal = document.querySelector("calcite-modal");
          //@ts-ignore
          modal.close();   
          form.feature = null;
          document.getElementById("form").classList.add('esri-hidden');
          document.getElementById("btnUpdate").classList.add('esri-hidden');
          document.getElementById("btnDelete").classList.add('esri-hidden');

          document.getElementById("updateText").classList.remove('esri-hidden');    
          formExpand.collapse();   
          view.popup.close();          
        })
      }
    });
  });
});
}).catch(() => {
  esriId.getCredential(info.portalUrl + '/sharing');
});
