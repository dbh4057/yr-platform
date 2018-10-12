
$(document).ready(function(){
	setInterval(function(){
		var today = new Date();

		var year = today.getFullYear();

		var month = today.getMonth()+1 >=10 ? today.getMonth()+1 : "0"+(today.getMonth()+1) ;
		var date = today.getDate() >=10 ? today.getDate(): "0"+(today.getDate()) ;
		var i = today.getDay();
		var day ="";
		switch(i){
			
			case 0:
				day="星期日";
				break;
			case 1:
				day="星期一";
				break;
			case 2:
				day="星期二";
				break;
			case 3:
				day="星期三";
				break;
			case 4:
				day="星期四";
				break;
			case 5:
				day="星期五";
				break;
			case 6:
				day="星期六";
				break;

		}

		var hour =today.getHours() >=10 ? today.getHours() : "0"+(today.getHours()) ;
		var min = today.getMinutes() >=10 ? today.getMinutes() : "0"+(today.getMinutes()) ;
		var sec = today.getSeconds() >=10 ? today.getSeconds() : "0"+(today.getSeconds()) ;


		$(".time").html(year+"年"+month+"月"+date+"日  "+day+ hour+":"+min+":"+sec);


	},1000);
});