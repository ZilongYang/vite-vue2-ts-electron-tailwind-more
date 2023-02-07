import { contextBridge, ipcRenderer } from 'electron'
import { BrowserWindow } from '@electron/remote'
// const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  // 能暴露的不仅仅是函数，我们还可以暴露变量
})

contextBridge.exposeInMainWorld('electron_znl',{
  app: 'imtool',
  version: '0.0.1',
  versions: process.versions, //获取所有版本信息
  onload: ()=>{
    // let meta = document.createElement("meta")
    // meta.httpEquiv="Content-Security-Policy"
    // meta.content="script-src 'self' 'unsafe-inline';"
    // document.head.append(meta)

    // let m = `<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />`
  },
  addButton():void{ //测试方法
    let body = document.querySelector("body")
    let btn = document.createElement("button")
    btn.innerText = "Electron测试按钮"
    body?.prepend(btn)
  },
  closeWindow(){
    const win = BrowserWindow.getFocusedWindow()
    win?.close()
  },
  // 在主进程显示通知
  notifyMain(title:string, body:string, notifyId:any):void{
    ipcRenderer.send('notify-main', {title, body, notifyId})
  },
})