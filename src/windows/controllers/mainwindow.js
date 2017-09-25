const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')
const ipcRenderer = require('electron').ipcRenderer

const newWindowBtn = document.getElementById('new-window')

newWindowBtn.addEventListener('click', function (event) {
  /*const modalPath = path.join('./src/windows/views/mainwindow.html')
  let win = new BrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL('../views/mainwindow.html')
  win.show()*/
  ipcRenderer.send('request_login')
})


ipcRenderer.on('new_user_loggedin', function (event, arg) {
  const message = `new_user_loggedin: ${arg}`
  document.getElementById('test_message').innerHTML = message
})
