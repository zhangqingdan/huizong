window.onload=function(){

	function getLength(str){
		return str.replace(/[^\x00-xff]/g,'xx').length;
	}


	var Input=document.getElementsByTagName('input');
	var oName=Input[0];
	var pwd=Input[1];
	var pwd2=Input[2];
	// alert(Input.length)


	var aP=document.getElementsByClassName('container_1_right');
	// alert(aP.length)
	var oName_msg=aP[0];
	// alert(oName_msg.innerHTML)

	var pwd_msg=aP[1];
	var pwd2_msg=aP[2];
	var aPP=document.getElementsByClassName('container_1_left')[0].getElementsByTagName('p')[0];

	var Span=document.getElementsByClassName('span')[0].getElementsByTagName('span');
	var Span2=Span[1];
	var Span3=Span[2];






	var name_length=0;




	oName.onfocus=function(){
		oName_msg.innerHTML="<i class='ati'></i><span class='container_span'>5-25个字符，一个汉字字符为两个字符，推荐使用中文会员名。</span>"
	}
	oName.onkeyup=function(){
	    name_length=getLength(this.value);
		aPP.innerHTML=name_length+'字符';
		if(name_length==0){
			aPP.innerHTML='';
		}
	}
	oName.onblur=function(){
		aPP.innerHTML='';

		//含有非法字符
		var re=/[^\w\ue00-\u9fa5]/g;
		if(re.test(this.value)){
		oName_msg.innerHTML="<i class='wr'></i><span class='container_span'>含有非法字符</span>"
		}
		//不能为空
		if(this.value.length==0){
		oName_msg.innerHTML="<i class='wr'></i><span class='container_span'>不能为空</span>"
		}
		//长度超过25个字符
		if(this.value.length>25){
		oName_msg.innerHTML="<i class='wr'></i><span class='container_span'>长度超过25个字符</span>"
		}
		//长度少于6个字符
		if(getLength(this.value)<6){
		oName_msg.innerHTML="<i class='wr'></i><span class='container_span'>长度少于6个字符</span>"
		}
		//OK
		else{
		oName_msg.innerHTML="<i class='ri'></i><span class='container_span'>OK</span>"
		}
	}






	pwd.onfocus=function(){
		pwd_msg.innerHTML="<i class='ati'></i><span class='container_span'>6-16个字符，请使用字母加数字或符号的组合密码。</span>"


	}
	pwd.onkeyup=function(){
		//大于5个字符为中
		//大于10个字符为强

		if(getLength(this.value)>5&&getLength(this.value)<=10){
			Span2.style.background='rgb(247,134,0)';
			Span3.style.background='rgb(255,184,0)';
			pwd2.removeAttribute('disabled');


		}else if(getLength(this.value)<=5){
			Span2.style.background='rgb(255,184,0)';
			pwd2.setAttribute('disabled','disabled');


		}else{
			Span3.style.background='rgb(247,134,0)';

		}

	}
	pwd.onblur=function(){
		var num=this.value.length;
		var re = new RegExp('\\d{' + num + '}', 'g');
		var re2 = new RegExp('[A-Za-z]{' + num + '}', 'g');
		var re3 = new RegExp('[\\ue00-\\u9fa5]{' + num + '}', 'g');
		if(getLength(this.value)>16){
			pwd_msg.innerHTML="<i class='wr'></i><span class='container_span'>大于16个字符</span>";
		}else if(re.test(this.value)){
			pwd_msg.innerHTML="<i class='wr'></i><span class='container_span'>不能全部为数字</span>";
		}else if(re2.test(this.value)){
			pwd_msg.innerHTML="<i class='wr'></i><span class='container_span'>不能全部为字母</span>";
		}else if(re3.test(this.value)&&getLength(this.value)==2*num){
			pwd_msg.innerHTML="<i class='wr'></i><span class='container_span'>不能全部为汉字</span>";
		}else{
			pwd_msg.innerHTML="<i class='ri'></i><span class='container_span'>OK</span>";
		}
		
	}


	
	pwd2.onblur=function(){
		if(this.value==pwd.value){
			pwd2_msg.innerHTML="<i class='ri'></i><span class='container_span'>OK</span>";


		}
		else if(this.value==""){
			pwd2_msg.innerHTML="";

		}else{
			pwd2_msg.innerHTML="<i class='wr'></i><span class='container_span'>与上次输入不符，请重新输入。</span>";


		}
		
	}














}