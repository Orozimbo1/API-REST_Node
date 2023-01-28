import { Router } from 'express';

import userController from '../controllers/UserController';
import loginRequired from '../middleware/LoginRequired';

const router = new Router();

// Não deveria existir
// router.get('/:id', userController.show);
// router.get('/', userController.index);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
