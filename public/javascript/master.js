// Loading Screen
$(window).load(function() { 
  $(".loader").delay(400).fadeOut("slow"); 
});

// Portfolio Section: Highlight current filter.
$(".nav-bar a").click(function() {
  $(".projects .nav-bar li").removeClass("current")
  $(this).parent().addClass("current")
  return false;
});

// Portfolio Section: FancyBox Plugin  
$('.projects .fancy a').fancybox({
  'openEffect' : 'elastic',
  beforeLoad: function() {
      var el, id = $(this.element).data('title-id');

      if (id) {
          el = $('#' + id);
      
          if (el.length) {
              this.title = el.html();
          }
      }
  },
  helpers : {
      title: {
          type: 'inside'
      }
  }
});

// Portfolio Section: Isotope Plugin
var $container = $('.projects');
$container.isotope();

$('#filters li a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
