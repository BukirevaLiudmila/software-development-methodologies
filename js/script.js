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

window.onscroll = setBackgroindImg;
setBackgroindImg();