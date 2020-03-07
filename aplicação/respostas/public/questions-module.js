const questions = [
    {
        id: 1,
        description: 'Pergunta 1',
        alternatives:[
            {
                id: 1,
                description: 'Pergunta 1 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 2,
                description: 'Pergunta 1 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 3,
                description: 'Pergunta 1 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 4,
                description: 'Pergunta 1 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 5,
                description: 'Pergunta 1 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 2,
        description: 'Pergunta 2',
        alternatives:[
            {
                id: 6,
                description: 'Pergunta 2 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 7,
                description: 'Pergunta 2 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 8,
                description: 'Pergunta 2 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 9,
                description: 'Pergunta 2 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 10,
                description: 'Pergunta 2 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 3,
        description: 'Pergunta 3',
        alternatives:[
            {
                id: 11,
                description: 'Pergunta 3 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 12,
                description: 'Pergunta 3 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 13,
                description: 'Pergunta 3 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 14,
                description: 'Pergunta 3 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 15,
                description: 'Pergunta 3 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 4,
        description: 'Pergunta 4',
        alternatives:[
            {
                id: 16,
                description: 'Pergunta 4 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 17,
                description: 'Pergunta 4 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 18,
                description: 'Pergunta 4 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 19,
                description: 'Pergunta 4 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 20,
                description: 'Pergunta 4 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 5,
        description: 'Pergunta 5',
        alternatives:[
            {
                id: 21,
                description: 'Pergunta 5 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 22,
                description: 'Pergunta 5 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 23,
                description: 'Pergunta 5 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 24,
                description: 'Pergunta 5 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 25,
                description: 'Pergunta 5 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 6,
        description: 'Pergunta 6',
        alternatives:[
            {
                id: 26,
                description: 'Pergunta 6 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 27,
                description: 'Pergunta 6 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 28,
                description: 'Pergunta 6 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 29,
                description: 'Pergunta 6 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 30,
                description: 'Pergunta 6 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 7,
        description: 'Pergunta 7',
        alternatives:[
            {
                id: 31,
                description: 'Pergunta 7 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 32,
                description: 'Pergunta 7 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 33,
                description: 'Pergunta 7 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 34,
                description: 'Pergunta 7 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 35,
                description: 'Pergunta 7 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 8,
        description: 'Pergunta 8',
        alternatives:[
            {
                id: 36,
                description: 'Pergunta 8 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 37,
                description: 'Pergunta 8 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 38,
                description: 'Pergunta 8 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 39,
                description: 'Pergunta 8 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 40,
                description: 'Pergunta 8 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 9,
        description: 'Pergunta 9',
        alternatives:[
            {
                id: 41,
                description: 'Pergunta 9 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 42,
                description: 'Pergunta 9 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 43,
                description: 'Pergunta 9 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 44,
                description: 'Pergunta 9 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 45,
                description: 'Pergunta 9 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    },
    {
        id: 10,
        description: 'Pergunta 10',
        alternatives:[
            {
                id: 46,
                description: 'Pergunta 10 / Alternativa 1',
                isCorrect: true,
                contents: [
                    { id: 1, value: 0 },
                    { id: 2, value: 0 },
                    { id: 3, value: 0 },
                ]
            },
            {
                id: 47,
                description: 'Pergunta 10 / Alternativa 2',
                isCorrect: false,
                contents: [
                    { id: 1, value: 30 },
                    { id: 2, value: 20 },
                    { id: 3, value: 50 },
                ]
            },
            {
                id: 48,
                description: 'Pergunta 10 / Alternativa 3',
                isCorrect: false,
                contents: [
                    { id: 1, value: 50 },
                    { id: 2, value: 20 },
                    { id: 3, value: 30 },
                ]
            },
            {
                id: 49,
                description: 'Pergunta 10 / Alternativa 4',
                isCorrect: false,
                contents: [
                    { id: 1, value: 10 },
                    { id: 2, value: 20 },
                    { id: 3, value: 70 },
                ]
            },
            {
                id: 50,
                description: 'Pergunta 10 / Alternativa 5',
                isCorrect: false,
                contents: [
                    { id: 1, value: 20 },
                    { id: 2, value: 50 },
                    { id: 3, value: 30 },
                ]
            }
        ]
    }
];

export default questions;