import express from "express";
import { createTodo, getTodo, updateTodo } from "../controller/todocontroller";

const router = express.Router();

router.post("/create", createTodo);
router.get("/get", getTodo);
router.patch("/updateTodo/:id", updateTodo);

export default router;
