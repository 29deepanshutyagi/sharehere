import fast2sms from "fast-two-sms";

const FAST2SMS = process.env.FAST2SMS as string;

export const sendMessage = (
  message: string,
  contactNumber: string,
  url: string
): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fast2sms.sendMessage({
        authorization: FAST2SMS,
        message: `${message} : ${url}`,
        numbers: [contactNumber],
      });
      resolve(res);
    } catch (e) {
      reject(`Error: Error while sending message: ${e}`);
    }
  });
};
