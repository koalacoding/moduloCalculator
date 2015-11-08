$(function() {
	$('input').keyup(function() {
		// New width of the input.
		var newWidth = ($(this).val().length * 30) + 7 + 'px';
		$(this).animate({width: newWidth}, 500);
		var input1value = parseInt($('#input1').val());
		var input2value = parseInt($('#input2').val());

		if (!(isNaN(input1value)) && !(isNaN(input2value))) {
			$('#result').text(input1value % input2value);
		}
	});
})