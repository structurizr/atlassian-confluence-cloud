<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="structurizr-confluence.css" media="all" />
    <script src="${param.xdm_e}${param.cp}/atlassian-connect/all.js"></script>
    <script src="structurizr-confluence.js"></script>

    <script>
        function embedDiagram(macro) {
            var workspaceId = getMacroParameter(macro, 'workspaceId', 1);
            var apiKey = getMacroParameter(macro, 'apiKey', '');
            var diagram = getMacroParameter(macro, 'diagram', '1');
            var diagramSelector = getMacroParameter(macro, 'diagramSelector', 'false');

            var form = document.getElementById('myEmbeddedDiagramForm');
            form.action = 'https://structurizr.com/embed/' + workspaceId;

            document.getElementById('apiKey').value = apiKey;
            document.getElementById('diagram').value = diagram;
            document.getElementById('diagramSelector').value = diagramSelector;

            form.submit();
        }
    </script>
</head>
<body>
<form id="myEmbeddedDiagramForm" target="myEmbeddedDiagram" method="post" action="" style="display: none;">
    <input id="apiKey" name="apiKey" value=""/>
    <input id="diagram" name="diagram" value="" />
    <input id="diagramSelector" name="diagramSelector" value="" />
    <input name="iframe" value="myEmbeddedDiagram" />
</form>

<iframe id="myEmbeddedDiagram" name="myEmbeddedDiagram" width="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
</body>
</html>