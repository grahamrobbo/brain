jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.m.Image");
jQuery.sap.declare("samples.components.brain.Component");

sap.ui.core.UIComponent.extend("samples.components.brain.Component", {});

samples.components.brain.Component.prototype.createContent = function() {
    return new sap.m.Image({src: "img/brain.jpg", height:"400px"});
};