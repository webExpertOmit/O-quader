 //==============================
 //    Owl Slider
 //===============================

 $('.owl-slider').owlCarousel({
     loop: true,
     dots: false,
     autoplay: true,
     autoplayTimeout: 5000,
     autoplayHoverPause: true,
     smartSpeed: 2500,
     center: true,
     responsive: {
         0: {
             items: 1
         },
         600: {
             items: 1
         },
         1000: {
             items: 1
         }
     }
 })
