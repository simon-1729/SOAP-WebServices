package com.prospring3.axis2.domain;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class ResultData {
	
	private Integer result;
	
	public ResultData(){
		result=null;
	}
	public ResultData(Integer result){
		this.result=result;
	}
	public Integer getResult(){
		return result;
	}
	public void setResult(Integer result){
		this.result=result;
	}
	

}
