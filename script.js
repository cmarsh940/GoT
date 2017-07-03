$(function(){

    $('img').click(function(){
	    var id = this.id;
	    $.get('https://anapioficeandfire.com/api/houses/' + id, function(res){
			var str = "";
			str += "<h2>Name: " + res['name'] + "</h2>";
			str += "<h4>words: " + res['words'] + "</h4>";
			str += "<h4>titles: " + res['titles'] + "</h4>";
	   		 $("#index").html(str);
		}, "json");
 	});
});