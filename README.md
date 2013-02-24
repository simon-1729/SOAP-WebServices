SOAP-WebServices
================

Using Spring MVC and Apache Axis. This application is to demonstrates the use of a SOAP based approach to web services.

A user enters two numbers in the hopes that their the sum will be returned. The numbers are relayed to an application 
server using ajax. Lets, pretended that the application residing on the web server doesn't know how to add. However, it 
knows of a server (called Axis) that might be able to help. So it looks up the servers wsdl (web service definition 
language) to see if it offers a service that may be able to add the two numbers together. As luck would have it there is
such a service specified. The application (which is written in java) then creates a SOAP message (which is just an XML
grammar) using the two numbers it received and sends it off to the (Axis) server. The Axis server doesn't care what 
language the client is implement in, so long as it can produce SOAP messages. On receipt of the numbers, Axis (which in 
this instances is also implemented in java) translates the payload (i.e the numbers, their type, the operation to preform
on them and the return type) into the native language of the service. The service duly calculates the sum which is then
packaged up as a SOAP message and sent back to the web server which deflates or unpacks the message before sending the 
result back to the client's browser. 

S. Dornan

see <a href="http://axis2sample.cloudfoundry.com">demo</a>
