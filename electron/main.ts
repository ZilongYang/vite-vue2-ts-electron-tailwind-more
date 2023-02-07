process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

import {app, BrowserWindow, dialog} from 'electron'
import { autoUpdater } from 'electron-updater';
import log from 'electron-log'
import path from 'path';
import axios from 'axios'
import remoteMain from '@electron/remote/main'
remoteMain.initialize()
// import('@electron/remote/main').then(m=>{m.initialize()})

const im_url = import.meta.env.VITE_IM_URL
console.log('im_url:', im_url)

autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = false

autoUpdater.on("error", (err, msg)=>{
  log.log('autoUpdater error: ', msg)
})

autoUpdater.on("checking-for-update", ()=>{
  log.log("正在检查更新...")
})

autoUpdater.on("update-not-available", (info)=>{
  log.log("程序没有更新。", info)
})

autoUpdater.on("update-available", async (info)=>{
  log.log("程序有更新。", info)
  await  dialog.showMessageBox({
    message: "程序有更新 " + info.version + "，请点击确定后台下载。"
  })
  // .then(value=>{
  //   autoUpdater.downloadUpdate()
  // })
  autoUpdater.downloadUpdate()
})

autoUpdater.on("update-downloaded",async (info)=>{
  await dialog.showMessageBox({
    message: "更新已下载，请点击确定以关闭程序并安装更新。"
  })

  setTimeout(() => {
    log.info(`autoUpdater - Quitting and installing now`);
    autoUpdater.quitAndInstall();
  }, 1000);
})


let mainWindow: Electron.BrowserWindow | null;

/**
 *
 */
function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      
    },
    width: 800,
    show: false,
  });
  remoteMain.enable(mainWindow.webContents)
  // and load the index.html of the app.
  // mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  if(process.env.VITE_DEV_SERVER_URL){
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  mainWindow.once('ready-to-show', ()=>{
    mainWindow?.show()
  })
  
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', ()=>{
  createWindow()
  setTimeout(() => {
    log.info(`autoUpdater - checkForUpdates now`);
    autoUpdater.checkForUpdates()
  }, 3000);
});
// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  // On OS X it"s common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
