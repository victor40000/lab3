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
	var data = JSON.parse(httpGet("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru"));
	var quote = data.quoteText;
	console.log(quote);

	var pictures = new Array(4);
    for (var i = 0; i < 4; i++) {
        pictures[i] = new Image();
        pictures[i].src = 'https://source.unsplash.com/collection/112716' + (3 + i) +'/' + width +'x'+ height;
        // console.log('https://source.unsplash.com/collection/112716'+ (3 + i) +'/'+ canvaWidth +'x'+ canvaHeight);
    }

	setTimeout(function() { 
		context.drawImage(pictures[0], -250, -250);
		context.drawImage(pictures[1], -250, 250)
		context.drawImage(pictures[0], 250, -250)
		context.drawImage(pictures[1], 250, 250)
	}, 2000);

	

	function httpGet(theUrl)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", theUrl, false ); 
	    xmlHttp.send( null );
	    return xmlHttp.responseText;
	}

});

        
