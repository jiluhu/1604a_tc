// JavaScript Document
function click01(){
	var loginform1=document.getElementById("sign_ct");
	loginform1.style.display="block";
	
	var comm_login=document.getElementById("comm_login");
	comm_login.style.backgroundColor="#ffffff";
	
	var loginform2=document.getElementById("phon_cont");
	loginform2.style.display="none";
	var mobilepsd_login=document.getElementById("mobilepsd_login");
	mobilepsd_login.style.backgroundColor="#e6e6e6";	
	
	}
function click02(){
	var loginform1=document.getElementById("sign_ct");
	loginform1.style.display="none";
	
	var comm_login=document.getElementById("comm_login");
	comm_login.style.backgroundColor="#e6e6e6";
	
	var loginform2=document.getElementById("phon_cont");
	loginform2.style.display="block";
	
	var mobilepsd_login=document.getElementById("mobilepsd_login");
	mobilepsd_login.style.backgroundColor="#ffffff";
	
	}
/*本地存储*/
function save(uName,password){
	var ck=document.getElementById("auto_login").checked;
	if(ck==true){
	var uName=document.getElementById(uName).value;
	var pwd=document.getElementById(password).value;
	window.localStorage.setItem("uName",uName);
	window.localStorage.setItem("pwd",pwd);
	}else{
		
		}
	}
window.onload=function (){
	var uName=window.localStorage.getItem("uName");
	var pwd=window.localStorage.getItem("pwd");
	
	document.getElementById("account_pop").value=uName;
	document.getElementById("pwd").value=pwd;
	
	}
/*手机动态密码登录失去焦点*/
function phoneBlur(){
	var phoneNumber=document.getElementById("account_pop02").value;
	if(phoneNumber==""){
		document.getElementById("phonePrompt").style.display="block";
		/*.innerHTML="请输入您的手机号";*/
		}else if(phoneNumber!=""){
		document.getElementById("phonePrompt").style.display="none";		
		}
	}