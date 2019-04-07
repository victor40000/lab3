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
	console.log("123");
});

        
