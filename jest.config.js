// jest.config.js

export default {
    moduleFileExtensions: [
        'js'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'node',
    testMatch: [
        '**/?(*.)+(spec|test).js'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(module-that-needs-esm-support)/)'
    ]
};
