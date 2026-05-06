const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      // Kode sakti untuk mengizinkan lagu langsung berputar otomatis
      autoplayPolicy: 'no-user-gesture-required' 
    }
  })

  // Memuat tampilan halaman beranda
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)