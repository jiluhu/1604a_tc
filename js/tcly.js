// JavaScript Document
//我的同城
function topMyTcOver(){
	var mydiv=document.getElementById("MyTctable");
	mydiv.style.display="block";
	mydiv.style.zIndex="1";
	}
function topMyTcOut(){
	var mydiv=document.getElementById("MyTctable");
	mydiv.style.display="none";
	}
//手机同城
function mobileTcOver(){
	var mydiv=document.getElementById("mobileTcimg");
	mydiv.style.display="block";
	mydiv.style.zIndex="1";
	}
function mobileTcOut(){
	var mydiv=document.getElementById("mobileTcimg");
	mydiv.style.display="none";
	}
//微信
function weixinTcOver(){
	var mydiv=document.getElementById("weixinimg");
	mydiv.style.display="block";
	/*mydiv.style.zIndex="1";*/
	}
function weixinTcOut(){
	var mydiv=document.getElementById("weixinimg");
	mydiv.style.display="none";
	}
//电话
function tcPhoneOver(){
	var mydiv=document.getElementById("phoneimg");
	mydiv.style.display="block";
	/*mydiv.style.zIndex="1";*/
	}
function tcPhoneOut(){
	var mydiv=document.getElementById("phoneimg");
	mydiv.style.display="none";
	}
//客户服务
function servicePhoneOver(){
	var mydiv=document.getElementById("servicePhonelist");
	mydiv.style.display="block";
	mydiv.style.zIndex="1";
	}
function servicePhoneOut(){
	var mydiv=document.getElementById("servicePhonelist");
	mydiv.style.display="none";
	}
//合作中心
function topJoinTcOver(){
	var mydiv=document.getElementById("topJoinTclist");
	mydiv.style.display="block";
	mydiv.style.zIndex="1";
	}
function topJoinTcOut(){
	var mydiv=document.getElementById("topJoinTclist");
	mydiv.style.display="none";
	//mydiv.style.zIndex="10";
	}
//城市切换
function cityOver(){
	 document.getElementById('citydiv').style.display='block';
	 document.getElementById('nowCity').style.border='1px solid #f0f0f0';
	}
function cityOut(){
	 document.getElementById('citydiv').style.display='none';
	document.getElementById('nowCity').style.border='0px';
	}	
<!--景点列表效果-->
function syover(){
	document.getElementById("sy").style.display="block";
	document.getElementById("sy").style.backgroundColor="white";
	}
function syout(){
	document.getElementById("sy").style.display="none";
	}
<!--酒店列表效果-->	
function jdover(){
	document.getElementById("jd").style.display="block";
	document.getElementById("jd").style.backgroundColor="white";
	//document.getElementById("menuNav02").style.backgroundColor="white";
	}
function jdout(){
	document.getElementById("jd").style.display="none";
	}	
<!--机票列表效果-->	
function jpover(){
	document.getElementById("jp").style.display="block";
	document.getElementById("jp").style.backgroundColor="white";
	}
function jpout(){
	document.getElementById("jp").style.display="none";
	}	
<!--周边游列表效果-->	
function zbyover(){
	document.getElementById("zby").style.display="block";
	document.getElementById("zby").style.backgroundColor="white";
	}
function zbyout(){
	document.getElementById("zby").style.display="none";
	}	
<!--国内游列表效果-->	
function gnyover(){
	document.getElementById("gny").style.display="block";
	document.getElementById("gny").style.backgroundColor="white";
	}
function gnyout(){
	document.getElementById("gny").style.display="none";
	}
<!--出境游列表效果-->	
function cjyover(){
	document.getElementById("cjy").style.display="block";
	document.getElementById("cjy").style.backgroundColor="white";
	}
function cjyout(){
	document.getElementById("cjy").style.display="none";
	}
<!--邮轮列表效果-->	
function ylover(){
	document.getElementById("yl").style.display="block";
	document.getElementById("yl").style.backgroundColor="white";
	}
