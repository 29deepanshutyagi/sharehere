import { Router } from 'express';
import { sendMail } from '../controller/sendMail';

const router = Router();

router.route("/").post(sendMail);

export default router;
