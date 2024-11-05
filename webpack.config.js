var path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "./src/js/bin/index.ts"),
    output: path.resolve(__dirname, "public"),
    mode: "production",
    module: {
        rule: []
    }
}