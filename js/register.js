// JavaScript Document
//手机
function phoneblur(){	
	var name=document.getElementById("mobileNum").value;
	if(name!=""){		
		var regMobile=/^1\d{10}$/;	
		if(regMobile.test(name)){
			document.getElementById("mobileNumSpan").innerHTML="";
			//alert("正确"); 		
		}else{			//document.getElementById("mobileNumSpan").innerHTML="";
			//alert("不正确");
		document.getElementById("mobileNumSpan").innerHtml="手机号码格式不正确，请重新输入";
			}
	}else if(name==""){
		document.getElementById("mobileNumSpan").innerHTML="请输入手机号码";
		}	
	}
//登录密码
function pwdOnceblur(){
	var pwdreg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	var name=document.getElementById("pwdOnce").value;
	if(name!=""){
		//document.getElementById("pwdOnceSpan").innerHTML="";
		if(pwdreg.test(name)){
			document.getElementById("pwdOnceSpan").innerHTML="";
			}else{
				document.getElementById("pwdOnceSpan").innerHTML="6-18位，字母、数字、特殊符号中的两种或两种以上，不能单独使用字母、数字或符号 ";
		
				}
		}else if(name==""){
		document.getElementById("pwdOnceSpan").innerHTML="6-18位，字母、数字、特殊符号中的两种或两种以上，不能单独使用字母、数字或符号 ";
		}
	}
//确认密码
function pwdTwiceblur(){
	var nameOnce=document.getElementById("pwdOnce").value;
	var name=document.getElementById("pwdTwice").value;
	if(name!=""){
		//document.getElementById("pwdTwiceSpan").innerHTML="";
		if(nameOnce==name){
			document.getElementById("pwdTwiceSpan").innerHTML="密码确认";
			}else{
				document.getElementById("pwdTwiceSpan").innerHTML="两次密码不同";
				}
		}else if(name==""){
		document.getElementById("pwdTwiceSpan").innerHTML="请输入确认密码";
		}
	}
//图形验证码
function verifCodeblur(){
	var name=document.getElementById("verifCode").value;
	if(name!=""){
		document.getElementById("verifCodeSpan").innerHTML="";
		}else if(name==""){
		document.getElementById("verifCodeSpan").innerHTML="请输入验证码";
		}
	}
//同意服务条款并注册
function register(){
	var phone=document.getElementById("mobileNum").value;
	if(phone==""){
		document.getElementById("mobileNumSpan").innerHTML="请输入手机号码";
		}
	var pwdOnce=document.getElementById("pwdOnce").value;
	if(pwdOnce==""){
		document.getElementById("pwdOnceSpan").innerHTML="6-18位，字母、数字、特殊符号中的两种或两种以上，不能单独使用字母、数字或符号 ";
		}
	var pwdTwice=document.getElementById("pwdTwice").value;
	if(pwdTwice==""){
		document.getElementById("pwdTwiceSpan").innerHTML="请输入确认密码";
		}
	var verifCode=document.getElementById("verifCode").value;
	if(verifCode==""){
		document.getElementById("verifCodeSpan").innerHTML="请输入验证码";
		}
	}	