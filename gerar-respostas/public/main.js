import { createTest, createQuestions, createAlternatives, createContents } from "./test-module.js";
import { createAttempts } from "./attempts-module.js";

const startup = {
    qtdStudents: 2000,
    qtdAttempts: 500,
    initialStudentId: 1,
    initialAttemptId: 1
}

const teacher = `insert into professores values (1, 'Professor 1');`;
//document.querySelector('#teacher-content').innerHTML = teacher;

const createStudents = () => {
    let sql = '';
    const initialId = startup.initialStudentId;
    const limit = startup.initialStudentId + startup.qtdStudents;

    for(let i = initialId; i < limit; i++){
        sql += `insert into alunos values (${i}, 'Aluno ${i}');<br>`;
    }
    return sql;
};
//document.querySelector('#student-content').innerHTML = createStudents();

const test = createTest();
document.querySelector('#test-content').innerHTML = test;

const questions = createQuestions();
document.querySelector('#question-content').innerHTML = questions;

const alternatives = createAlternatives();
document.querySelector('#alternative-content').innerHTML = alternatives;

const contents = createContents();
//document.querySelector('#contents-content').innerHTML = contents;

const attempts = createAttempts(startup.initialAttemptId, startup.qtdAttempts);

const insertAttempts = attempts.reduce((sql, attempt) => {
    return sql += `insert into tentativas values (${attempt.id}, ${attempt.student}, ${attempt.id_test}, ${attempt.content.id});<br>`;
}, '');
document.querySelector('#attempts-content').innerHTML = insertAttempts;

const insertAnswers = (() => {
    let sql = '';

    attempts.forEach(attempt => {
        sql += attempt.answers.reduce((_sql, answer) => {
            return _sql += `insert into respostas values (${attempt.id}, ${answer.id});<br>`;
        }, '');
    });

    return sql;
})();
//document.querySelector('#answers-content').innerHTML = insertAnswers;

console.log(attempts);


//document.querySelector('#attempts-content').innerHTML = attempts;

/*
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
*/
