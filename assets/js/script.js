  // Show or hide the scroll button based on scroll position
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    const scrollBtn = document.getElementById("scroll-top--btn");
    if (document.documentElement.scrollTop > 500) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  }

  // Smooth scroll to the top
  function scrollToTop() {
    window.scrollTo(
        {
            top: 0, 
            behavior: 'smooth'
        });
  }



//   AOS
AOS.init();
