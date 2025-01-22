// ------------Tapşırıq 1-----------

// Verilmiş dəyişənləri müvafiq tiplərə çevirin və nəticəni yoxlayın
let numString = "42";
let boolString = "true";
let mixedArray = ["123", "456", "789"];
let nullValue = null;

// Tələb olunan çevirmələr:
// 1. numString -> number
console.log(Number(numString)); // 43
// 2. boolString -> boolean
console.log(Boolean(boolString)); // true
// 3. mixedArray elementlərini number tipinə çevirin
console.log(mixedArray.map((item) => Number(item))); // və ya aşağıdakı kimi
let newArray = [];
mixedArray.forEach((item) => newArray.push(Number(item)));
console.log(newArray);
// 4. nullValue-nu boolean-a çevirin və nəticəni izah edin
console.log(Boolean(nullValue)); // Nəticə false verdi. Çünki null boş deməkdir. 0-a bərabər etmək olur. Ona görə false-dir

// --------------Tapşırıq 2.1-----------------

let text = "   JavaScript is awesome   ";

// Tələb olunan əməliyyatlar:
// 1. Mətndəki boşluqları silin
console.log(text.trim());
// 2. Mətni böyük hərflərə çevirin
console.log(text.toUpperCase());
// 3. "is" sözünü "was" ilə əvəz edin
console.log(text.replace("is", "was"));
// 4. Mətni sözlərə ayırın və array kimi saxlayın
console.log(text.trim().split(" "));
// 5. Mətnin uzunluğunu tapın
console.log(text.length); // 27

// --------------Tapşırıq 2.2-----------------

// Verilmiş məlumatlardan istifadə edərək şablon yaradın
let user = {
  firstName: "Ali",
  lastName: "Məmmədov",
  age: 25,
  email: "ali@example.com",
};

// Template literal-dan istifadə edərək:
// 1. "Hörmətli {tam_ad}, sizin {yaş} yaşınız var." formatında mətn yaradın
console.log(
  `Hörmətlə ${user.firstName} ${user.lastName}, sizin ${user.age} yaşınız var.`
);
// 2. İstifadəçi haqqında məlumatları cədvəl formasında göstərin
let newDiv = document.querySelector(".tableDiv");
newDiv.innerHTML = `
 <table>
            <tr>
                <th>Ad</th>
                <th>Soyad</th>
                <th>Yaş</th>
                <th>Email</th>
            </tr>
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
            </tr>
        </table>
`;
// 3. Email ünvanını @ simvoluna görə ayırın
console.log(user.email.split("@"));

// ----------- Tapşırıq 3 ----------------

// Tapşırıq 3.1: Array Əməliyyatları
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["alma", "banan", "gilas", "üzüm", "armud"];

// Tələb olunan əməliyyatlar:
// 1. Cüt ədədləri filter() ilə tapın
console.log(numbers.filter((item) => item % 2 == 0));
// 2. Hər ədədin kubunu map() ilə hesablayın
numbers.map((item) => console.log(item ** 3));
// 3. Ədədlərin cəmini reduce() ilə tapın
console.log(numbers.reduce((acc, current) => acc + current));
// 4. Meyvələri əlifba sırası ilə düzün
console.log(fruits.sort());
// 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)
numbers.push(11, 12, 13, 14, 15); // sona əlavə edir
console.log(numbers);
numbers.pop(); // son elementi silir
console.log(numbers);
fruits.shift(); // ilk elementi silər
console.log(fruits);
fruits.unshift("ananas"); // əvvələ əlavə edir
console.log(fruits);

//  Tapşırıq 3.2: Array-lərlə Mürəkkəb Əməliyyatlar

let students = [
  { id: 1, name: "Aygün", grades: [85, 90, 92] },
  { id: 2, name: "Elçin", grades: [75, 85, 88] },
  { id: 3, name: "Nigar", grades: [95, 88, 91] },
  { id: 4, name: "Orxan", grades: [70, 65, 72] },
];

// Tələb olunan əməliyyatlar:
// 1. Hər tələbənin orta qiymətini hesablayın
students.map((item) => {
  console.log(
    `${item.name} ortalamsı ${item.grades.reduce(
      (acc, cur) => (acc + cur) / item.grades.length
    )}`
  );
});
// 2. 85-dən yuxarı orta qiyməti olan tələbələri tapın
console.log(
  students.filter(
    (item) =>
      item.grades.reduce((acc, cur) => (acc + cur) / item.grades.length) > 85
  )
);
// 3. Tələbələri orta qiymətə görə çoxdan aza düzün
let compare = students.sort(
  (y, x) =>
    x.grades.reduce((acc, cur) => (acc + cur) / x.grades.length) -
    y.grades.reduce((acc, cur) => (acc + cur) / y.grades.length)
);
console.log(compare.map((item) => item.name));
// 4. Bütün tələbələrin ümumi orta qiymətini tapın
let totalAverage = 0;
students.map((item) => {
  let total = item.grades.reduce(
    (acc, cur) => (acc + cur) / item.grades.length
  );
  totalAverage += total;
});
console.log(`Tələbələrin ümumi ortalamsı ${totalAverage}-dır`);

// ----------- Tapşırıq 4 ----------------

// ### Tapşırıq 4.1: Funksiya Növləri
// Aşağıdakı funksiyaları yazın:
// 1. Adi funksiya - faktorial hesablayan
let num = 6;
function calculateFactorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
calculateFactorial(num);

// 2. Arrow function - ədədin kvadratını qaytaran
const square = (number) => {
  return number ** 2;
};
console.log(square(9));
// 3. Higher-order function - array-i filter edən funksiya qəbul edən və tətbiq edən
function filterArray(arr, filterFn) {}