function ylout(){
	document.getElementById("yl").style.display="none";
	}
<!--定制旅游列表效果-->	
function dzlyover(){
	document.getElementById("dzly").style.display="block";
	document.getElementById("dzly").style.backgroundColor="white";
	}
function dzlyout(){
	document.getElementById("dzly").style.display="none";
	}
<!--金融列表效果-->	
function jrover(){
	document.getElementById("jr").style.display="block";
	document.getElementById("jr").style.backgroundColor="white";
	}
function jrout(){
	document.getElementById("jr").style.display="none";
	}
<!--攻略列表效果-->	
function glover(){
	document.getElementById("gl").style.display="block";
	document.getElementById("gl").style.backgroundColor="white";
	}
function glout(){
	document.getElementById("gl").style.display="none";
	}
<!--左侧导航效果制作-->
/*window.onscroll=function(){
	var myleftMenu=document.getElementById("leftMenu");
	myleftMenu.style.top=(document.body.scrollTop+200)+"px";
	myleftMenu.style.bottom=(document.body.scrollHeight+300)+"px";
	}*/
	
window.onload=function(){
    var dadProject=document.getElementById('dadProject');
    var flight=document.getElementById('flight');	
	var leftMenu=document.getElementById("leftMenu");
	
    window.onscroll=function(){
    var scrollTop=document.body.scrollTop;
	//顶端 	精选特惠
	var leftMenu01=document.getElementById('leftMenu01');	
    if(scrollTop>dadProject.offsetTop){
    leftMenu.style.display='block';
	leftMenu.style.top=(document.body.scrollTop+150)+"px";
	//左侧精选特惠	
	leftMenu01.style.backgroundColor="#ff7887";	
    }else{
	leftMenu01.style.backgroundColor="#f5f5f5";		
		}	
		
	//周边自由行
	var leftMenu02=document.getElementById('leftMenu02');
	var peripheralPlay=document.getElementById('peripheralPlay');
    if(scrollTop>peripheralPlay.offsetTop){
	//左侧精选特惠	
	leftMenu01.style.backgroundColor="#f5f5f5";	
	//左侧周边自由行	
	leftMenu02.style.backgroundColor="#ff7887";
    }else{
	leftMenu02.style.backgroundColor="#f5f5f5";
		}
	
	//国内游
	var leftMenu03=document.getElementById('leftMenu03');
	var inbound=document.getElementById('inbound');
    if(scrollTop>inbound.offsetTop){
	//左侧周边自由行	
	leftMenu02.style.backgroundColor="#f5f5f5";
	//左侧国内游
	leftMenu03.style.backgroundColor="#ff7887";    
	}else{
	
	//左侧国内游
	leftMenu03.style.backgroundColor="#f5f5f5";
		}
		
	//出境游
	var leftMenu04=document.getElementById('leftMenu04');
	var outbound=document.getElementById('outbound');
    if(scrollTop>outbound.offsetTop){
	//左侧国内游	
	leftMenu03.style.backgroundColor="#f5f5f5";
	//左侧出境游
	leftMenu04.style.backgroundColor="#ff7887";    
	}else{	
	//左侧出境游
	leftMenu04.style.backgroundColor="#f5f5f5";
		}
		
	//景点
	var leftMenu05=document.getElementById('leftMenu05');
	var scenicPnel=document.getElementById('scenicPnel');
    if(scrollTop>scenicPnel.offsetTop){
	//左侧出境游	
	leftMenu04.style.backgroundColor="#f5f5f5";
	//左侧景点
	leftMenu05.style.backgroundColor="#ff7887";    
	}else{	
	//左侧景点
	leftMenu05.style.backgroundColor="#f5f5f5";
		}
		
	//跟团
	var leftMenu06=document.getElementById('leftMenu06');
	var bustour=document.getElementById('bustour');
    if(scrollTop>bustour.offsetTop){
	//左侧景点	
	leftMenu05.style.backgroundColor="#f5f5f5";
	//左侧跟团
	leftMenu06.style.backgroundColor="#ff7887";    
	}else{	
	//左侧跟团
	leftMenu06.style.backgroundColor="#f5f5f5";
		}
				
	//邮轮
	var leftMenu07=document.getElementById('leftMenu07');
	var cruise=document.getElementById('cruise');
    if(scrollTop>cruise.offsetTop){
	//左侧跟团	
	leftMenu06.style.backgroundColor="#f5f5f5";
	//左侧邮轮
	leftMenu07.style.backgroundColor="#ff7887";    
	}else{	
	//左侧邮轮
	leftMenu07.style.backgroundColor="#f5f5f5";
		}
	
	//机票
	var leftMenu08=document.getElementById('leftMenu08');		
    if(scrollTop>flight.offsetTop){
	//左侧邮轮	
	leftMenu07.style.backgroundColor="#f5f5f5";
	//左侧机票
	leftMenu08.style.backgroundColor="#ff7887";    
	}else{	
	//左侧机票
	leftMenu08.style.backgroundColor="#f5f5f5";
		}
	//底部
	var cooper_box=document.getElementById('cooper_box');
	if(scrollTop>cooper_box.offsetTop){
	leftMenu.style.display='none';
		}
    }	
    };	
