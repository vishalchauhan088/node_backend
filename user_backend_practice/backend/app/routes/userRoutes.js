import express from 'express';

import {
    getUser,
    getUsers,
    createUser,
    deleteUser,
    updateUser
} from '../controllers/userControllers.js';

const router = express.Router();

router.route('/').get(getUsers).post(createUser);
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser);

export default router;