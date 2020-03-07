import {createAttempt} from "./attempt-module.js";

const qtdStudents = 20;
let attempts = [];

for (let index = 0; index < qtdStudents; index++) {
    attempts.push(createAttempt(index));
}

let total = {};

// total de acertos e conteudo sugerido
attempts.forEach(attempt => {
    let correctAnswers = attempt.answers.reduce((acc, answer) => {
        if(answer.isCorrect)
            acc += 1;

        return acc;
    }, 0);

    if(!total[`a${correctAnswers}`])
        total[`a${correctAnswers}`] = 0;

    total[`a${correctAnswers}`] += 1;

    attempt.content = attempt.contents.reduce((acc, c) => {
        return acc.value >= c.value ? acc : c;
    });
});

console.log(total);
console.log(attempts);
