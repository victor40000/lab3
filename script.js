$(document).ready(function(){
	width = 500;
    height = 500;
	var cnv = document.createElement('canvas');
	cnv.width = width;
	cnv.height = height;
	// cnv.id = "someId"
	body = document.getElementsByTagName('body')[0];
	body.appendChild(cnv);
	context = cnv.getContext('2d');
	context.strokeRect(15, 15, 266, 266);
	var data = httpGet("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru");
	// var quote = data.quoteText;
	console.log(data.quoteText);

	function httpGet(theUrl)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", theUrl, false ); 
	    xmlHttp.send( null );
	    return xmlHttp.responseText;
	}

});

        
