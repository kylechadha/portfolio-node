$(window).load(function() { 
  // $(".loader").delay(400).fadeOut("slow"); 
});

// Portfolio Section: General Configuration
function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}
equalHeight($(".portfolio article"));

$(".menu-trigger").click(function() {
  $("#menu").fadeToggle(300);
  $(this).toggleClass("active")
});

$(".nav-bar a").click(function() {
  $(".portfolio .nav-bar li").removeClass("current")
  $(this).parent().addClass("current")
  return false;
});

// Portfolio Section: FancyBox Plugin  
// $('.portfolio .fancy a').fancybox({
//   'openEffect' : 'elastic',
//   beforeLoad: function() {
//       var el, id = $(this.element).data('title-id');

//       if (id) {
//           el = $('#' + id);
      
//           if (el.length) {
//               this.title = el.html();
//           }
//       }
//   },
//   helpers : {
//       title: {
//           type: 'inside'
//       }
//   }
// });

// Portfolio Section: Isotope Plugin
var $container = $('#projects');
$container.isotope({
});

$('#filters li a').click(function(){
  var selector = $(this).attr('data-filter');
  $container.isotope({ filter: selector });
  return false;
});
