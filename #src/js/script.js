// Slider
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

// Переключение табов
const tabsContent = document.querySelectorAll('.aboutTabs-tab');
const tabsBtn = document.querySelectorAll('.aboutTabs-btn');
tabsBtn.forEach((e, i) => {
    e.addEventListener('click', () => {
        changeTab(i)
    })
})

const changeTab = (clickedTab) => {
    tabsBtn.forEach((e, i) => {
        if (i !== clickedTab) {
            e.classList.remove('active')
        } else {
            e.classList.add('active')
        }
    })
    tabsContent.forEach((e, i) => {
        if (i !== clickedTab) {
            e.classList.remove('active')
        } else {
            e.classList.add('active')
        }
    })
}

// Шапка
window.addEventListener('scroll', () => {
    if (pageYOffset == 0) {
        standartMenu()
    } else {
        whiteMenu()
    }
});
const headerIconsW = document.querySelectorAll('.headerIcoW');
const headerIconsB = document.querySelectorAll('.headerIcoB');
const standartMenu = () => {
    const headerSection = document.getElementsByClassName('header-section')[0];
    headerSection.classList.remove('header-sectionW');
    headerIconsW.forEach((e, i) => {
        e.classList.remove('d-none');
    })
    headerIconsB.forEach((e, i) => {
        e.classList.add('d-none');
    })
}
const whiteMenu = () => {
    const headerSection = document.getElementsByClassName('header-section')[0];
    headerSection.classList.add('header-sectionW');
    headerIconsW.forEach((e, i) => {
        e.classList.add('d-none');
    })
    headerIconsB.forEach((e, i) => {
        e.classList.remove('d-none');
    })
}

// Mobile Menu
const mobMenuBtn = document.getElementsByClassName('header-mobMenuBtn')[0];
const mobMenuCont = document.getElementsByClassName('header-caption')[0];
const docBody = document.getElementsByTagName('body')[0];
mobMenuBtn.addEventListener('click', () => {
    mobMenuBtn.classList.toggle('active')
    if (mobMenuBtn.classList.contains('active')) {
        mobMenuCont.classList.add('header-mobMenu');
        docBody.style.overflow = "hidden";
    } else {
        mobMenuCont.classList.remove('header-mobMenu');
        docBody.style.overflow = "auto";
    }
})