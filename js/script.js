// timer

const deadline = '2020-08-11';

function Timer(deadline) {
    rest = Date.parse(deadline) - new Date();

    if (rest <= 0) {
        clearInterval(timerOnline);
    }

    document.querySelector('.js-timer_days').innerHTML = CheckZero(Math.floor(rest / (1000 * 60 * 60 * 24)));
    document.querySelector('.js-timer_hours').innerHTML = CheckZero(Math.floor(rest / (1000 * 60 * 60) % 24));
    document.querySelector('.js-timer_mins').innerHTML = CheckZero(Math.floor(rest / (1000 * 60) % 60));
    document.querySelector('.js-timer_secs').innerHTML = CheckZero(Math.floor(rest / 1000 % 60));

    function CheckZero(num) {
        if (num >= 0 && num < 10) {
            return '0' + num;
        }
        return num;
    }
}

let timerOnline = setInterval(function () { Timer(deadline) }, 1000);

class Item {
    constructor(name, description, category, price, oldprice, availability, stars, ...images) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.oldprice = oldprice;
        this.availability = availability;
        this.stars = stars;
        this.images = images;
    }

    createElement() {
        function createStars(stars) {
            let starsCode = ''

            if (stars) {
                let i = 0;

                for (i = 0; i < 5; i++) {
                    if (i < stars) {
                        starsCode += '<span class="deals__star"><i class="fas fa-star"></i></span>'
                    } else {
                        starsCode += '<i class="fa fa-star-o" aria-hidden="true"></i>'
                    }
                }
                return starsCode;
            } else {
                return '<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(5);
            }
        }

        function addPrice(price, oldprice) {
            if (oldprice) {
                return `<div class="deals__price-last">${oldprice}</div><div class="deals__price-new">${price}</div>`
            } else {
                return `<div class="deals__price-new">${price}</div>`
            }
        }




        return `<div class="showcase__item">
        <div class="item__img-block">
        <img class='item__img' src="${this.images[0]}" alt="${this.name}">
        </div>
        <div class="deals__description showcase__description--mod">
            <span class="deals__name">${this.name}</span>
            <div class="deals__stars">
                ${createStars(this.stars)}
            </div>

            <div class="deals__line">
                <div class="deals__separator"></div>
            </div>
            <div class="deals__footer">
                <div class="deals__function-wrapper showcase__function-wrapper--mod">
                    <div class="deals__function">
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="deals__function">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                </div>
                <div class="deals__price-block">
                    ${addPrice(this.price, this.oldprice)}
                </div>
            </div>
        </div>
    </div>`
    }
}


