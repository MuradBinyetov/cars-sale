let cars = [
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: '2015',
        yuruw: '27000 km',
        tarix: '27.07.2019'

    },
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: '2015',
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },
    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },

    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    },

    {
        model: 'Land Rover Discovery',
        nagd: 60000,
        kredit: 20000,
        il: 2015,
        yuruw: '27000 km',
        tarix: '27.07.2019'
    }
]

let container = create('div', ['container'], 'body');
let row = create('div', ['row'], container);

function create(element, klas, location) {


    element = document.createElement(element);
    for (let i of klas) {
        element.classList.add(i);
    }

    if (location == 'body') {
        document.body.appendChild(element);
    }
    else {
        location.appendChild(element);
    }
    return element;
}

for (let f in cars) {
    let card = create('div', ['card', 'col-3'], row);

    let img = create('img', ['card-img-top'], card);
    img.src = 'image/Без названия.jpg';

    let cardBody = create('div', ['card-body'], card);

    let h5 = create('h5', ['card-title'], cardBody);
    h5.innerText = cars[f].model;

    let price = create('span', ['price', 'badge', 'badge-secondary', 'bg-primary', 'text-white'], cardBody);
    price.innerText = cars[f].nagd;

    let credit = create('span', ['credit', 'badge', 'badge-secondary', 'bg-danger', 'text-white'], cardBody);
    credit.innerText = cars[f].kredit;

    let div = create('div', '', cardBody);

    let il = create('span', ['d-block'], div);
    il.innerText = cars[f].il;

    let yuruw = create('span', '', div);
    yuruw.innerText = cars[f].yuruw;

    let tarix = create('span', '', div);
    tarix.innerText = cars[f].tarix;


    card.addEventListener('click', function () {
        localStorage.clear();
        let z = JSON.stringify(cars[f]);
        localStorage.setItem('cars', z);
        document.location = 'text.html';
    });

}


console.log(cars.length);
let nav = create('nav', ['d-flex', 'justify-content-center', 'pt-5'], container);
let ul = create('ul', ['pagination'], nav);
let li2 = create('li', ['page-item'], ul);
let a2 = create('a', ['page-link'], li2);
a2.innerText = '1';

if (cars.length > 8 && cars.length<17) {
    let li1 = create('li', ['page-item'], ul);
    ul.insertBefore(li1,li2 );
    let a1 = create('a', ['page-link'], li1);
    a1.innerText = '<--';

    let li3 = create('li', ['page-item'], ul);
    let a3 = create('a', ['page-link'], li3);
    a3.innerText = '2';

}


// let countOfCars = Object.keys(cars).length;

// console.log("Elements: " + countOfCars);
// console.log("Pagination: " + (countOfCars > 8));

// function findPagCount() {
//     var pag = countOfCars % 8;
//     var roundedval = Math.ceil(pag/8);
//     console.log(roundedval);


//     if(countOfCars < 8){
//         console.log("pag is 1")
//     }else{

//     }


// }

// findPagCount()

