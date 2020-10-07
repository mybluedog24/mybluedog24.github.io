/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
$(function() {

  "use strict";








  // profolio_data start
  var portfolio_data = {
    "hokahoapp": {
      "categories": ["Website", "iOS", "Android"],
      "webappurl": "https://app.hokaho.com/",
      "iosurl": "https://apps.apple.com/app/hokaho-toronto-real-estate/id1409510938",
      "androidurl": "https://play.google.com/store/apps/details?id=com.hokaho",
      "promourl": "http://promo.hokaho.com/",
      "title": "Hokaho Real Estate App",
      "subtitle": "AWS, Ionic, Angular, IOS, Android"
    },
    "schoolapp": {
      "categories": ["Website", "iOS", "Android"],
      "webappurl": "https://schoolapp.hokaho.com/",
      "title": "Ontario Schools Search Platform",
      "subtitle": "AWS, Ionic, Angular, IOS, Android"
    },
    "llmeat": {
      "categories": ["Website"],
      "url": "http://llmeat.ca/",
      "title": "L&L Meat Supplies",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "condoshumberbay": {
      "categories": ["Website"],
      "url": "http://condoshumberbay.com/",
      "title": "Humberbay Condos",
      "subtitle": "HTML5, CSS, JavaScript, PHP, MySQL"
    },
    "callosum": {
      "categories": ["Website"],
      "url": "http://callosumdevelopments.ca",
      "title": "Callosum Developments",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "wilsoncho": {
      "categories": ["Website"],
      "url": "http://wilsoncho.com",
      "title": "Wilson Cho",
      "subtitle": "HTML5, CSS, JavaScript, PHP, MySQL"
    },
    "teddesign": {
      "categories": ["Website"],
      "url": "http://teddesign.net",
      "title": "Ted Design",
      "subtitle": "WordPress, HTML5, CSS, JavaScript"
    },
    "hokahocommercialapp": {
      "categories": ["Website", "iOS", "Android"],
      "webappurl": "https://commercialapp.hokaho.com/",
      "iosurl": "https://apps.apple.com/app/id1511607396",
      "androidurl": "https://play.google.com/store/apps/details?id=com.hokaho.commercial",
      "promourl": "http://commercial.hokaho.com/",
      "title": "Hokaho Commercial Real Estate App",
      "subtitle": "AWS, Ionic, Angular, IOS, Android"
    },
    "kingwest533": {
      "categories": ["Website"],
      "url": "http://kingwest533.com",
      "title": "King Toronto Condos",
      "subtitle": "Email Marketing, HTML5, CSS, JavaScript"
    },
    "erichomelife": {
      "categories": ["Website"],
      "url": "http://erichomelife.com",
      "title": "Eric Homelife",
      "subtitle": "HTML5, CSS, JavaScript, PHP, MySQL"
    },
    "digitalrestaurant": {
      "categories": ["Website"],
      "url": "http://digitalrestaurant.ca/",
      "title": "Digital Restaurant",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "max3": {
      "categories": ["Website"],
      "url": "http://max3creative.com/",
      "title": "Max3 Creative",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "foodbiz": {
      "categories": ["Website"],
      "url": "http://foodbizfactory.com/",
      "title": "Food Biz Factory",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "erichomelifeapp": {
      "categories": ["Website", "iOS", "Android"],
      "webappurl": "https://commercialapp.hokaho.com/",
      "iosurl": "https://apps.apple.com/app/id1489774307",
      "androidurl": "https://play.google.com/store/apps/details?id=com.ericlau",
      "promourl": "http://promo.fareastdigital.net/ericlau/app",
      "title": "Eric Homelife Real Estate App",
      "subtitle": "AWS, Ionic, Angular, IOS, Android"
    },
    "refsys": {
      "categories": ["Website"],
      "url": "http://demo.refsys.developerfrank.com/",
      "title": "Refsys Canada Co.",
      "subtitle": "WordPress, HTML5, CSS, JavaScript"
    },
    "fareastdigital": {
      "categories": ["Website"],
      "url": "http://fareastdigital.com",
      "title": "Far East Digital Inc.",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "fareastdigitalpromo": {
      "categories": ["Website"],
      "url": "http://promo.fareastdigital.com",
      "title": "Far East Digital Promotion",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "axccpa": {
      "categories": ["Website"],
      "url": "http://axccpa.com/",
      "title": "AXC CPA",
      "subtitle": "Video, HTML5, CSS, JavaScript"
    },
    "pollychanstudio": {
      "categories": ["Website"],
      "url": "http://pollychanstudio.com/",
      "title": "Polly Chan Studio",
      "subtitle": "WordPress, HTML5, CSS, JavaScript"
    },
    "armordatacenter": {
      "categories": ["Website"],
      "url": "http://demo.fareastdigital.com/armordatacenter/",
      "title": "Armor Datacenter",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "digitex": {
      "categories": ["Website"],
      "url": "http://demo.fareastdigital.com/digitex/",
      "title": "Digitex",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "dnnasilveredge": {
      "categories": ["Website"],
      "url": "http://dnnasilveredge.com/",
      "title": "Game Guild Site",
      "subtitle": "HTML5, CSS, JavaScript"
    },
    "dnnasilveredgesimulator": {
      "categories": ["Website"],
      "url": "http://dnnasilveredge.com/simulatorT5/destroyer-pve.html",
      "title": "Game Skill Simulator",
      "subtitle": "HTML5, CSS, JavaScript"
    }
  }
;
  // profolio_data end

  function html_portfilio(portfolio) {

    const entries = Object.entries(portfolio);
    let result = '';
    for (const [name, port_obj] of entries) {
      result += template(name, port_obj);
    }
    return result;

  }

  function template(name, port_obj) {

    let categories = port_obj.categories.join(" ");
    let url = port_obj.url;
    let title = port_obj.title;
    let subtitle = port_obj.subtitle;
    let grid_size = port_obj.grid_size;
    if (!grid_size) grid_size = "square";

    // let thumbnail_path = "./portfolio/images/" + name + "_thumbnail.jpg";
    // let image_path = "./portfolio/images/" + name + "_image.jpg";
    // let thumbnail_path = "./img/works/thumbnail/1.jpg";
    // let image_path = "./img/works/original-size/1.jpg";
    let thumbnail_path = `./projects/images/${name}_thumbnail.jpg`;
    let image_path = `./projects/images/${name}_image.jpg`;
    let video_url = null;
    let end_date = null;

    if (port_obj.thumbnail_path) {thumbnail_path = port_obj.thumbnail_path}
    if (port_obj.image_path) {image_path = port_obj.image_path}
    if (port_obj.video_url) {video_url = port_obj.video_url}
    if (port_obj.end_date) {end_date = port_obj.end_date}

    let video_html = "";
    if (video_url) {
      video_html = '<a href="'+video_url+'" class="popup-video theme-color"><i class="fa fa-play"></i></a>';
    }

    return `
    <!-- grid item -->
    <div class="art-grid-item ${categories}">
      <!-- grid item frame -->
      <a data-fancybox="gallery" href="${image_path}" class="art-a art-portfolio-item-frame art-${grid_size}">
        <!-- img -->
        <img src="${thumbnail_path}" alt="item">
        <!-- zoom icon -->
        <span class="art-item-hover"><i class="fas fa-expand"></i></span>
      </a>
      <!-- grid item frame end -->
      <!-- description -->
      <div class="art-item-description">
        <!-- title -->
        <h5 class="mb-15">${title}</h5>
        <div class="mb-15">${subtitle}</div>
        <!-- button -->
        <a href="projects/${name}/" class="art-link art-color-link art-w-chevron">Read more</a>
      </div>
      <!-- description end -->

    </div>
    <!-- grid item end -->
    `;

  }



  var portfolio_content = html_portfilio(portfolio_data);
  $(".art-grid").append(portfolio_content);


  // swup js
  const options = {
    containers: ["#swup", "#swupMenu"],
    animateHistoryBrowsing: true,
  };

  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector('#scrollbar'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector('#scrollbar2'), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function() {

    // anime({
    //   targets: '.art-preloader .art-preloader-content',
    //   opacity: [0, 1],
    //   delay: 200,
    //   duration: 600,
    //   easing: 'linear',
    //   complete: function(anim) {
    //
    //   }
    // });
    // anime({
    //   targets: '.art-preloader',
    //   opacity: [1, 0],
    //   delay: 2200,
    //   duration: 400,
    //   easing: 'linear',
    //   complete: function(anim) {
    //     $('.art-preloader').css('display', 'none');
    //   }
    // });
  });

  // var bar = new ProgressBar.Line(preloader, {
  //   strokeWidth: 1.7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 750,
  //   trailWidth: 1.7,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });
  //
  // bar.animate(1);

  // counters
  anime({
    targets: '.art-counter-frame',
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: 'linear',
  });

  anime({
    targets: '.art-counter',
    delay: 1300,
    opacity: [1, 1],
    complete: function(anim) {
      $('.art-counter').each(function() {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 2000,
          easing: 'linear',
          step: function(now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    }
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 500,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var circleprog1Data = parseFloat(document.getElementById('circleprog1').getAttribute('data-value'));
  bar.animate(circleprog1Data);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 600,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var circleprog2Data = parseFloat(document.getElementById('circleprog2').getAttribute('data-value'));
  bar.animate(circleprog2Data);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: 'easeInOut',
    duration: 1400,
    delay: 700,
    trailWidth: 7,
    step: function(state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
    }
  });

  var circleprog3Data = parseFloat(document.getElementById('circleprog3').getAttribute('data-value'));
  bar.animate(circleprog3Data);

  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 800,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  var lineprog1Data = parseFloat(document.getElementById('lineprog1').getAttribute('data-value'));
  bar.animate(lineprog1Data);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 900,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  var lineprog2Data = parseFloat(document.getElementById('lineprog2').getAttribute('data-value'));
  bar.animate(lineprog2Data);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1000,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  var lineprog3Data = parseFloat(document.getElementById('lineprog3').getAttribute('data-value'));
  bar.animate(lineprog3Data);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1100,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  var lineprog4Data = parseFloat(document.getElementById('lineprog4').getAttribute('data-value'));
  bar.animate(lineprog4Data);

  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: 'easeInOut',
    duration: 1400,
    delay: 1200,
    trailWidth: 1.72,
    svgStyle: {
      width: '100%',
      height: '100%'
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });

  var lineprog5Data = parseFloat(document.getElementById('lineprog5').getAttribute('data-value'));
  bar.animate(lineprog5Data);

  // Contact form
  $('.art-input').keyup(function() {
    if ($(this).val()) {
      $(this).addClass('art-active');
    } else {
      $(this).removeClass('art-active');
    }
  });

  $("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {

      var tl = anime.timeline({
        easing: 'easeOutExpo',
      });

      tl
        .add({
          targets: '.art-submit',
          opacity: 0,
          scale: .5,
        })
        .add({
          targets: '.art-success',
          scale: 1,
          height: '45px',
        })
    });
    return false;
  });

  // portfolio filter
  $('.art-filter a').on('click', function() {
    $('.art-filter .art-current').removeClass('art-current');
    $(this).addClass('art-current');

    var selector = $(this).data('filter');
    $('.art-grid').isotope({
      filter: selector
    });
    return false;
  });

  // masonry Grid
  $('.art-grid').isotope({
    filter: '*',
    itemSelector: '.art-grid-item',
    transitionDuration: '.6s',
  });

  // slider testimonials
  var swiper = new Swiper('.art-testimonial-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-testi-swiper-next',
      prevEl: '.art-testi-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper('.art-works-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-works-swiper-next',
      prevEl: '.art-works-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper('.art-blog-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.art-blog-swiper-next',
      prevEl: '.art-blog-swiper-prev',
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "thumbs",
      "close"
    ],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "close"
    ],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: [
      "zoom",
      "slideShow",
      "thumbs",
      "close",
    ],
  });

  $.fancybox.defaults.hash = false;

  $('.current-menu-item a').clone().appendTo('.art-current-page');

  $('.art-map-overlay').on('click', function() {
    $(this).addClass('art-active');
  });

  $('.art-info-bar-btn').on('click', function() {
    $('.art-info-bar').toggleClass('art-active');
    $('.art-menu-bar-btn').toggleClass('art-disabled');
  });

  $('.art-menu-bar-btn').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar').toggleClass("art-active");
    $('.art-info-bar-btn').toggleClass('art-disabled');
  });

  $('.art-info-bar-btn , .art-menu-bar-btn').on('click', function() {
    $('.art-content').toggleClass('art-active');
  });

  $('.art-curtain , .art-mobile-top-bar').on('click', function() {
    $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
  });

  $('.menu-item').on('click', function() {
    if ($(this).hasClass('menu-item-has-children')) {
      $(this).children('.sub-menu').toggleClass('art-active');
    } else {
      $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
    }
  });

  // reinit
  document.addEventListener("swup:contentReplaced", function() {

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function() {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
      }).done(function() {

        var tl = anime.timeline({
          easing: 'easeOutExpo',
        });

        tl
          .add({
            targets: '.art-submit',
            opacity: 0,
            scale: .5,
          })
          .add({
            targets: '.art-success',
            scale: 1,
            height: '45px',
          })
      });
      return false;
    });

    // Masonry Grid
    $('.art-grid').isotope({
      filter: '*',
      itemSelector: '.art-grid-item',
      transitionDuration: '.6s',
    });

    $('.art-filter a').on('click', function() {
      $('.art-filter .art-current').removeClass('art-current');
      $(this).addClass('art-current');

      var selector = $(this).data('filter');
      $('.art-grid').isotope({
        filter: selector
      });
      return false;
    });

    anime({
      targets: '.art-counter-frame',
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: 'linear',
    });

    $('.art-counter').each(function() {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'linear',
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

    // slider testimonials
    var swiper = new Swiper('.art-testimonial-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-testi-swiper-next',
        prevEl: '.art-testi-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        }
      },
    });

    // slider works
    var swiper = new Swiper('.art-works-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-works-swiper-next',
        prevEl: '.art-works-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper('.art-blog-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.art-blog-swiper-next',
        prevEl: '.art-blog-swiper-prev',
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close"
      ],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: [
        "zoom",
        "slideShow",
        "thumbs",
        "close",
      ],
    });

    $.fancybox.defaults.hash = false;

    $('.current-menu-item a').clone().prependTo('.art-current-page');

    $('.menu-item').on('click', function() {
      if ($(this).hasClass('menu-item-has-children')) {
        $(this).children('.sub-menu').toggleClass('art-active');
      } else {
        $('.art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn').removeClass('art-active , art-disabled');
      }
    });

  })

});
