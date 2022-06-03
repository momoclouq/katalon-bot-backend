"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors = require('cors');
const port = 5000;
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello Katalon bot backend');
});
app.get('/test', (req, res) => {
    const value = {
        value1: "The heck",
        value2: "The hell"
    };
    res.send(value);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
//# sourceMappingURL=app.js.map