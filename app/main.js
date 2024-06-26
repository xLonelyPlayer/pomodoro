const { app, BrowserWindow } = require('electron')

app.setAppUserModelId('Pomodoro');

let win;

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 262,
    height: 186,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/app/browser/assets/logo.png`,
    webPreferences: {
      backgroundThrottling : false,
    },
    alwaysOnTop: true,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00000000',
      symbolColor: '#000000'
    },
    thickFrame: true,
  })


  win.setMenu(null);
  win.loadURL(`file://${__dirname}/dist/app/browser/index.html`)


  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
