module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.html$": `${__dirname}/transform/html.js`,
        "^.+\\.css$": `${__dirname}/transform/css.js`
    },
    "testEnvironment": "jsdom"
}