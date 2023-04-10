const { supermemo } = require('supermemo');
var dayjs = require("dayjs")

class Flashcard {
    constructor(front, back, dueDate, interval = 0, repetition = 0, efactor = 2.5) {
        this.front = front;
        this.back = back;
        this.dueDate = dueDate;
        this.interval = interval;
        this.repetition = repetition;
        this.efactor = efactor;
    }
}

function practice(flashcard, grade) {
    const { interval, repetition, efactor } = supermemo(flashcard, grade);
    const dueDate = dayjs().add(interval, 'day').format('DD-MM-YYYY');

    return { ...flashcard, interval, repetition, efactor, dueDate };
}


let flashcard1 = new Flashcard('programer', 'an organism that turns caffeine in software', dayjs().format('DD-MM-YYYY'));

function displayFlashcard(flashcard) {

    console.log(`Front: ${flashcard.front}`);
    console.log(`Back: ${flashcard.back}`);
    console.log(`Due date: ${flashcard.dueDate}`);
    console.log("\n");
}


// grade:
// 5: perfect response.
// 4: correct response after a hesitation.
// 3: correct response recalled with serious difficulty.
// 2: incorrect response; where the correct one seemed easy to recall.
// 1: incorrect response; the correct one remembered.
// 0: complete blackout.

displayFlashcard(flashcard1);
flashcard1 = practice(flashcard1, 5);
displayFlashcard(flashcard1);
flashcard1 = practice(flashcard1, 2);
displayFlashcard(flashcard1);
flashcard1 = practice(flashcard1, 3);
displayFlashcard(flashcard1);
