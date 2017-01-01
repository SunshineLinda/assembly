;(function($){
	function alt(ele){
		var newele={
			text:"确定修改吗？",
			arr:["确定"],
			fn:null
		}
		var settings=$.extend({},newele,ele);
		var eleme=$("<div class='mark'></div><div class='alt'><h2>"+settings.text+"</h2><p class='ps'></p></div>");
		var str="";
		$.each(settings.arr,function(i,val){
			str+="<span>"+val+"</span>"
		})
		eleme.find(".ps").html(str);
		eleme.appendTo("body");
		eleme.find("span").on("click",function(){
			$(".mark").remove();
			$(".alt").remove();	
			if(settings.arr.length>1 && $(this).index()==0){
				if(settings.fn){
					settings.fn();
				}
			}
		})
	}
	$.alerter=function(opt){
		new alt(opt);
	}

})(jQuery)