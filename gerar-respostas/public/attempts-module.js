import { contents } from "./contents-module.js";
import { questions } from "./questions-module.js";
import { test } from "./test-module.js";

export const createAttempts = (initialAttemptId, totalAttempts) => {
    const initialId = initialAttemptId;
    const limit = initialAttemptId + totalAttempts;
    let attempts = [];

    for(let i = initialId; i < limit; i++) {
        let attempt = createAttempt((i - initialId) + 1);
        attempt.id = i;
        attempt.id_test = test.id;
        attempts.push(attempt);
    }

    return attempts;
};

const createAttempt = (student) => {
    let attempt = {
        id: 0,
        id_test: 0,
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
            for(let i = 0; i < result.length; i++) {
                result[i].value += contents[i].value;
            }
            return result;
        }, JSON.parse(JSON.stringify(contents)));
    
    attempt.content = selectContent(attempt);
    
    return attempt;
}

const createAnswer = (question) => {
    const alternatives = question.alternatives;
    const selectedIndex = Math.floor((Math.random() * alternatives.length));
    return alternatives[selectedIndex];
}

const selectContent = (attempt) => {
    return attempt.contents.reduce((acc, c) => {
        return acc.value >= c.value ? acc : c;
    });
}