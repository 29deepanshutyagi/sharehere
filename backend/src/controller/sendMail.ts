import { Request, Response, NextFunction } from "express";
import { sendEmail } from "../utilFunctions/email";

export const sendMail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, url, message } = req.body;

    // Validation for missing email or URL
    if (!email) {
      res.status(400).json({ success: false, error: "Email Missing" });
      return;
    }

    if (!url) {
      res.status(400).json({ success: false, error: "Url Missing" });
      return;
    }

    // Call the utility function to send email
    const result = await sendEmail(email, url, message);

    res.status(200).json({
      success: true,
      data: "Mail sent successfully!",
      result,
    });
  } catch (e) {
    next(e);
  }
};
