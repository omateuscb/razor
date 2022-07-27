const {app, BrowserWindow} =  require('electron');
const Database = require('./Database.js');

//Definindo Banco de Dados
const database = new Database('root','root','localhost','3306','razor_db');

//janela principal
var mainWindow = null;

async function createWindow(){
    mainWindow = new BrowserWindow({
        width:800,
        height:600
    });

    await mainWindow.loadFile('./src/pages/index.html');
}

//on ready
app.whenReady().then(createWindow);