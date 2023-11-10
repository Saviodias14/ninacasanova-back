import app, { init } from "./app";

const port = process.env.PORT??5000
init().then(() => {
    app.listen(port, () => {
        console.log(`Web server is up and listening on port ${port}.`);
    });
})