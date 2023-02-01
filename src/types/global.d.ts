export interface IVersions {
  node(): String,
  chrome(): String,
  electron(): String,
}

export interface IElectron_znl {
  app: String,
  version: String,
  versions: Object, //获取所有版本信息
  notifyMain(title: string, body: string, notifyId: any) : void
}

declare global {
  interface Window {
    versions: IVersions;
    electron_znl: IElectron_znl
  }
}