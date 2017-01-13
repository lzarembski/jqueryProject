$(document).ready(function () {
   
/* h1 - font-family change */
   $("h1, h2").css("font-family", "TimesNewRoman");
   
/* h2 enlarge font-size */  
   $("h2").css("font-size", "1.85em");
   
/* append image */
   $("#Churchill h2:first-child").append('<br><img src="img/churchill.jpg"/>');
   $("#Ghandi h2:first-child").append('<br><img src="img/ghandi.jpg"/>');
   $("#Demosthenes h2:first-child").append('<br><img src="img/demosthenes.jpg"/>');
   
/* image border */   
   $("img").css({"margin-top": ".5em", "border": "1.75px solid #d5dbd8"});   
      
/* h2 - mouseenter and mouseleave */
   $("article header").on( "mouseenter",function () {
      $(this).css({"color": "#db152c", "cursor": "pointer"});
   });
   $("article header").on( "mouseleave",function () {
      $(this).css({"color": "#ffffff", "cursor":"pointer"});
   });
     
/* h2-onclick alert when h2 is red */
   $("#Churchill header").click(function () {
      alert("Winston Churchill delivered the speech 'Their Finest Hour' in 1940 at the age of 66.");
   }); 
   $("#Ghandi header").click(function () {
      alert("Mahatma Gandhi delivered the speech 'Quit India' in 1942 at the age of 73.");
   });   
   $("#Demosthenes header").click(function () {
      alert("Demosthenes delivered the speech 'The Third Philippic' in 342 B.C.E. at the age of 42.");
   });     
   
/* navigation events-hide, show, hide */ 
   $("article").hide();
   $("#BtnChurchill").click(function () {
      $(".slideshow-container").hide("slow");
      $("#Churchill").show("slow");
   });
   $("#BtnChurchill").dblclick(function () {
      $(".slideshow-container").show("slow");      
      $("#Churchill").hide("slow");
   });
   $("#BtnGhandi").click(function () {
      $(".slideshow-container").hide("slow");      
      $("#Ghandi").show("slow");
   });
   $("#BtnGhandi").dblclick(function () {
      $(".slideshow-container").show("slow");         
      $("#Ghandi").hide("slow");
   });
   $("#BtnDemosthenes").click(function () {
      $(".slideshow-container").hide("slow");     
      $("#Demosthenes").show("slow");
   });
   $("#BtnDemosthenes").dblclick(function () {
      $(".slideshow-container").show("slow");    
      $("#Demosthenes").hide("slow");
   });
   
   /* donation form hide, show, hide */ 
   $(".donation-form").hide();
      $("#BtnDonate").click(function () {
      $(".slideshow-container").hide("slow");  
      $(".donation-form").show("slow");
      $("input").css("margin", "0em .25em 0 1em");
   });
   $("#BtnDonate").dblclick(function () {
      $(".donation-form").hide("slow");
      $(".slideshow-container").show("slow");        
   });
    $("#submit").click(function () {
      $(".donation-form").hide("slow");
      $(".slideshow-container").show("slow");         
   });

   /* slide presentation - http://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto  */
   
   var slideIndex = 0;
    showSlides();

   function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3500); 
    }   
});

