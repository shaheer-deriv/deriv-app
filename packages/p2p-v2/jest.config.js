const baseConfigForPackages = require('../../jest.config.base');

module.exports = {
    ...baseConfigForPackages,
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1',
        '@deriv/api': '<rootDir>/../api/src',
        '\\.css$': '<rootDir>/../../__mocks__/styleMock.js',
        '\\.s(c|a)ss$': '<rootDir>/../../__mocks__/styleMock.js',
        '^.+\\.svg$': '<rootDir>/../../__mocks__/fileMock.js',
    },
    transformIgnorePatterns: ['/node_modules/(?!(@deriv-com/ui|@sendbird/chat)).+\\.js$'],
};
