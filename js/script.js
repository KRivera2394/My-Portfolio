$('.expandHome').mouseover(function() {
    $('.sub-home').css({
          'display': 'block'
      }); 
  });
  $('.subnavbtn').mouseover(function() {
    $('.sub-home').css({
          'display': 'none'
      }); 
  });
  
  $('#trapezoid').mouseleave(function() {
    $('#trapezoid').css({
          'margin-top': '-53px'
      }); 
      $('.sub-home').css({
          'display': 'none'
      }); 
  }).mouseenter(function() {
    $('#trapezoid').css({
          'margin-top': '0px'
      }); 
  });


  function move(card, index) {
    setTimeout(function() {
      card.classList.toggle('loaded');
    }, 100 * index);
  };
  
  // function fade(card, index) {
  //   setTimeout(function() {
  //     card.querySelector('.content').classList.toggle('loaded');
  //   }, 100 * index);
  // }
  
  function load() {
    // converting nodelist to array for some browsers
    const cards = [].slice.call(document.querySelectorAll('.card'));
    cards.forEach(move);
    setTimeout(function() {
      // cards.forEach();
    }, 100 * cards.length);  
  }
  
  document.querySelector('.load').addEventListener('click', load);

  
  var vid = document.getElementById("vid");
  vid.addEventListener("timeupdate", function () {
      if(this.currentTime >= 7.0) {
          this.currentTime = 0.0;
      }
  });

