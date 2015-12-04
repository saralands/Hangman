var HANG = HANG || {};

HANG.hang = function(word){
	var alpha = 'abcdefghijklmnopqrstuvwxyz';
	var alphaArr = alpha.split(''); //turn string into array
	// console.log(alphaArr);
	var wordArr = word.split('');

	console.group('info about arrays');
		console.log(alphaArr);
		console.log(wordArr);
	console.groupEnd();

	for(var i = 0; i < alphaArr.length; i++){
		$('#js-letter-picker').append('<span data-letter="' + alphaArr[i] + '">' + alphaArr[i] + '</span>');
	}

	for (var i = 0; i < wordArr.length; i++){
		$('#js-word').append('<span data-letter="' + wordArr[i] + '"></span>');
	}

	$('#js-letter-picker span').on('click', function(){
		var selectedLetter = $(this).data('letter');
		alert(selectedLetter);

		$('#js-word span[data-letter="' + selectedLetter + '"]').text(selectedLetter);

		var count = $('#js-word span[data-letter="' + selectedLetter + '"]').length;
		console.log('count: ' + count);

		//if count > 0, the letter clicked exists in our word

		if(count > 0 ){
			$(this).addClass('has-letter');
			// console.log('Number of guesses remaining:' + Hang.guesses);
		}

		//if they're out of guesses, ends it all

		//If there's no empty spans, there's a winner

		var winner = $('#js-word span:empty').length;
		if(winner===0){
			alert('You won!');
		}
	});
	
}


$(document).on('ready', function(){
	HANG.hang('peter');
});

