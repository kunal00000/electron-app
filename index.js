console.log('everything is working fine!')

const electron = require('electron')
const { app, BrowserWindow } = electron
const path = require('path')
const url = require('url')

let win

function createWindow() {
  win = new BrowserWindow()
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    })
  )

  // win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => createWindow())

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
