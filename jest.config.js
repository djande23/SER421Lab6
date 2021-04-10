module.exports = {
    preset: '.test-setup/jest-preset.js',
    testPathIgnorePatterns : ['/node_modules/','/template/', 'commands/test', '/lib/'],
    transformIgnorePatterns: ['/node_modules/','/template/', '/lib/']
};