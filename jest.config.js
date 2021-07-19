module.exports = {
    roots: ["src"],
    setupFilesAfterEnv: ["./jest.setup.js"],
    moduleFileExtensions: ["js","jsx","ts", "tsx"],
    testPathIgnorePatterns: ["node_modules/"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        "^.+\\.jsx?$": "babel-jest"
    },
    testMatch: ["**/*.test.(ts|tsx|js|jsx)"],
    moduleNameMapper: {
        // Mocks out all these file formats when tests are run.
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    moduleDirectories: ["node_modules", "utils"],
    testEnvironment: "jsdom"
};
