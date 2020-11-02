const { app, BrowserWindow } = require('electron')
const path = require("path")

const isDev = process.env.NODE_ENV ? process.env.NODE_ENV === "development" : !app.isPackaged;

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  const url =
    isDev
      // in dev, target the host and port of the local rollup web server
      ? "http://localhost:5000"
      // in production, use the statically build version of our application
      : `file://${path.join(__dirname, "../public/index.html")}`
  win.loadURL(url)

  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
