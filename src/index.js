const moment = require('moment');
const package = require('../package.json')
moment.locale("ja");


window.onload = function () {
    checkInit();
    setInterval(getTime, 1000, 'nowTime', 'MM/DD(dd) HH:mm:ss');
    Click_Dev('component/main.html');
}

function getTime(id, format) {
    var now = moment().format(format);
    document.getElementById(id).textContent = now;
}

function checkInit() {
    M.AutoInit();
    document.getElementById('Version').textContent = package.version;
}


function Click_Dev(link, per) {
    var cont = document.getElementById('content');
    cont.setAttribute('src', link);
    cont.setAttribute('width', '100%');
    cont.setAttribute('height', window.innerHeight * (per || 0.9));
}

