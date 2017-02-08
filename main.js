$(function(){
  var $newItemForm = $('#newItemForm').hide();
  var $button = $('#showForm');
  var $addButton = $('#addButton');
  
  $button.on('click', function(){
    $button.hide();
    $newItemForm.show();
    
  });
  
  $newItemForm.on('submit', function(e){
    e.preventDefault();
    var newText = $('input:text').val();
    $('li:last').append('<li>'+newText+'</li>');
    $button.show();
    $newItemForm.hide();
    $('input:text').val('');
  });
  
});