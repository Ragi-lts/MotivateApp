const electron = require('electron')

const { app, BrowserWindow } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 750 ,
        height: 1334,
        webPreferences:
        {
            nodeIntegration: true
        },
    })
    //win.setMenu(null)
    win.loadFile('./index.html')
    /* win.webContents.openDevTools() */
}

app.whenReady().then(createWindow)
