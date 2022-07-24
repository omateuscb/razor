const {app, BrowserWindow} =  require('electron');
const db = require('./db.js');

//busca usuarios no banco
async () => {
    const usuarios = await db.selectUsuarios();
    console.log('Buscando usuarios no banco...');
    console.log(usuarios)
}

//janela principal
var mainWindow = null;

async function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600
    });
}

//on ready
app.whenReady().then(createWindow);