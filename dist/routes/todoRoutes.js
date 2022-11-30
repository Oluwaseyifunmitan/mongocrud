"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todocontroller_1 = require("../controller/todocontroller");
const router = express_1.default.Router();
router.post("/create", todocontroller_1.createTodo);
router.get("/get", todocontroller_1.getTodo);
router.patch("/updateTodo/:id", todocontroller_1.updateTodo);
exports.default = router;
