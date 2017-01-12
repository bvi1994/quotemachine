/* function get_randomColor(){
	var color = '#';
	var values = '0123456789ABCDEF';
	for(var _ = 0; _ < 6; _++){
		color += values[Math.floor(Math.random() * 16)]; 
		// Here we pick the hex value at random by appending each value to the variable 'color'
	}
	return color;
} */

function newQuote(){
	var color = randomColor();
	var quoteData = $.getJSON('http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en&callback=', function(json){
		quoteData = json;
		var quote = quoteData.quoteText; // Grab the actual quote from the jSON variable
		var author = quoteData.quoteAuthor; // Grab the author of the quote
		$('#quote').text(quote); // Display the quote
		$('#author').text('- ' + author); //Display the author
		$('#twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + quote + ' - ' + author);
		$('#changeQuote').css('background-color', color)
		$('body').css('background-color', color);
		$('#tweetButton').css('background-color', color);
	});
}

$(document).ready(function(){
	newQuote();
	$('#changeQuote').click(function(){
		newQuote();
	});
});