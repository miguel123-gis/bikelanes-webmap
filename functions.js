function ba2_popUp(feature, json){
    json.bindPopup(feature.properties.name)
    json.bindTooltip(feature.properties.name)
}

function borders_popUp(feature, json){
    json.bindTooltip(feature.properties.NAME_2)
}
function ba2ncrStyle(json) {
    var att = json.properties;
    switch (att.type) {
        case 'Circumferential':
            return {color: 'black', weight: 5.5};
            break;
        case 'Radial':
            return {color: 'black', weight: 4.5};
            break;
        default: 
            return {color: 'black', weight: 4};
    } 
}

function ba2mcebuStyle(json) {
    return {color:'black', weight: 4}
}

function ba2mdavaoStyle(json) {
    return {color:'black', weight: 4}
}

function sncrStyle(json) {
    return {
        color: 'blue',
        weight: 4
    }};

function lguStyle(json) {
    return {
        color: 'green',
        weight: 4   
    }};

function usblStyle (json) {
    var att = json.properties;
    switch (att.Name) {
        case 'Usable':
            return {color: 'yellow'}
            break;
        case 'Moderately Usable':
            return {color: 'yellow', 
                    dashArray: "5,5"};
            break;
        default:
            return {color: 'orange', 
                    dashArray: "4,4", 
                    weight: 0.85}
    }
}
function borderStyle (json) {
    return {
        fillColor: '#FFFFFF',
        fillOpacity:0,
        weight:0.75
    };
}

function createRoutingButton(label, container) {
    var btn = L.DomUtil.create('button', '', container);
    btn.setAttribute('type', 'button');
    btn.innerHTML = label;
    return btn;
}