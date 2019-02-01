function getIt(){
  $('p').on('click', function(){
    alert ('hey');
  });
}

function frameIt(){
  $('img').on('load', function(){
    $( this ).addClass( "tasty" );
  });
}



$(document).ready(function(){
getIt();
frameIt();


});
