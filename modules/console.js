function success (message) {
    console.log('\x1b[32m%s\x1b[0m', '[SUCCESS]', message);
}

function warning (message) {
    console.log('\x1b[33m%s\x1b[0m', '[WARNING]', message);
}

function error (message) {
    console.log('\x1b[31m%s\x1b[0m', '[ERROR]', message);
}

module.exports = {
    success,
    warning,
    error
};