<!--右侧导航效果制作-->
function rmover(rmimg){
	if(rmimg=='rm0001'){
		document.getElementById("rm0001").style.display="block";
		}else if(rmimg=='rm0101'){
		document.getElementById("rm0101").style.display="block";
		}else if(rmimg=='rm0201'){
		document.getElementById("rm0201").style.display="block";
		}else if(rmimg=='rm0301'){
		document.getElementById("rm0301").style.display="block";
		}else if(rmimg=='rm0401'){
		document.getElementById("rm0401").style.display="block";
		}else if(rmimg=='rm0501'){
		document.getElementById("rm0501").style.display="block";
		}else if(rmimg=='rm0601'){
		document.getElementById("rm0601").style.display="block";
		document.getElementById("rm0602").style.display="block";
		}else if(rmimg=='rm0701'){
		document.getElementById("rm0701").style.display="block";
		}	
	}

function rmout(rmimg01){
	if(rmimg01=='rm0001'){
		document.getElementById("rm0001").style.display="none";
		}else if(rmimg01=='rm0101'){
		document.getElementById("rm0101").style.display="none";
		}else if(rmimg01=='rm0201'){
		document.getElementById("rm0201").style.display="none";
		}else if(rmimg01=='rm0301'){
		document.getElementById("rm0301").style.display="none";
		}else if(rmimg01=='rm0401'){
		document.getElementById("rm0401").style.display="none";
		}else if(rmimg01=='rm0501'){
		document.getElementById("rm0501").style.display="none";
		}else if(rmimg01=='rm0601'){
		document.getElementById("rm0601").style.display="none";
		document.getElementById("rm0602").style.display="none";
		}else if(rmimg01=='rm0701'){
		document.getElementById("rm0701").style.display="none";
		}
	}	
<!--轮播效果制作-->
var i=0;	
function lunbo(){
	/*改变背景*/
	var lunboimg=new Array("lunbo-01.jpg","lunbo-02.jpg","lunbo-03.jpg","lunbo-04.jpg","lunbo-05.jpg","lunbo-06.jpg","lunbo-07.jpg","lunbo-08.jpg");
	var backimg=document.getElementById("csliderMain");
	backimg.style.backgroundImage="url(../image/middle/%E8%BD%AE%E6%92%AD/"+lunboimg[i]+")";
	/*改变编号背景*/
	var lbnum=new Array("lb01","lb02","lb03","lb04","lb05","lb06","lb07","lb08");
	document.getElementById(lbnum[i]).style.backgroundColor="#ff6600";
		for(var x=0;x<8;x++){
			if(x!=i){
				document.getElementById(lbnum[x]).style.backgroundColor="#38415f";
				}			
			}		
	i++;	
	if(i>7){
		i=0;
		}

	}	
