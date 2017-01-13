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

function receiveStructurizrResponsiveEmbedMessage(event)
{
    if (event.origin.indexOf('structurizr.com') > -1) {
        var elementId = event.data.split('=')[0];
        var height = event.data.split('=')[1];
        document.getElementById(elementId).height = height + "px";
        AP.resize("100%", height + "px");
    }
}

window.addEventListener("message", receiveStructurizrResponsiveEmbedMessage, false);