function getUrlParameter(param) {
    var codedParam = (new RegExp(param + '=([^&]*)')).exec(window.location.search)[1];
    return decodeURIComponent(codedParam);
}

AP.require("request", function(request) {
    var pageId = getUrlParameter("pageId");
    var pageVersion = getUrlParameter("pageVersion");
    var macroId = getUrlParameter("macroId");
    request({
        url: "/rest/api/content/" + pageId +
        "/history/" + pageVersion +
        "/macro/id/" + macroId,
        success: function(response) {
            embedDiagram(JSON.parse(response));
        }
    });
});

function getMacroParameter(macro, name, defaultValue) {
    if (macro.parameters[name] && macro.parameters[name].value) {
        return macro.parameters[name].value;
    } else {
        return defaultValue;
    }
}

StructurizrEmbed.resizeEmbeddedDiagram = function (elementId) {
    var structurizrEmbed = document.getElementById(elementId);
    var width = structurizrEmbed.offsetWidth;
    var aspectRatio = StructurizrEmbed.aspectRatios[elementId];

    var height = (width / aspectRatio);
    structurizrEmbed.height = height + "px";
    AP.resize("100%", height + "px");
};