setInterval("lunbo()",6000);
function lb01(){
		i=0;
		lunbo();
		}
function lb02(){
		 i=1;
		lunbo();
		}
function lb03(){
		  i=2;
		lunbo();
		}
function lb04(){
		 i=3;
		lunbo();
		}
function lb05(){
		 i=4;
		lunbo();
		}
function lb06(){
		 i=5;
		lunbo();
		}
function lb07(){
		 i=6;
		lunbo();
		}
function lb08(){
		 i=7;
		lunbo();
		}				
<!--轮播效果制作end-->
<!--搜索区-->
function selectClick(x,y){	
	var myid01=new Array('top_scenic','top_hotel','top_airplane','top_selftrip','top_guonei','top_abroad','top_youlun','top_trian');
	document.getElementById(x).style.backgroundColor="#fff";
	document.getElementById(x).style.color="#000";	
	for(var i=0;i<8;i++){
		if(x!=myid01[i]){			
			document.getElementById(myid01[i]).style.backgroundColor="#38414c";
			document.getElementById(myid01[i]).style.color="#fff";
				}
		}
	var myid02=new Array('soso_tab_content01','soso_tab_content02','soso_tab_content03','soso_tab_content04','soso_tab_content05','soso_tab_content06','soso_tab_content07','soso_tab_content08');	
		document.getElementById(myid02[y]).style.display="block";
		for(var j=0;j<8;j++){
			if(j!=y){					
			//alert(myid02.length);
		document.getElementById(myid02[j]).style.display="none";	
				}
		}
	}
<!--景点门票	-->
function chooseClick(x){
	var myid=new Array('jdmiddle01','jdmiddle02','jdmiddle03');
	for(var i=0;i<3;i++){
		if(x==myid[i]){
			document.getElementById(myid[i]).style.display="block";
			}else{
			document.getElementById(myid[i]).style.display="none";	
				}
		}
		/*mydiv.style.zIndex="10";*/	
	}
<!--酒店	-->
function hotelchooseClick(x){
	var myid=new Array('hotel01','hotel02','hotel03');
	for(var i=0;i<3;i++){
		if(x==myid[i]){
			document.getElementById(myid[i]).style.display="block";
			}else{
			document.getElementById(myid[i]).style.display="none";	
				}
		}			
	}
<!--机票-->
function flyChangeImg01(){
	document.getElementById("flyxcqhchange").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changeafter.jpg)";
	}
function flyChangeImg02(){
	document.getElementById("flyxcqhchange").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changebefore.jpg)";
	}
/*单程城市切换*/
function flyChangeContent(){	
	var address01=document.getElementById("flygnxcqh0101").value;		
	var address02=document.getElementById("flygnxcqh0103").value;	
	document.getElementById("flygnxcqh0101").value=address02;
	document.getElementById("flygnxcqh0103").value=address01;
	}
/*往返城市切换*/
function flyChangeContent02(){	
	var address01=document.getElementById("flygnxcqh0201").value;		
	var address02=document.getElementById("flygnxcqh0203").value;	
	document.getElementById("flygnxcqh0201").value=address02;
	document.getElementById("flygnxcqh0203").value=address01;
	}
//国内返程切换
function flyChangeImg0201(){
	document.getElementById("flyxcqhchange02").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changeafter.jpg)";
	}
function flyChangeImg0202(){
	document.getElementById("flyxcqhchange02").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changebefore.jpg)";
	}
