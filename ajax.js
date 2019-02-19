function createXHR(){
	var xhr;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
		if(xhr.overrideMimeType){
			xhr.overrideMimeType("text/xml");
		}
	}else{
		var activeXName = ["MSXML2.XMLHTTP","Microsoft.XMLHTTP"];
		for(var i=0;i<activeXName.length;i++){
			try
			{
				xhr = new ActiveXObject(activeXName[i]);
			}
			catch (e)
			{
			}
		}
	}
	return xhr
}

var ajax = {
	get:function(url,fn){
		var xhr = createXHR();
		if(xhr){
			xhr.open("get",url,true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					fn.call(this,xhr.responseText);
				}
			}
			xhr.send(null)
		}
	},

	post:function(url,fn){
		var xhr = createXHR();
		if(xhr){
			xhr.open("post",url,true);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=gbk;");
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					fn.call(this,xhr.responseText)
				}
			}
			xhr.send("发送请求的参数")//发送请求的参数,请求体
		}
	}
}
