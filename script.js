$(document).ready(function(){
	width = 500;
    height = 500;
    body = document.getElementsByTagName('body')[0];
    var link = document.createElement("a");
    body.appendChild(link);
	var cnv = document.createElement('canvas');
	link.appendChild(cnv)
	cnv.width = width;
	cnv.height = height;
	// cnv.id = "someId"
		context = cnv.getContext('2d');
	fontSize = 40;
	context.font = "bold "+ fontSize +"px Arial";
	context.fillText("Loading...", 0, 30);
	context.textBaseline = "center";
	// context.fillStyle = "grey";
	// context.strokeRect(15, 15, 266, 266);
	var data = JSON.parse(httpGet("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=ru"));
	var quote = data.quoteText;
	console.log(quote);

 	var pictures = new Array(4);
    for (var i = 0; i < 4; i++) {
        pictures[i] = new Image();
        pictures[i].src = 'https://source.unsplash.com/collection/112716'+ (i + 3) +'/'+ 300 +'x'+ 300;
    }

    var strings = [];
    var words = quote.split(" ");
    var counter = 0;
    for (var i = 0; i < words.length; i++) {
        if (context.measureText(words.slice(counter, i + 1).join(" ")).width >= width - 10) {
            strings.push(words.slice(counter, i).join(" "));
            counter = i;
        }
    }
    strings.push(words.slice(counter, words.length).join(" "));
	
           

	setTimeout(function() { 
		context.filter = 'blur(2px) grayscale(70%)';
		context.drawImage(pictures[0], -50, -50);
		context.drawImage(pictures[1], -50, 250);
		context.drawImage(pictures[2], 250, -50);
		context.drawImage(pictures[3], 250, 250);
		context.filter = 'blur(0px)';
		context.fillStyle = "white";
		for (var i = 0; i < strings.length; i++) {
			context.fillText(strings[i], (width - context.measureText(strings[i]).width) / 2, (height - fontSize * strings.length) / 2 + fontSize * (i + 1));
		}
		var url = cnv.toDataURL("image/jpeg");
		link.href = url;
		link.download = "quote.jpg";
	}, 10000);



	function httpGet(theUrl)
	{
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.open( "GET", theUrl, false ); 
	    xmlHttp.send( null );
	    return xmlHttp.responseText;
	}

});

        
