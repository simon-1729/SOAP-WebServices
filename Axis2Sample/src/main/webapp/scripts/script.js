var x =null;
var y =null;
var a =null;
var b =null;

function commitData(){
	
	var usrVal = document.userForm.userValue.value;
	
	if(usrVal.length==0){
		alert("Enter a number!");
	}
	else if(x==null){	
		
		x = usrVal;
		
		document.getElementById("caption1").innerHTML="First integer entered "; 
		document.getElementById("firstNum").innerHTML=usrVal; 	    
	}
	else if(y==null){
		
		y = usrVal;
		
		document.getElementById("caption2").innerHTML="Second integer entered ";
		document.getElementById("secondNum").innerHTML=usrVal;
		requestService(x, y);	
		
		/*
		  Note we keep a copy of the user's values i.e 'a' and 'b' so that xmlWindow() function (see below) can 
		  use them, even after the user clicks in the form field and thus resets x and y to null by triggering the
		  clean() function. This allows the user to see the ajax result as return by the xmlWindow() even if they 
		  have reset the form field but have not yet entered new numbers.
	   */
		a = x;		
		b = y;
		
		
	}
	else{
		alert("error!");
	}
	document.userForm.userValue.value="";
	
}


//An Ajax call
function requestService(val1, val2) { 
	
	
	var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
				
		xmlhttp.onreadystatechange=function(){
			
		  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			    
			    var result;
			    xmlDoc=xmlhttp.responseXML;
			    
			    result=xmlDoc.getElementsByTagName("result")[0].childNodes[0].nodeValue;			    
			   
			    document.getElementById("nameArg").innerHTML="Result: "; 
			    document.getElementById("nameResult").innerHTML=result; 			  
			    
			}	      
	    }; 
	   xmlhttp.open("GET", "http://axis2sample.cloudfoundry.com/result/sum/"+val1+"/"+val2, true);
		//xmlhttp.open("GET","http://localhost:8080/result/sum/"+val1+"/"+val2, true);
		xmlhttp.send();
 };
 
 function clean(){
	 
	 if (x !=null && y != null ) {
		
		//Clear user interface
		document.getElementById("caption1").innerHTML=""; 
		document.getElementById("firstNum").innerHTML="";  
	 	document.getElementById("caption2").innerHTML="";
		document.getElementById("secondNum").innerHTML="";
		document.getElementById("nameArg").innerHTML=""; 
	    document.getElementById("nameResult").innerHTML=""; 
	    
		x = null;		
		y = null;
	 }
 }

 function newWindow(location){
	 
	 window.open(location);
 }
 function xmlWindow(){
	 
	if(a==null || b==null){
		
		alert("You must submit two numbers before trying to access a result!");
		return;
		
	 }	
	 //window.open("http://localhost:8080/result/sum/"+a+"/"+b);
	window.open("http://axis2sample.cloudfoundry.com/result/sum/"+a+"/"+b);
	
 }
