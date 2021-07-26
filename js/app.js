var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
   ua = navigator.userAgent;
   var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
   return is_ie;
}
if (isIE()) {
   document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
   document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('_webp');
   } else {
      document.querySelector('body').classList.add('_no-webp');
   }
});
function ibg() {
   if (isIE()) {
      let ibg = document.querySelectorAll("._ibg");
      for (var i = 0; i < ibg.length; i++) {
         if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
         }
      }
   }
}
ibg();

if (document.querySelector('.wrapper')) {
   document.querySelector('.wrapper').classList.add('_loaded');
}

var unlock = true;

//=================
//=================
//Menu
let body = document.querySelector("body");
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
   //let delay = 500;
   let menuBody = document.querySelector(".menu__body");
   iconMenu.addEventListener("click", function (e) {
      if (unlock) {
         //body_lock(delay);
         iconMenu.classList.toggle("_active");
         menuBody.classList.toggle("_active");
         body.classList.toggle("_lock");
      }
   });
};
function menu_close() {
   let iconMenu = document.querySelector(".icon-menu");
   let menuBody = document.querySelector(".menu__body");
   let body = document.querySelector("body");
   iconMenu.classList.remove("_active");
   menuBody.classList.remove("_active");
   body.classList.remove("_lock");
}
//=================
//=================
//=================
//Tabs
// let tabs = document.querySelectorAll("._tabs");
// for (let index = 0; index < tabs.length; index++) {
//    let tab = tabs[index];
//    let tabs_items = tab.querySelectorAll("._tabs-item");
//    let tabs_blocks = tab.querySelectorAll("._tabs-block");
//    for (let index = 0; index < tabs_items.length; index++) {
//       let tabs_item = tabs_items[index];
//       tabs_item.addEventListener("click", function (e) {
//          for (let index = 0; index < tabs_items.length; index++) {
//             let tabs_item = tabs_items[index];
//             tabs_item.classList.remove('_active');
//             tabs_blocks[index].classList.remove('_active');
//          }
//          tabs_item.classList.add('_active');
//          tabs_blocks[index].classList.add('_active');
//          e.preventDefault();
//       });
//    }
// }
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         e.preventDefault();
      });
   }
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
   for (let index = 0; index < spollers.length; index++) {
      const spoller = spollers[index];
      spoller.addEventListener("click", function (e) {
         if (spollersGo) {
            spollersGo = false;
            if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
               return false;
            }
            if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
               return false;
            }
            if (spoller.closest('._spollers').classList.contains('_one')) {
               let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
               for (let i = 0; i < curent_spollers.length; i++) {
                  let el = curent_spollers[i];
                  if (el != spoller) {
                     el.classList.remove('_active');
                     _slideUp(el.nextElementSibling);
                  }
               }
            }
            spoller.classList.toggle('_active');
            _slideToggle(spoller.nextElementSibling);

            setTimeout(function () {
               spollersGo = true;
            }, 500);
         }
      });
   }
}
//==================
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';
   target.style.transitionDuration = duration + 'ms';
   target.style.height = target.offsetHeight + 'px';
   target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   window.setTimeout(() => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideDown = (target, duration = 500) => {
   target.style.removeProperty('display');
   let display = window.getComputedStyle(target).display;
   if (display === 'none')
      display = 'flex';

   target.style.display = display;
   let height = target.offsetHeight;
   target.style.overflow = 'hidden';
   target.style.height = 0;
   target.style.paddingTop = 0;
   target.style.paddingBottom = 0;
   target.style.marginTop = 0;
   target.style.marginBottom = 0;
   target.offsetHeight;
   target.style.transitionProperty = "height, margin, padding";
   target.style.transitionDuration = duration + 'ms';
   target.style.height = height + 'px';
   target.style.removeProperty('padding-top');
   target.style.removeProperty('padding-bottom');
   target.style.removeProperty('margin-top');
   target.style.removeProperty('margin-bottom');
   window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
   }, duration);
}
let _slideToggle = (target, duration = 500) => {
   if (!target.classList.contains('_slide')) {
      target.classList.add('_slide');
      if (window.getComputedStyle(target).display === 'none') {
         return _slideDown(target, duration);
      } else {
         return _slideUp(target, duration);
      }
   }
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
   let start = performance.now();
   requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
         requestAnimationFrame(animate);
      }

   });
}
function makeEaseOut(timing) {
   return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
   }
}
function makeEaseInOut(timing) {
   return function (timeFraction) {
      if (timeFraction < .5)
         return timing(2 * timeFraction) / 2;
      else
         return (2 - timing(2 * (1 - timeFraction))) / 2;
   }
}
function quad(timeFraction) {
   return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
   return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
   duration: 1000,
   timing: makeEaseOut(quad),
   draw(progress) {
      window.scroll(0, start_position + 400 * progress);
*/
//====================================================================================================
const popupLinks = document.querySelectorAll('.popup-link');
//const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

//let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener("click", function (e) {
         console.log('true');
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         body.classList.toggle("_lock");
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
            body.classList.remove("_lock");
         }
      });
   }
}

function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         body.classList.toggle("_lock");
      }
   }
}


// function bodyLock() {
//    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//    if (lockPadding.length > 0) {
//       for (let index = 0; index < lockPadding.length; index++) {
//          const el = lockPadding[index];
//          el.style.paddingRight = lockPaddingValue;
//       }
//    }
//    body.style.paddingRight = lockPaddingValue;
//    body.classList.add('lock');

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

// function bodyUnLock() {
//    setTimeout(function () {
//       if (lockPadding.length > 0) {
//          for (let index = 0; index < lockPadding.length; index++) {
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//          }
//       }
//       body.style.paddingRight = '0px';
//       body.classList.remove('lock');
//    }, timeout);

//    unlock = false;
//    setTimeout(function () {
//       unlock = true;
//    }, timeout);
// }

document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const popupActive = document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

//====================================================================================================