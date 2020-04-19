$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $(".dropdown-trigger").dropdown();
      
});

$(document).ready(function(){
    $('.collapsible').collapsible();
});

AOS.init();

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


