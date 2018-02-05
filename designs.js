// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var sub = $('input[type=submit]');

//create a grid - canvas for painting
sub.click(function makeGrid(event) {
  event.preventDefault(); // prevents website from refreshing
  var high = $('#inputHeight').val();
  var wide = $('#inputWidth').val();
  var canvas = $('#pixelCanvas');
  //removes previous grid/canvas
  $('tr').remove();
  //a loop for adding table rows
  for (let x = 0; x < high; x++){
      canvas.append('<tr></tr>');
    }
  //a loop for adding table cells/data
  for (let y = 0; y < wide; y++){
      $('tr').append('<td></td>');
    }
});

  //clicking paints a column
  $('#pixelCanvas').on('mousedown', 'td', function(){
  	var brushColor = $('#colorPicker').val();
  	$(this).css('background-color', brushColor);
  });

  //LMB pressed = start painting (kep pressed to paint)
  $(document).mousedown(function(){
  	$('td').bind('mouseover', function(){
  		var brushColor = $('#colorPicker').val();
  		$(this).css('background-color', brushColor);
  	});
  })
  //LMB released = stop painting
  .mouseup(function(){
  	$('td').off('mouseover');
  })
