// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, dialog, ipcRenderer} from "electron";

// Функция, вызываемая при сохранении файла
async function saveFile(content) {
    try {
        const result = await ipcRenderer.invoke('save-file', content);
        if (result) {
            console.log('Файл успешно сохранен');
        } else {
            console.log('Сохранение файла отменено');
        }
    } catch (error) {
        console.error(error);
    }
}

contextBridge.exposeInMainWorld('myAPI', {
    desktop: true,
    save: saveFile
});