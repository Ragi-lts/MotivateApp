const moment = require('moment');
moment.locale("ja");


window.onload = function () {
    checkInit();
    setInterval(getTime, 1000, 'nowTime', 'MM/DD(dd) HH:mm:ss');
}

function getTime(id, format) {
    var now = moment().format(format);
    document.getElementById(id).textContent = now;
}

function checkInit() {
    M.AutoInit();

}