//机票国内行程切换
function flygnxc(fly){
	if(fly=='flygnxcqh01'){
		document.getElementById("flygnxcqh01").style.display="block";
		document.getElementById("flygnxcqh02").style.display="none";
		document.getElementById("flygnxcqh03").style.display="none";		
		}else if(fly=='flygnxcqh02'){
		document.getElementById("flygnxcqh02").style.display="block";
		document.getElementById("flygnxcqh01").style.display="none";
		document.getElementById("flygnxcqh03").style.display="none";		
		}else if(fly=='flygnxcqh03'){
		document.getElementById("flygnxcqh03").style.display="block";
		document.getElementById("flygnxcqh01").style.display="none";
		document.getElementById("flygnxcqh02").style.display="none";		
		}
	}	
<!--周边游-->	
function zbchooseClick(x){
	var myid=new Array('zbmiddle01','zbmiddle02','zbmiddle03');
	for(var i=0;i<3;i++){
		if(x==myid[i]){
			document.getElementById(myid[i]).style.display="block";
			}else{
			document.getElementById(myid[i]).style.display="none";	
				}
		}
	}
<!--国内游-->
<!--火车票-->
function trainChangeImg01(){
	document.getElementById("trainchange").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changeafter.jpg)";
	}
function trainChangeImg02(){
	document.getElementById("trainchange").style.backgroundImage="url(../image/middle/%E6%90%9C%E7%B4%A2%E5%8C%BA/%E7%81%AB%E8%BD%A6%E7%A5%A8/changebefore.jpg)";
	}
/*城市切换*/	
function trainChangeContent(){	
	var address01=document.getElementById("train01").value;	
	var address02=document.getElementById("train03").value;	
	//var address=address01;	
	//address01=address02;	
	//address02=address;
	document.getElementById("train01").value=address02;
	document.getElementById("train03").value=address01;
	//alert(address02);
	}	
<!--APP首单立减-->
function appOver(appimg){
	if(appimg=='app01'){
		document.getElementById("app01").innerHTML="<img src='../image/middle/APP首单立减/appsdlj010.jpg' width='160' height='198' >";
		}else if(appimg=='app02'){
		document.getElementById("app02").innerHTML="<img src='../image/middle/APP首单立减/appsdlj020.jpg'  width='160' height='198'>";
		}else if(appimg=='app03'){
		document.getElementById("app03").innerHTML="<img src='../image/middle/APP首单立减/appsdlj030.jpg'  width='160' height='198'>";
		}else if(appimg=='app04'){
		document.getElementById("app04").innerHTML="<img src='../image/middle/APP首单立减/appsdlj040.jpg'  width='160' height='198'>";
		}else if(appimg=='app05'){
		document.getElementById("app05").innerHTML="<img src='../image/middle/APP首单立减/appsdlj050.jpg'  width='160' height='198'>";
		}else if(appimg=='app06'){
		document.getElementById("app06").innerHTML="<img src='../image/middle/APP首单立减/appsdlj060.jpg'  width='160' height='198'>";
		}
	}
function appOut(appimg){
	if(appimg=='app01'){
		document.getElementById("app01").innerHTML="<img src='../image/middle/APP首单立减/appsdlj01.jpg'>";
		}else if(appimg=='app02'){
		document.getElementById("app02").innerHTML="<img src='../image/middle/APP首单立减/appsdlj02.jpg'>";
		}else if(appimg=='app03'){
		document.getElementById("app03").innerHTML="<img src='../image/middle/APP首单立减/appsdlj03.jpg'>";
		}else if(appimg=='app04'){
		document.getElementById("app04").innerHTML="<img src='../image/middle/APP首单立减/appsdlj04.jpg'>";
		}else if(appimg=='app05'){
		document.getElementById("app05").innerHTML="<img src='../image/middle/APP首单立减/appsdlj05.jpg'>";
		}else if(appimg=='app06'){
		document.getElementById("app06").innerHTML="<img src='../image/middle/APP首单立减/appsdlj06.jpg'>";
		}
	}

