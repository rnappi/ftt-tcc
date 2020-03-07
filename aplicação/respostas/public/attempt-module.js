import contents from "./contents-module.js";
import questions from "./questions-module.js";

export const createAttempt = (student) => {
    let attempt = {
        student: student,
        answers: [],
        contents: {},
        content: {}
    };

    attempt.answers = questions.map(question => createAnswer(question));
    attempt.contents = attempt.answers
        .filter(answer => !answer.isCorrect)
        .map(answer => answer.contents)
        .reduce((result, contents) => {
            result[0].value += contents[0].value;
            result[1].value += contents[1].value;
            result[2].value += contents[2].value;
            return result;
        }, JSON.parse(JSON.stringify(contents)));

    return attempt;
}

const createAnswer = (question) => {
    const alternatives = question.alternatives;
    const selectedIndex = Math.floor((Math.random() * alternatives.length));
    return alternatives[selectedIndex];
}