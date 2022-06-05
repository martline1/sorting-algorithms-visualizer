const { app, BrowserWindow } = require("electron");

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width          : 800,
		height         : 600,
		webPreferences : {
			nodeIntegration : true,
		},
	});

	if (process.NODE_ENV !== "production") {
		mainWindow.loadURL("http://localhost:3000");
	}
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Algunas APIs pueden solamente ser usadas despues de que este evento ocurra.
app.whenReady().then(() => {
	createWindow();

	app.on("activate", () => {
		// On macOS it's common to re-create a window in the app when the
		// dock icon is clicked and there are no other windows open.
		if (BrowserWindow.getAllWindows().length === 0) createWindow();
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
