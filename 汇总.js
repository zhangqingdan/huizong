window.onload=function(){



	var click=document.getElementsByClassName('click');
	for(var i=0;i<click.length;i++){
		click[i].onclick=function(){
			if(this.getElementsByTagName('ul')[0].getAttribute('class')=='hid'){
				for(var i=0;i<click.length;i++){
					click[i].getElementsByTagName('ul')[0].setAttribute('class','hid');
				}
				this.getElementsByTagName('ul')[0].setAttribute('class','show');
			}
			else if(this.getElementsByTagName('ul')[0].getAttribute('class')=='show'){
				this.getElementsByTagName('ul')[0].setAttribute('class','hid');
			}
		}
	}


















}




