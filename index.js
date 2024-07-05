const concurrently = require('concurrently');

const commands = [
{ command: 'cd Blood_Banking_System-MobileEnd && npx ionic serve', name: 'Ionic', prefixColor: 'blue' },
{ command: 'cd Blood_Banking_System_WebEnd && npx serve -s .', name: 'HTML5', prefixColor: 'green' }
];

concurrently(commands, {
prefix: 'name',
killOthers: ['failure', 'success'],
});
