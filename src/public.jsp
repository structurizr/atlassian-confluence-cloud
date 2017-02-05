<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="structurizr-confluence.css" media="all" />
    <script src="${param.xdm_e}${param.cp}/atlassian-connect/all.js"></script>
    <script type="text/javascript" src="https://structurizr.com/static/js/structurizr-responsive-embed.js"></script>
    <script src="structurizr-confluence.js"></script>

    <script>
        function embedDiagram(macro) {
            var workspaceId = getMacroParameter(macro, 'workspaceId', 1);
            var diagram = getMacroParameter(macro, 'diagram', '1');
            var diagramSelector = getMacroParameter(macro, 'diagramSelector', 'false');

            document.getElementById("structurizrEmbed").innerHTML = '<iframe id="myEmbeddedDiagram" src="https://structurizr.com/embed/' + workspaceId + '?diagram=' + diagram + '&diagramSelector=' + diagramSelector + '&iframe=myEmbeddedDiagram&fullscreen=false" width="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>';
        }
    </script>
</head>
<body><div id="structurizrEmbed"></div></body>
</html>