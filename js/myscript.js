/* definiamo le variabili */

const containerSquare = document.getElementById("containerQuadrati");

/* const square = document.createElement("div");
square.classList.add("quadrati"); */

/* andiamo a creare il ciclo per inserire i quadrati */

for (let i = 1; i <= 100; i++){

    /* const square = `<div class="quadrati quadrati--${i}">${i}</div>`
    containerSquare.innerHTML += square; */

    const square = document.createElement("div");
    square.classList.add("quadrati");
    square.append(i);
    containerSquare.append(square);

     if ((i % 3 === 0) && (i % 5 === 0)) {

        square.classList.add("quadratiFizzBuzz");
        square.append(`FizzBuzz`);

    } else if (i % 3 === 0) {

        square.classList.add("quadratiFizz");
        square.append(`Fizz`);

    } else if (i % 5 === 0) {

        square.classList.add("quadratiBuzz");
        square.append(`Buzz`);

    }

}