'use strict';
let share = document.getElementById('share');
share.addEventListener('click', () => {
    share.href = 'mailto:user@example.com?subject=Sharing the SNOBZ app with you&body=To install SNOBZ on your mobile device, click on ';
});