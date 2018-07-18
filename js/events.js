//define functions here
function getIt(){
  $('p').on('click').function(){
      alert('Hey!');
  });
};


$(document).ready(function(){

// call functions here
//$("p").click();
  $('p').bind('click', function(){});
  $('p').trigger('click');

});
