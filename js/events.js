//define functions here
function getIt(){
  $('p').on('click' , function(){
      alert('Hey!');
  });
};

function frameIt(){
  $('img').addClass('tasy');
};


$(document).ready(function(){

  getIt();

  frameIt();

});
