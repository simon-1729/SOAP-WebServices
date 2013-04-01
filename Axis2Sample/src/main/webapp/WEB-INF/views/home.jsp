<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<html>
<head>
  <script src="resources/scripts/script.js"></script>
  <link rel="stylesheet" href="resources/style/style.css">
  <title>Axis2 (SOAP-ws)</title>
  </head>
<body> 
    
    <div id="header">
        <h1>Consuming SOAP Web Services with Apache Axis</h1>
    </div><!--end header-->
    
    <div id="main" class="clearFix">
        
        <div id="uiFrame">
            <div id="usrInterface">
            <form action="" name="userForm" > 
                <label>Enter a number:</label><input type="text" name="userValue" onfocus="clean()" />
                <input type="button" value="click" onclick="commitData()"/>
            </form>
            <table>			
                <tr>
                <td><div id="caption1" class="output"></div></td>
                <td class="alignR"><div id="firstNum" class="output"></div></td>
                </tr>
                <tr>
                <td><div id="caption2" class="output"></div></td>
                <td class="alignR"><div id="secondNum" class="output"></div></td>
                </tr>
                <tr>
                <td><div id="nameArg" class="resultColor"></div></td>
                <td class="alignR"><div id="nameResult" class="resultColor"></div></td>			
                </tr>			
            </table>
            </div><!--end usrInterface-->
            <div id="info">
            </div>
        </div><!--end uiFrame-->

       

        <div id="messageFrame">
        
        	<div id="wsdlLink">
        		See the<a href="#" onclick="newWindow('http://dynamowebdesign.com:8080/axis/arithmatic.jws?wsdl')"> wsdl </a>on axis
        	</div>
        	
        	<div id="ajaxLink">
        		See the<a href="#" onclick="xmlWindow()"> xml </a>returned by the app server
        	</div>
        
        </div>

        
        
    </div><!--end main-->
    
</body>
</html>
