// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer, shell } from 'electron';

// Функция, вызываемая при сохранении файла
async function saveFile(url: string, cbSave: (arg0: string) => void) {
  ipcRenderer.send('download', {
    url,
    properties: {
      saveAs: true
    }
  });

  ipcRenderer.once('download-status', (event, file: string) => {
    cbSave(file);
  });
}

async function openFile(pathFile: string) {
  await shell.openPath(pathFile);
}

contextBridge.exposeInMainWorld('myAPI', {
  save: saveFile,
  open: openFile
});
