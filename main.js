

var set_interval;

var timer=0;
var click_count=0;
var flag=true;

function button_click_down(){
	

	set_interval=setInterval(set,500);
	

}
function set(){

	timer+=1;
	

}
	
function back_space(){

   var field=document.getElementById('field');
   var str,len;
	str=field.value;
		len=str.length;
		field.value=str.substring(0,len-1);

	
}

function set_digit(clickedId){


	var field=document.getElementById('field');
	
	var clicks=[];

	var d=new Date();
	clicks[click_count]=d.getTime();

	var clicks=[];

	if(timer>1){
		field.value+=clickedId.charAt(0);
		timer=0;
		click_count=0;
		clicks[0]=clicks[1]=clicks[2]=0;

	}else{
			click_count+=1;
			if(click_count==1){
				setTimeout(function(){

						if(click_count==1){
							field.value+=clickedId.charAt(1);

						}else if(click_count==2){
							field.value+=clickedId.charAt(2);

						}else if(click_count==3){
							field.value+=clickedId.charAt(3);
						}else{
							field.value+=clickedId.charAt(4);
						}
							click_count=0;
						

				},500);

			}

			
}
}	

	

		

	

	






