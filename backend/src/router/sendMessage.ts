import { Router } from 'express';
import { sendMessageController } from '../controller/sendMessage';

const router = Router();

router.route("/").post(sendMessageController);

export default router;
