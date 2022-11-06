
let fonBlock = document.querySelectorAll('.fon--block')
let fonContainer = document.querySelectorAll('.fon--container')
let fonZag = document.querySelector('.h1')
let fonText = document.querySelectorAll('.text--fon')
let fonLink = document.querySelectorAll('.text--link')
let fonbtn = document.querySelector('.valid--btn--style')
let fonbtn2 = document.querySelector('.valid--btn--style2')
let fonInput = document.querySelectorAll('.valid--input')


//создаем функцию фона 
function colorFon() {
    fonBlock.forEach(function (fonBlocks) {
        fonBlocks.classList.add('block--color')
    })

    fonContainer.forEach(function (fonContainers) {
        fonContainers.classList.add('container--fon')
    })

    fonText.forEach(function (fonTexts) {
        fonTexts.classList.add('dark--color--text')
    })

    fonLink.forEach(function (fonLinks) {
        fonLinks.classList.add('dark--color--link')
    })

    fonInput.forEach(function (fonInputs) {
        fonInputs.classList.add('dark--color--input')
    })

    fonZag.classList.add('dark--color--zag')
    fonbtn.classList.add('dark--color--btn')
    fonbtn2.classList.add('dark--color--btn2')
}

//убираем черный фон
function colorFonBack() {
    fonBlock.forEach(function (fonBlocks) {
        fonBlocks.classList.remove('block--color')
    })

    fonContainer.forEach(function (fonContainers) {
        fonContainers.classList.remove('container--fon')
    })

    fonText.forEach(function (fonTexts) {
        fonTexts.classList.remove('dark--color--text')
    })

    fonLink.forEach(function (fonLinks) {
        fonLinks.classList.remove('dark--color--link')
    })

    fonInput.forEach(function (fonInputs) {
        fonInputs.classList.remove('dark--color--input')
    })

    fonZag.classList.remove('dark--color--zag')
    fonbtn.classList.remove('dark--color--btn')
    fonbtn2.classList.remove('dark--color--btn2')
}



//зарузка памяти сохранённых параметров
function load() {
    let checked = JSON.parse(localStorage.getItem('fon'));
    if (checked == true) {
        colorFon()
        document.getElementById('radio-2').checked = checked;
    }
}

//сохраняем настроки 
function save() {
    let checkbox = document.getElementById('radio-2');
    localStorage.setItem('fon', checkbox.checked);
}

//сохраняем селект

function SaveSelectValue(el) {
    return localStorage.setItem(el.name, el.value);
}

function LoadSelectValue(el) {
    return localStorage.getItem(el.name);
}

let selectCheck = document.querySelector("[name='selectcheck']");
selectCheck.value = LoadSelectValue(selectCheck);

let selectCheck2 = document.querySelector("[name='selectcheck2']");
selectCheck2.value = LoadSelectValue(selectCheck2);

let selectCheck3 = document.querySelector("[name='selectcheck3']");
selectCheck3.value = LoadSelectValue(selectCheck3);

function SetData(elem) {
    localStorage.setItem(elem.getAttribute('name'), elem.getAttribute('id'));

}



//что происходит при выборе нужного фона и 
function myfon() {

    if (document.getElementById('radio-2').checked == true) {
        colorFon()

    } else {
        colorFonBack()
    }

}


//генерируем код 

let password = document.getElementById("password");
let password2 = document.getElementById("password2");
let password3 = document.getElementById("password3");

let chars = "0123456789";
let passwordLength = 3;
password = "";
password2 = "";
password3 = "";

function code() {

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password2 += chars.substring(randomNumber, randomNumber + 1);
    }

    for (let i = 0; i <= passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password3 += chars.substring(randomNumber, randomNumber + 1);
    }


}
code()

document.getElementById("password").value = password;
document.getElementById("password2").value = password2;
document.getElementById("password3").value = password3;



//что происходит при нажатии на кнопку сохранить
let btnSimbit = document.querySelector('.valid--btn')

btnSimbit.addEventListener('click', () => {
    myfon()
    save()
})


const element = document.querySelector('.js-choice');

let choices = new Choices(element, {

    searchEnabled: null,
    position: 'auto',
    editItems: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,

    addItemText: (value) => {
        return `Press Enter to add <b>"${value}"</b>`;
    },

    maxItemText: (maxItemCount) => {
        return `Only ${maxItemCount} values can be added`;
    },


});


const element2 = document.querySelector('.js-choice2');

let choices2 = new Choices(element2, {
    searchEnabled: null,
    position: 'auto',
    editItems: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,

    addItemText: (value) => {
        return `Press Enter to add <b>"${value}"</b>`;
    },

    maxItemText: (maxItemCount) => {
        return `Only ${maxItemCount} values can be added`;
    },

    color() {

    }


});

const element3 = document.querySelector('.js-choice3');

let choices3 = new Choices(element3, {
    searchEnabled: null,
    position: 'auto',
    editItems: true,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,

    addItemText: (value) => {
        return `Press Enter to add <b>"${value}"</b>`;
    },

    maxItemText: (maxItemCount) => {
        return `Only ${maxItemCount} values can be added`;
    },


});



/* let fonInput23 = document.querySelectorAll('.choices__inner')
let checks = document.getElementById('radio-2')

fonInput23.forEach(function (fonInput232) {

   if (checks.checked == true ) {
    fonInput232.classList.add('dark--color--input') 
    console.log('12')
    }

    if (checks.checked == false) {
        fonInput232.classList.remove('dark--color--input') 
        console.log('13')
    }
}); */


load()



