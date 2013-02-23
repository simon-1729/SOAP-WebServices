package com.prospring3.axis2;

import java.net.URL;
import java.util.Locale;

import javax.xml.rpc.ParameterMode;
import org.apache.axis.client.Call;
import org.apache.axis.client.Service;
import org.apache.axis.encoding.XMLType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		//*********************************************************
	/*
		Integer result = null;
		
		String endpointString = "http://dynamowebdesign.com:8080/axis/arithmatic.jws";
		
		Integer x = 1;
		Integer y = 2;
		
		//The service will contain a handle to the web service
		Service service = new Service();
		
		//The call object will contain a handle to one call of the web service
		try {
			Call call = (Call) service.createCall();
			URL url = new URL(endpointString);
			
			call.setTargetEndpointAddress(url);
			call.setOperationName("add");
			call.addParameter("op1", XMLType.XSD_INT, ParameterMode.IN);
			call.addParameter("op2", XMLType.XSD_INT, ParameterMode.IN);
			call.setReturnType(XMLType.XSD_INT);
			
			//Make the call
			result = (Integer) call.invoke(new Object[] {x , y});
			
			System.out.println("The result from the remote service is: "+result);
			
		} catch (Exception e) {
			
			e.printStackTrace();
		}

			
		//**********************************************************
		
	*/	
		//model.addAttribute("result", result );
		
		return "home";
	}
	
}
