import { Request, Response } from 'express';
import { sendMessage } from "../utilFunctions/message";

const MESSAGEDISABLE = process.env.MESSAGEDISABLE as string;

export const sendMessageController = async (req: Request, res: Response): Promise<void> => {
  try {
    // Check if messaging is enabled
    if (MESSAGEDISABLE !== "activate") {
      res.status(400).json({
        success: false,
        error: `Message facility not in use. To enable it, contact admin at ${process.env.PHONE}`,
      });
      return;
    }

    const { number, url, message } = req.body;

    // Validation for missing number or URL
    if (!number) {
      res.status(400).json({ success: false, error: "Number Missing" });
      return;
    }

    if (!url) {
      res.status(400).json({ success: false, error: "Url Missing" });
      return;
    }

    // Call the utility function to send the message
    const result = await sendMessage(message, number, url);

    res.status(200).json({
      success: true,
      data: "Message sent successfully!",
      result,
    });
  } catch (e) {
    res.status(500).json({ success: false, error: "An error occurred while sending the message" });
  }
};
