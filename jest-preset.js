module.exports = {
    "roots": [
        "<rootDir>/src"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.html$": "./transform/html.js",
        "^.+\\.css$": "./transform/css.js"
    },
    "testEnvironment": "jsdom"
}