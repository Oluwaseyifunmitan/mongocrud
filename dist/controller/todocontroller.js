"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTodo = exports.updateTodo = exports.createTodo = exports.getTodo = void 0;
const todoModel_1 = __importDefault(require("../model/todoModel"));
const getTodo = async (req, res) => {
    try {
        const todo = await todoModel_1.default.find();
        res.status(200).json({ todo });
    }
    catch (err) {
        return res.status(500).json({
            message: "internal server error",
            route: "/todo/get",
        });
    }
};
exports.getTodo = getTodo;
const createTodo = async (req, res) => {
    try {
        const { description, status } = req.body;
        console.log("hello");
        const todo = await todoModel_1.default.find();
        if (todo) {
            const todos = await todoModel_1.default.create({
                description,
                status,
            });
            return res.status(201).json({
                status: "successfully created",
                data: todos,
            });
        }
        return res.status(400).json({
            todo,
        });
    }
    catch (error) {
        return res.status(500).json({
            Error: "internal Server Error",
            route: "/todo/create",
        });
    }
};
exports.createTodo = createTodo;
const updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const { description, status } = req.body;
        const todo = await todoModel_1.default.findOne({ _id: id });
        if (todo) {
            const todo = await todoModel_1.default.updateOne({ _id: id }, { description, status });
            res.status(200).json({
                message: "updated successfully",
            });
        }
    }
    catch (error) {
        return res.status(500).json({
            Error: "internal server error",
            route: "/todo/updateTodo",
        });
    }
};
exports.updateTodo = updateTodo;
const removeTodo = async (req, res) => {
    try {
        const id = req.params.id;
        const removetodo = await todoModel_1.default.findOneAndDelete({ _id: id });
        return res.status(200).json({
            message: "deleted succesfully",
        });
        return res.status(400).json({
            message: "can not delete",
        });
    }
    catch (err) {
        return res.status(500).json({
            Error: "internal server error",
            route: "/todo/updateTodo",
        });
    }
};
exports.removeTodo = removeTodo;
