<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="structurizr-confluence.css" media="all" />
    <script src="${param.xdm_e}${param.cp}/atlassian-connect/all.js"></script>
    <script src="structurizr-confluence.js"></script>

    <script>
        function embedDiagram(macro) {
            var expressKey = getMacroParameter(macro, 'expressKey', '');
            var definition = macro.body;

            var form = document.getElementById('myEmbeddedDiagramForm');

            document.getElementById('key').value = expressKey;
            document.getElementById('definition').innerHTML = definition;

            form.submit();
        }
    </script>
</head>
<body>
<form id="myEmbeddedDiagramForm" target="myEmbeddedDiagram" method="post" action="https://structurizr.com/embed/express" style="display: none;">
    <input id="key" name="key" value=""/>
    <textarea id="definition" name="definition"></textarea>
    <input name="iframe" value="myEmbeddedDiagram" />
</form>

<iframe id="myEmbeddedDiagram" name="myEmbeddedDiagram" width="100%" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>
</body>
</html>