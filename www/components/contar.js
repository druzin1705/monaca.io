// This is a JavaScript file


$(document).on("click","#mais", function(){
  var v1= $("#v1").val();
  var v2= $("#v2").val();

  var resultado= parseFloat(v1) + parseFloat(v2);
  $("#result").val(resultado);
});
