import nodemailer from 'nodemailer';
import 'dotenv/config';

export async function sendEmail(
	email: string,
	url: string,
	message: string
): Promise<string> {
	return new Promise(async (resolve, reject) => {
		try {
			let transporter = nodemailer.createTransport({
				service: "gmail",
				auth: {
					user: process.env.EMAIL,
					pass: process.env.EMAILPASSWORD,
				},
			});
			let mailOptions = {
				from: process.env.EMAIL,
				to: email,
				subject: "File Shared from Share Here",
				text: `${message} This is your link of shared file ${url}`,
				// 	html: `
				// <!DOCTYPE html>
				// <html lang="en">
				//     <head>
				//     </head>
				//     <body>
				//         <p${}</p>
				//     </body>
				// </html>`,
			};
			let info = await transporter.sendMail(mailOptions);
			resolve(`Message sent to ${info.messageId}`);
		} catch (e) {
			console.log(e);
			reject(`Error : Error while sending mail :${e}`);
		}
	});
}
module.exports = { sendEmail };
