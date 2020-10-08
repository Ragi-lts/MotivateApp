const electron = require('electron')
const express = require('express')

const { app, BrowserWindow } = require('electron')
const { static } = require('express')
var exp_app = express()

exp_app.use(express.static("."));
exp_app.listen(8080, "127.0.0.1");

function createWindow() {
    const win = new BrowserWindow({
        width: 750,
        height: 1334,
        webPreferences:
        {
            nodeIntegration: true
        },
        center: true,
        resizable: false,
    })
    //win.setMenu(null)
    win.loadFile('src/index.html')
    win.webContents.openDevTools({ mode: "bottom" })
}

app.whenReady().then(createWindow)