// ----------- Tapşırıq 5 ----------------

// Bank hesabı obyekti yaradın
// Properties:
// - hesab nömrəsi
// - sahibinin adı
// - balans
// - əməliyyatlar array-i

// Metodlar:
// - pul əlavə etmə
// - pul çıxarma
// - balans yoxlama
// - əməliyyat tarixçəsi
let bankAccount = {
  accountNumber: 0,
  name: "nail",
  balanse: 0,
  //   transaction: [
  //     bankAccount.accountNumber,
  //     bankAccount.name,
  //     bankAccount.balanse,
  //   ],
};
bankAccount.accountNumber = 21;
bankAccount.accountNumber = 29;
console.log(`
    hesab ${bankAccount.accountNumber} 
    ad ${bankAccount.name} 
    balans ${bankAccount.balanse} 
    əməliyyatlar ${bankAccount.transaction}
    `);

// ----------- Tapşırıq 5 ----------------

// Tapşırıq 5.1: Şərtli Operatorlar
// 1. Rəqəmin tək və ya cüt olduğunu yoxlayan funksiya
function oddOrEven(num) {
  num % 2 == 0
    ? console.log(`${num} cüt ədəddir`)
    : console.log(`${num} cüt ədəddir`);
}
oddOrEven(num);
// 2. Üç ədəddən ən böyüyünü tapan funksiya
function greaterNum(a, b, c) {
  arr5 = [a, b, c];
  let resultGreater = arr5.sort((x, y) => y - x);
  console.log(` Ən böyük ədəd ${resultGreater[0]}-dır`);
}
greaterNum(1, 2, 3);
// 3. İlin fəslini təyin edən funksiya (ay nömrəsinə görə)
function season(month) {
  if (month === 12 || month === 1 || month === 2) {
    console.log("Qış fəslidir");
  } else if (month === 3 || month === 4 || month === 5) {
    console.log("Yaz fəslidir");
  } else if (month === 6 || month === 7 || month === 8) {
    console.log("Yay fəslidir");
  } else if (month === 9 || month === 10 || month === 11) {
    console.log("Payız fəslidir");
  } else {
    console.log("Düzgün ay daxil edin");
  }
}
season(10);
// 4. Sadə kalkulyator (switch-case ilə)

function calculate(a, b, c) {
  switch (c) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;

    default:
      console.log("Bu operator dəstəklənmir");
      break;
  }
}
calculate(2, 5, "*");

// Tapşırıq 5.2: Dövrlər
// 1. Fibonaççi ardıcıllığını çap edən proqram (for)
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
let endNumber = 20;
let fiboArray = [0, 1];
let fiboNumber = 0;
function fibonacci(endNumber) {
  for (let i = 0; i <= endNumber; i++) {
    fiboNumber =
      fiboArray[fiboArray.length - 1] + fiboArray[fiboArray.length - 2];
    fiboArray.push(fiboNumber);
  }
}
fibonacci(endNumber);
console.log(fiboArray);
// 2. Array elementlərini tərsinə çap edən proqram (while)
let arrWhile = [1, 2, 3, 4, 5, 6, 7];
let newArrWhile = [];
let i = arrWhile.length - 1;
while (i >= 0) {
  newArrWhile.push(arrWhile[i]);
  i--;
}
console.log(newArrWhile);

// 3. Sadə ədədləri tapan proqram
function simpleNumber(n) {
  let result = true;
  for (let i = 2; i <= n - 1; i++) {
    if (n % i != 0) {
      result = false;
    }
    break;
  }
  result ? console.log("Mürəkkəbdir") : console.log("Sadədir");
}
simpleNumber(101);
// 4. Pattern çap edən proqram (ulduzlarla üçbucaq)


// ----------- Tapşırıq 6 ----------------
// HTML:


// Tələb olunan əməliyyatlar:
// 1. getElementById ilə elementi tapın və mətnini dəyişin
let container=document.getElementById("container");
container.children[0].innerHTML="Salam Nail";
container.children[1].innerHTML="Bu bir ul-in listləridir";
container.children[2].children[0].innerHTML="Element_1_";
container.children[2].children[1].innerHTML="Element_2_";
container.children[2].children[2].innerHTML="Element_3_";

// 2. querySelector ilə elementi tapın və class əlavə edin
let title=document.querySelector(".title");
title.classList.add("titleOne");
console.log(title)

// 3. Yeni element yaradın və DOM-a əlavə edin
let list=document.querySelector("#list");
let newElementt=document.createElement("li");
newElementt.innerHTML="Element_4_";
list.append(newElementt);
// 4. Elementi silin
list.children[0].remove();
// 5. Element attributlarını dəyişin
let textP=document.querySelector(".text");
textP.setAttribute("class","changeText");
console.log(textP);


// ----------- Tapşırıq 7 ----------------

// 1. Click event handler
document.getElementById('button').addEventListener('click', function() {
    let divElement=document.querySelector(".tableDiv");
divElement.innerHTML="Salam Aleykum"
});

// 2. Form submission
let textInput=document.getElementById("textInput");
let paragraph=document.querySelector(".paragraph")
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let name=textInput.value;
  paragraph.innerHTML=name;

});

// 3. Klaviatura eventləri
document.addEventListener('keydown', function(e) {
  e.preventDefault();
  paragraph.innerHTML+=e.key
});

// 4. Mouse eventləri
textInput.addEventListener('mouseover', function(e) {
textInput.style.backgroundColor="red"
});





