/*
Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.
1	function checkAge(age) {
2	if (age > 18) {
3	return true;
4	} else {
5	return confirm('Родители разрешили?');
6	} }
*/

const age = prompt("Сколько Вам лет?");

const checkAge = function (age) {
   (age > 18) ? alert("Добро пожаловать") : confirm("Родители разрешили?");
};

checkAge(age);

/*
Напиши функцию map(fn, array), которая принимает на вход функцию и массив, 
и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
*/
let rez;

const map = function(sum, arr) {
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum(arr[i]);
        document.write(rez);
        document.write(" ");
        };
    };
};

const sum = function (n) {
    rez = n * 2;
    return rez;
};

const fn = function (arr) {
    document.write("У нас есть исходный массив: " + arr + "<br/>")
    document.write("Выводим только четные числа массива, а затем с помощью callback умножаем на 2 " + "<br/>");
    map(sum, arr);
};

const arrNew = function () {
    const numbOne = prompt("Введите первое число");
    const numbTwo = prompt("Введите второе число");
    const numbThree = prompt("Введите третье число");
    const numbFour = prompt("Введите четвертое число");
    const numbFive = prompt("Введите пятое число");
    const numbSix = prompt("Введите шестое число");
    const arr = [];
    arr.push(numbOne, numbTwo, numbThree, numbFour, numbFive, numbSix);
    alert(arr);
    fn(arr);
};

arrNew();