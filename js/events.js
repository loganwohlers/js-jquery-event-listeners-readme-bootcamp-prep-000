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

funtion pressIt(){
  $(document).on('keydown', function(key){
    
  })
}


$(document).ready(function(){
getIt();
frameIt();


});
