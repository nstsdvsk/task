/*Організація простого слайдеру у контейнері slider-container*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 


/*Плавна прокрутка вгору сторінки при натисненні відповідної кнопки, що знаходиться перед футером*/
function scrollTo(to, duration = 700) {
    const
        element = document.scrollingElement || document.documentElement,
        start = element.scrollTop,
        change = to - start,
        startDate = +new Date(),
        // t = current time
        // b = start value
        // c = change in value
        // d = duration
        easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        },
        animateScroll = function () {
            const currentDate = +new Date();
            const currentTime = currentDate - startDate;
            element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
            else {
                element.scrollTop = to;
            }
        };
    animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
    let btn = document.querySelector('#toTop');
    
    btn.onclick = function (click) {
        click.preventDefault();
        scrollTo(0, 400);
    }
});

/*Організація роботи бургера для девайсів з шириною екрану менше 950 пікселів*/
document.getElementById('burger').onclick = function() {
  document.getElementById('burger').classList.toggle('active');
  document.getElementById('navigation').classList.toggle('active');
}
document.getElementById('a-one').onclick = function() {
  document.getElementById('one').classList.toggle('active');
  document.getElementById('one').classList.remove('menu-container');
}
document.getElementById('a-two').onclick = function() {
  document.getElementById('two').classList.toggle('active');
  document.getElementById('two').classList.remove('menu-container');
}
document.getElementById('a-three').onclick = function() {
  document.getElementById('three').classList.toggle('active');
  document.getElementById('three').classList.remove('menu-container');
}
document.getElementById('a-four').onclick = function() {
  document.getElementById('four').classList.toggle('active');
  document.getElementById('four').classList.remove('menu-container');
}
document.getElementById('a-five').onclick = function() {
  document.getElementById('five').classList.toggle('active');
  document.getElementById('five').classList.remove('menu-container');
}