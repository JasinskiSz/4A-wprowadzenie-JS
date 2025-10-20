console.log("Załadowałem skrypt JS")

// Zmienne
// let, const, var

const imie = "Jacek" // string
let wiek = 67 // number
let waga = 149.8 // number
let zajadaFastFood = true // boolean
console.log(wiek)

// imie = "Małgosia"
wiek = "sześćdziesiątosiem"

console.log(imie)
console.log(wiek)
console.log(waga)
console.log(zajadaFastFood)

// tworzenie funkcji

function halucynuj() {
    console.log("teraz byda halucynować")
}

// stwórz 4 zmienne, przypisz im wartości
// dowolnego typu i wyświetl je wszystkie
// w konsoli

// operatory
// arytmetyczne
// + dodawnie (suma)
// - odejmowanie (różnica)
// / dzielenie
// * mnożenie
// % reszta z dzielenia (modulo) 

const a = 25
const b = 30

const wynik = a * b

console.log(wynik)

// porównania
// ==
// ===
console.log("123" == 123) // true
console.log("123" === 123) // false

// != - różne od
// !== - różne od (z typem)

// < - mniejsze niż
// > - większe niż

// <= - mniejsze lub równe
// >= - większe lub równe

// logiczne
// && - AND
// || - OR
// ! - NOT

// przypisania
// =
// +=
// -=

let liczba = 2137
let x = 3

let wynik2 = liczba + x

console.log(wynik2)

// liczba = liczba + x
liczba += x;

console.log(liczba)

let wiekMarcina = 34

if (wiekMarcina === 33) {
    console.log("Marcin ma 33 lata jak Jezus")
} else if (wiekMarcina > 30) {
    console.log("Marcin ma więcej 30 lat")
} else {
    console.log("Marcin nie ma 30 ani 28 lat")
}

// github.com/JasinskiSz/4A-wprowadzenie-JS

// funkcje
function dodaj5(a) {
    return a + 5
}

function dodajDwieLiczby(a, b) {
    return a + b
}

const wynikDodawania5 = dodaj5(10)
console.log(wynikDodawania5)

const wynikDodawania = dodajDwieLiczby(12, 38)
console.log(wynikDodawania)

const wpisanePrzezUsera = prompt("Podaj liczbę")

console.log("Wpisałeś do konsoli")

console.log(wpisanePrzezUsera)
