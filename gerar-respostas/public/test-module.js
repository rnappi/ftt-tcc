import {contents} from "./contents-module.js";
import {questions} from "./questions-module.js";

export const test = {
    id: 1,
    id_teacher: 1,
    name: "Português - Gramática"
};

export const createTest = () => {
    let sql = `insert into questionarios values (${test.id}, ${test.id_teacher}, '${test.name}', sysdate());`;
    return sql;
}

export const createQuestions = () => {
    return questions.reduce((sql, question) => {
        return sql += `insert into perguntas values(${question.id}, ${test.id}, '${question.description}');<br>`;
    }, '');
};

export const createAlternatives = () => {
    return questions.reduce((sql, question) => {
        return sql += question.alternatives.reduce((sqlAlternative, alternative) => {
            const isCorrect = alternative.isCorrect ? 1 : 0;
            return sqlAlternative += `insert into alternativas values(${alternative.id}, ${question.id}, '${alternative.description}', ${isCorrect});<br>`;
        }, '');
    }, '');
};

export const createContents = () => {
    return contents.reduce((sql, content) => {
        return sql += `insert into materiais values(${content.id}, '${content.description}', '${content.url}');<br>`;
    }, '');
};