module.exports = {
    process(sourceText, sourcePath, options) {
        // Ignore CSS Entirely
        return {
            code: `module.exports = null;`,
        };
    },
};
