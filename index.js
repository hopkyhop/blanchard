/*dropdown*/
const params = {                       //инициализация переменных
  btnClassName: "header__item-btn",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

/*menu*/
window.addEventListener('DOMContentLoaded', function () {
  document.querySelector("#burger").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.add("active");
  })
  document.querySelector("#cross").addEventListener("click", function() {
    document.querySelector(".header__nav").classList.remove("active");
  })
  })

setMenuListener();

/*swiper*/
const swiper = new Swiper('.top-wrapper .swiper-container', {
    allowTouchMove: false,
    loop: true,         //непрерывный цикл
    effect: 'fade',     //эффект перехода
    speed: 10000,       //продолжительность перехода между слайдами (в мс)
    autoplay: {
      delay: 10000      //задержка
    }
  });


/*select*/
document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
     itemSelectText: '',
     shouldSort: false,

  });

});

/*gallery*/
let gallerySlider = new Swiper(".gallery__slides__container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__nav-next",
    prevEl: ".gallery__nav-prev"
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },



  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

/*catalog*/
document.addEventListener('DOMContentLoaded', function () {
  $( ".js-accordion" ).accordion({
      collapsible: true,
      active: 0,
      icons: false,
      heightStyle: 'content'
    });
});

document.querySelectorAll('.question__list__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.question__list__btn').forEach(function (btn) {
      btn.classList.remove('question__list__btn--active')
    });
    e.currentTarget.classList.add('question__list__btn--active');
    document.querySelectorAll('.catalog__artist').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('catalog__artist--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog__artist--active');
    });
});

/*events*/
let eventsSlider = new Swiper(".events__slides__container", {
  loop: false,
  autoplay: false,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 50,
  navigation: {
    prevEl: ".events__nav-prev",
    nextEl: ".events__nav-next",
  },

  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },

    1025: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }


  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

/*projects*/
tippy('.js-tooltip', {
  theme: 'purple',
  maxWidth: 264,
});


let projectsSlider = new Swiper(".projects__slides__container", {
  loop: false,
  autoplay: false,
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".projects__nav-next",
    prevEl: ".projects__nav-prev"
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }

  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

/*form*/
let phone = document.querySelector("input[type='tel']")
let name = document.querySelector("input[type='name']")
var im = new Inputmask("+7(999) 999-99-99")
im.mask(phone);
new window.JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    rules: {
      name: {
        required: true,
        minLength: 2,
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length ===  10;
        }
    },
    },
   messages: {
         name: "Недопустимый формат",
         phone: {
           required: "Недопустимый формат",
           function: "Недопустимый формат"
         }
       }
    });

/*map*/
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/placemark.png",
      iconImageSize: [20, 20],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}
