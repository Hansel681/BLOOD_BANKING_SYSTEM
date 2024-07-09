const concurrently = require('concurrently');

const commands = [
//{ command: 'cd BLOOD_BANKING_SYSTEM-MobileEnd && npx ionic serve', name: 'Ionic', prefixColor: 'blue' },
{ command: 'cd BLOOD_BANKING_SYSTEM-webEnd && npx serve -s .', name: 'HTML5', prefixColor: 'green' }
];

concurrently(commands, {
prefix: 'name',
killOthers: ['failure', 'success'],
});




