function getUrlParameter(param) {
    var codedParam = (new RegExp(param + '=([^&]*)')).exec(window.location.search)[1];
    return decodeURIComponent(codedParam);
}

function getMacroParameter(macro, name, defaultValue) {
    if (macro.parameters[name] && macro.parameters[name].value) {
        return macro.parameters[name].value;
    } else {
        return defaultValue;
    }
}

function main() {
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
}

function embedDiagram(macro) {
    var structurizrUrl = getMacroParameter(macro, 'structurizrUrl', 'https://structurizr.com');
    var workspaceId = getMacroParameter(macro, 'workspaceId', 1);
    var apiKey = getMacroParameter(macro, 'apiKey', '');
    var diagram = getMacroParameter(macro, 'diagram', '1');
    var perspective = getMacroParameter(macro, 'perspective', '');
    var diagramSelector = getMacroParameter(macro, 'diagramSelector', 'false');

    var url = structurizrUrl + '/embed/' + workspaceId +
        '?iframe=structurizrDiagram' +
        '&diagramSelector=' + diagramSelector +
        '&diagram=' + diagram +
        '&apiKey=' + apiKey +
        '&perspective=' + perspective;

    document.getElementById('structurizrDiagram').setAttribute('src', url);
    const parentNodeWidth = document.getElementById('structurizrDiagram').parentNode.offsetWidth;
    AP.resize(parentNodeWidth + "px", "100px");
    document.getElementById('loadingMessage').style.display = "none";

    structurizr.embed.onResize(function(embed) {
        var iframe = document.getElementById('structurizrDiagram');
        var aspectRatio = embed.aspectRatio;
        var addition = embed.addition;
        var height = Math.ceil((width / aspectRatio) + addition);

        // enforce some minimum dimensions
        width =  Math.max(width, 200);
        height =  Math.max(height, 200);

        iframe.width = width + "px";
        iframe.height = height + "px";
        AP.resize("100%", (height+4) + "px");
    });
}

var width = window.innerWidth;

function resizeEmbeddedDiagrams() {
    const iframe = document.getElementById('structurizrDiagram');
    if (iframe) {
        const parentNode = iframe.parentNode;
        if (parentNode) {
            width = parentNode.offsetWidth;
        }
    }
}

window.addEventListener("resize", resizeEmbeddedDiagrams, false);
