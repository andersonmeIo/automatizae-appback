import { app } from "./app";

function startServer() {
    app.listen(5050, () => {
        console.log(`Iniciado na porta 5050`);
    })
}

startServer();