module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: '/node_modules/wow.js/src/WOW.js',
                    loader: "exports?this.WOW"
                }
            ]
        }
    }
};

