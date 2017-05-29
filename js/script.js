// Установка значения по умолчанию, первая картинка
let lastImg = document.querySelector('.image-block img');

function isVisible(elem) {
    const coords = elem.getBoundingClientRect();
    const windowHeight = document.documentElement.clientHeight;
    const topVisible = coords.top > 0 && coords.top < windowHeight;
    const bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
    return topVisible || bottomVisible;
}

// Функция для установки фоновой картинки
function setBackgroindImg() {
    // Выбор всех интересующих нас картинок
    const imgs = document.querySelectorAll('.image-block img');
    // Цикл по всем картинкам
    for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        // Проверка: видна ли на экране картинка
        if (isVisible(img)) {
            lastImg = img;
        }
    }
    const background = document.querySelector('.background');
    // Установка фона
    background.setAttribute('style', `background-image: url("${lastImg.getAttribute('src')}");`);
}

//
window.onscroll = setBackgroindImg;
setBackgroindImg();

/*
var edgeOffset = 0; // px
zenscroll.setup(null, edgeOffset);

/!* переключение экранов (меню-кружочки) *!/
function scroll(e) {
    var to = e.target.getAttribute('data-scroll-to');
    if (to == null) {      // если нажали на стрелку на первом экране
        var screen = document.getElementById('screen-skills');
    } else {
        var screen = document.getElementById(to);
    }
    zenscroll.to(screen);
}

document.querySelectorAll('.circle').forEach(function (el) {
    el.addEventListener('click', scroll);
});
*/

/* стрелка на первом экране */
/*var arrow = document.querySelector('.hvr-hang');
arrow.addEventListener('click', scroll);*/