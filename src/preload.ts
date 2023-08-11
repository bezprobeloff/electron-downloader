// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

// Функция, вызываемая при сохранении файла
async function saveFile(content: any) {
  console.log('start');
  const savepath = ipcRenderer.send('download', {
    url: content
  });

  ipcRenderer.once('download-status', (event, file) => {
    console.log(file); // Full file path
  });
}
contextBridge.exposeInMainWorld('electron', {
  doThing: () => ipcRenderer.send('do-a-thing')
});

contextBridge.exposeInMainWorld('myAPI', {
  desktop: true,
  save: saveFile
});
