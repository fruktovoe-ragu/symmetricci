export default {
    preset: 'ts-jest',
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.css$": "jest-transform-css",
    },
    extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx"],
    transformIgnorePatterns: ["/node_modules/(?!your-package-to-transform)"],
    moduleNameMapper: {
        // ".(css/less/scss)$": "identity-obj-proxy",
        "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
    }
}
