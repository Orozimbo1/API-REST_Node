import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middleware/loginRequired';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);

export default router;
