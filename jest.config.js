module.exports = {
    roots: ["src"],
    "testEnvironment": "jsdom",
    setupFilesAfterEnv: ["./jest.setup.ts"],
    moduleFileExtensions: ["ts", "tsx", "js"],
    testPathIgnorePatterns: ["node_modules/"],
    moduleDirectories: ['node_modules', 'src'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: ["**/*.test.(ts|tsx)"],
    moduleNameMapper: {
        '@test-utils/(.*)': '<rootDir>/src/utils/$1',
        // Mocks out all these file formats when tests are run.
        "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
            "identity-obj-proxy",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};
