import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`Server Running ON Port ${process.env.PORT}`);
});