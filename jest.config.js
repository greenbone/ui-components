const neutrino = require("neutrino")

process.env.NODE_ENV = process.env.NODE_ENV || "test"

module.exports = {
    ...neutrino().jest(),
    setupFilesAfterEnv: ["./jestSetup.js"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    testRegex: undefined,
    moduleDirectories: [
        "node_modules",
        "utils"
    ]
}
