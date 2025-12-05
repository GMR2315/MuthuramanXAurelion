"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bmsRouter_1 = __importDefault(require("./router/bmsRouter"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
//Third Party module
app.use((0, morgan_1.default)('common'));
app.use((0, cors_1.default)());
//Core module
app.use(express_1.default.json());
//custom module
const middleware = (req, res, next) => {
    console.log("middleware ran successfully");
    next();
};
//GET - http://localhost:3000/
app.get("/", middleware, (req, res) => {
    res.send("Movies");
});
app.use("/v1", bmsRouter_1.default);
app.listen(3000, () => {
    console.log("Server running");
});
