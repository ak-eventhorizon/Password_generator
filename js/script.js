'use strict';

//из буквенных массивов удалены буква i, o, l - похожие на цифры
let arrSmallLetters = 
['a','b','c','d','e','f','g','h','j','k','m','n','p','q','r','s','t','u','v','w','x','y','z'];
let arrBigLetters = 
['A','B','C','D','E','F','G','H','J','K','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'];
let arrDigits = ['0','1','2','3','4','5','6','7','8','9'];
let arrSymbols = ['!','@','#','$','%','&'];

//общий массив
let arrAll = arrSymbols.concat(arrDigits, arrSmallLetters, arrBigLetters);

//блок ввода с желаемой длиной пароля
let inputLength = document.getElementById('passLength');
//кнопка запуска генерации пароля
let btn = document.getElementById('generateBtn');
//блок для вывода паролей
let output = document.getElementById('output');

//генерирует пароли длины pswLength
function passwordGenerate(pswLength){

    let arrPassword = [];
    let currentPswLength = pswLength;

    arrPassword.push(randomElement(arrSmallLetters)); //добавление одной маленькой буквы
    arrPassword.push(randomElement(arrBigLetters)); //добавление одной большой буквы
    arrPassword.push(randomElement(arrDigits)); //добавление одной цифры
    arrPassword.push(randomElement(arrSymbols)); //добавление одного спецсимвола
    currentPswLength = currentPswLength - 4;

    while (currentPswLength > 0){
        arrPassword.push(randomElement(arrAll)); //добавление одного элемента из общего массива
        currentPswLength--;
    }

    shuffle(arrPassword); //перемешивание массива-пароля
    output.value = arrPassword.join(''); //вывод масива-пароля
    output.select();
}

//возвращает случайный элемент массива
function randomElement(array){
    let length = array.length;
    let randomIndex = Math.floor(Math.random() * length);
    let randomElem = array[randomIndex];

    return randomElem;
}

//перемешивание массива
function shuffle(array) {
    let currentIndex = array.length; 
    let temporaryValue, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
}



btn.addEventListener('click', () =>  {
    passwordGenerate(+inputLength.value);    
});