let showcase__db = [
    new Item('NOLMYRA', '', 'chair', 29.99, false, true, 2, 'images/nolmyra__main.jpg', 'images/nolmyra__1.jpg', 'images/nolmyra__2.jpg', 'images/nolmyra__3.jpg', 'images/nolmyra__4.jpg'),
    new Item('VALLENTUNA', '', 'chair', 339, false, true, 4, 'images/VALLENTUNA__main.jpg', 'images/VALLENTUNA__1.jpg', 'images/VALLENTUNA__2.jpg', 'images/VALLENTUNA__3.jpg', 'images/VALLENTUNA__4.jpg', 'images/VALLENTUNA__5.jpg', 'images/VALLENTUNA__6.jpg'),
    new Item('OMTÄNKSAM', '', 'chair', 279, false, true, 3, 'images/OMTÄNKSAM__main.jpg', 'images/OMTÄNKSAM__1.jpg', 'images/OMTÄNKSAM__2.jpg', 'images/OMTÄNKSAM__3.jpg', 'images/OMTÄNKSAM__4.jpg', 'images/OMTÄNKSAM__5.jpg', 'images/OMTÄNKSAM__6.jpg'),
    new Item('SÖDERHAMN', '', 'chair', 270, false, true, 2, 'images/SÖDERHAMN__main.jpg', 'images/SÖDERHAMN__1.jpg', 'images/SÖDERHAMN__2.jpg', 'images/SÖDERHAMN__3.jpg'),
    new Item('BINGSTA', '', 'chair', 185, false, true, 1, 'images/BINGSTA__main.jpg', 'images/BINGSTA__1.jpg', 'images/BINGSTA__2.jpg', 'images/BINGSTA__3.jpg', 'images/BINGSTA__4.jpg', 'images/BINGSTA__5.jpg'),
    new Item('EKENÄSET', '', 'chair', 155, false, true, 4, 'images/EKENÄSET__main.jpg', 'images/EKENÄSET__1.jpg', 'images/EKENÄSET__2.jpg', 'images/EKENÄSET__3.jpg', 'images/EKENÄSET__4.jpg', 'images/EKENÄSET__5.jpg'),
    new Item('STRANDMON', '', 'chair', 189, false, true, 5, 'images/STRANDMON__main.jpg', 'images/STRANDMON__1.jpg', 'images/STRANDMON__2.jpg', 'images/STRANDMON__3.jpg', 'images/STRANDMON__4.jpg', 'images/STRANDMON__5.jpg'),
    new Item('POÄNG', '', 'chair', 59, false, true, 3, 'images/POÄNG__main.jpg', 'images/POÄNG__1.jpg', 'images/POÄNG__2.jpg', 'images/POÄNG__3.jpg', 'images/POÄNG__4.jpg'),
    new Item('STRANDMON', '', 'chair', 169, 189, true, 2, 'images/STRANDMON_red__main.jpg', 'images/STRANDMON_red__1.jpg', 'images/STRANDMON_red__2.jpg', 'images/STRANDMON_red__3.jpg', 'images/STRANDMON_red__4.jpg', 'images/STRANDMON_red__5.jpg'),
    new Item('GISTAD', '', 'chair', 219, false, true, 1, 'images/GISTAD__main.jpg', 'images/GISTAD__1.jpg', 'images/GISTAD__2.jpg', 'images/GISTAD__3.jpg', 'images/GISTAD__4.jpg', 'images/GISTAD__5.jpg'),
    new Item('EKERÖ', '', 'chair', 145, false, true, 2, 'images/EKERÖ__main.jpg', 'images/EKERÖ__1.jpg', 'images/EKERÖ__2.jpg', 'images/EKERÖ__3.jpg'),
    new Item('NEIDEN', '', 'bed', 59, false, true, 4, 'images/NEIDEN__main.jpg', 'images/NEIDEN__1.jpg', 'images/NEIDEN__2.jpg', 'images/NEIDEN__3.jpg', 'images/NEIDEN__4.jpg', 'images/NEIDEN__5.jpg'),
    new Item('SAGSTUA', '', 'bed', 149, false, true, 5, 'images/SAGSTUA__main.jpg', 'images/SAGSTUA__1.jpg', 'images/SAGSTUA__2.jpg', 'images/SAGSTUA__3.jpg', 'images/SAGSTUA__4.jpg', 'images/SAGSTUA__5.jpg'),
    new Item('PLATSA', '', 'bed', 239, false, true, 3, 'images/PLATSA__main.jpg', 'images/PLATSA__1.jpg', 'images/PLATSA__2.jpg'),
    new Item('DELAKTIG', '', 'bed', 369, false, true, 4, 'images/DELAKTIG__main.jpg', 'images/DELAKTIG__1.jpg', 'images/DELAKTIG__2.jpg', 'images/DELAKTIG__3.jpg'),
    new Item('HAUGA', '', 'bed', 189, false, true, 5, 'images/HAUGA__main.jpg', 'images/HAUGA__1.jpg', 'images/HAUGA__2.jpg', 'images/HAUGA__3.jpg', 'images/HAUGA__4.jpg'),
    new Item('SLATTUM', '', 'bed', 119, false, true, 4, 'images/SLATTUM__main.jpg', 'images/SLATTUM__1.jpg', 'images/SLATTUM__2.jpg', 'images/SLATTUM__3.jpg', 'images/SLATTUM__4.jpg', 'images/SLATTUM__5.jpg', 'images/SLATTUM__6.jpg'),
    new Item('DELAKTIG', '', 'bed', 586, false, true, 5, 'images/DELAKTIG1__main.jpg', 'images/DELAKTIG1__1.jpg', 'images/DELAKTIG1__2.jpg'),
    new Item('NORDLI', '', 'bed', 329, false, true, 3, 'images/NORDLI__main.jpg', 'images/NORDLI__1.jpg', 'images/NORDLI__2.jpg', 'images/NORDLI__3.jpg', 'images/NORDLI__4.jpg', 'images/NORDLI__5.jpg'),
    new Item('MALM', '', 'bed', 349, false, true, 2, 'images/MALM__main.jpg', 'images/MALM__1.jpg', 'images/MALM__2.jpg', 'images/MALM__3.jpg', 'images/MALM__4.jpg', 'images/MALM__5.jpg'),
    new Item('ASKVOLL', '', 'bed', 115, false, true, 3, 'images/ASKVOLL__main.jpg', 'images/ASKVOLL__1.jpg', 'images/ASKVOLL__2.jpg', 'images/ASKVOLL__3.jpg', 'images/ASKVOLL__4.jpg', 'images/ASKVOLL__5.jpg'),
    new Item('TRYSIL', '', 'bed', 119, false, true, 4, 'images/TRYSIL__main.jpg', 'images/TRYSIL__1.jpg', 'images/TRYSIL__2.jpg', 'images/TRYSIL__3.jpg', 'images/TRYSIL__4.jpg', 'images/TRYSIL__5.jpg'),
    new Item('BRIMNES', '', 'bed', 175, false, true, 5, 'images/BRIMNES__main.jpg', 'images/BRIMNES__1.jpg', 'images/BRIMNES__2.jpg', 'images/BRIMNES__3.jpg', 'images/BRIMNES__4.jpg', 'images/BRIMNES__5.jpg'),
    new Item('SONGESAND', '', 'bed', 139, false, true, 3, 'images/SONGESAND__main.jpg', 'images/SONGESAND__1.jpg', 'images/SONGESAND__2.jpg', 'images/SONGESAND__3.jpg', 'images/SONGESAND__4.jpg', 'images/SONGESAND__5.jpg'),
    new Item('TYSSEDAL', '', 'bed', 369, false, true, 2, 'images/TYSSEDAL__main.jpg', 'images/TYSSEDAL__1.jpg', 'images/TYSSEDAL__2.jpg', 'images/TYSSEDAL__3.jpg', 'images/TYSSEDAL__4.jpg', 'images/TYSSEDAL__5.jpg'),
    new Item('HAMMARN', '', 'sofa', 89, false, true, 3, 'images/HAMMARN__main.jpg', 'images/HAMMARN__1.jpg', 'images/HAMMARN__2.jpg', 'images/HAMMARN__3.jpg', 'images/HAMMARN__4.jpg', 'images/HAMMARN__5.jpg'),
    new Item('ASKEBY', '', 'sofa', 149, false, true, 1, 'images/ASKEBY__main.jpg', 'images/ASKEBY__1.jpg', 'images/ASKEBY__2.jpg'),
    new Item('ASKEBY', '', 'sofa', 149, false, true, 4, 'images/ASKEBY1__main.jpg', 'images/ASKEBY1__1.jpg'),
    new Item('LYCKSELE', '', 'sofa', 179, false, true, 3, 'images/LYCKSELE__main.jpg', 'images/LYCKSELE__1.jpg', 'images/LYCKSELE__2.jpg', 'images/LYCKSELE__3.jpg', 'images/LYCKSELE__4.jpg', 'images/LYCKSELE__5.jpg'),
    new Item('ASARUM', '', 'sofa', 199, 250, true, 3, 'images/ASARUM__main.jpg', 'images/ASARUM__1.jpg', 'images/ASARUM__2.jpg', 'images/ASARUM__3.jpg', 'images/ASARUM__4.jpg'),
    new Item('NYHAMN', '', 'sofa', 209, false, true, 5, 'images/NYHAMN__main.jpg', 'images/NYHAMN__1.jpg', 'images/NYHAMN__2.jpg', 'images/NYHAMN__3.jpg', 'images/NYHAMN__4.jpg'),
    new Item('ANGSTA', '', 'sofa', 219, false, true, 5, 'images/ANGSTA__main.jpg', 'images/ANGSTA__1.jpg'),
    new Item('ARVIKEN', '', 'sofa', 249, false, true, 4, 'images/ARVIKEN__main.jpg', 'images/ARVIKEN__1.jpg'),
    new Item('GRIMHULT', '', 'sofa', 329, false, true, 1, 'images/GRIMHULT__main.jpg', 'images/GRIMHULT__1.jpg', 'images/GRIMHULT__2.jpg', 'images/GRIMHULT__3.jpg', 'images/GRIMHULT__4.jpg', 'images/GRIMHULT__5.jpg'),
    new Item('BASTUBO', '', 'sofa', 339, false, true, 5, 'images/BASTUBO__main.jpg', 'images/BASTUBO__1.jpg', 'images/BASTUBO__2.jpg', 'images/BASTUBO__3.jpg', 'images/BASTUBO__4.jpg', 'images/BASTUBO__5.jpg'),
];


