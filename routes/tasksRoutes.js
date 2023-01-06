import express from 'express';
const router = express.Router();
import { getAllTasks, createTask, getTask, updataTask, deleteTask } from '../controllers/task_controllers.js';

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updataTask).delete(deleteTask);


export default router;