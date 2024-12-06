import { Router } from "express";
import sendMailAPI from "../router/sendMail";
import sendMessageAPI from "../router/sendMessage";

const router = Router();

export const activateAPI = (): Router => {
  router.use("/send-mail", sendMailAPI);
  router.use("/send-message", sendMessageAPI);
  console.log("All APIs activated".cyan);
  return router;
};