// showcase

function hideTabs() {
    items.forEach(i => {
        if (i.classList.contains('active')) {
            i.classList.remove('active');
        }
    })
}

fetch('../js/db.json').then(response => {
    response;

});

function createTab(i) {
    let grid = document.querySelector('.showcase__grid');
    grid.innerHTML = '';
    showcase__db.forEach(elem => {
        if (categories[i] == elem.category) {
            grid.innerHTML += elem.createElement();
        }
    })
}

const categories = {
    0: 'bed',
    1: 'chair',
    2: 'sofa',
    3: 'table',
    4: 'dining'
}

const showcase = document.querySelector('.showcase__ul'),
    items = document.querySelectorAll('.showcase__span');


createTab(0)
document.querySelector('.showcase__grid').innerHTML += '<div class="showcase__item--empty"></div><div class="showcase__item--empty"></div><div class="showcase__item--empty"></div>';


showcase.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('showcase__span')) {
        items.forEach((elem, i) => {
            if (elem == target) {
                hideTabs();
                elem.classList.add('active');
                createTab(i)
                document.querySelector('.showcase__grid').innerHTML += '<div class="showcase__item--empty"></div><div class="showcase__item--empty"></div><div class="showcase__item--empty"></div>';
            }
        });
    }
})


// form

const login = document.querySelector('.js--login'),
    exit = document.querySelector('.login-form__exit'),
    formWrapper = document.querySelector('.header__form-wrapper'),
    reg = document.querySelector('.js--reg');

function showForm(event) {
    const target = event.target;
    document.body.style.overflow = 'hidden';
    formWrapper.classList.add('header__form-wrapper--show');
    console.log(event.target);

    if (target === login) {
        document.querySelector('.header__login-form').classList.add('header__login-form--show');
    } else if (target.classList.contains('js--reg')) { // коррект нужен
        document.querySelector('.header__reg-form').classList.add('header__reg-form--show');
    }
}

function hideForm() {
    document.body.style.overflow = '';
    formWrapper.classList.remove('header__form-wrapper--show');
    document.querySelector('.header__login-form').classList.remove('header__login-form--show');
    document.querySelector('.header__reg-form').classList.remove('header__reg-form--show');
}


login.addEventListener('click', event => showForm(event));
reg.addEventListener('click', event => showForm(event));
exit.addEventListener('click', hideForm);

formWrapper.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
    if (target.classList.contains('header__form-wrapper')) {
        hideForm();
    }
})

document.addEventListener('keydown', (event) => {
    target = event.target;
    if (formWrapper.classList.contains('header__form-wrapper--show') && event.keyCode == 27) {
        hideForm();
    }
})


fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));