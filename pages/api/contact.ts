import { Request, Response } from "express";
import IMessage from "../../types/message";
import dotenv from "dotenv";

// import express, { Router } from "express";
// import cors from "cors";
import nodemailer, { createTransport, Transporter } from "nodemailer";

enum Code {
	SUCCESS = 200,
	ERROR = 500,
}

// Mailbot configuration

interface IMailbotCredentials {
	email: string;
	username: string;
	password: string;
}

const mailbotCredentials: IMailbotCredentials = {
	email: process.env.NEXT_PUBLIC_MAILBOT_EMAIL,
	username: process.env.NEXT_PUBLIC_MAILBOT_USERNAME,
	password: process.env.NEXT_PUBLIC_MAILBOT_PASSWORD,
};

const SMTP: number = 465;
const HOST: string = "smtp.gmail.com";
const SECURE: boolean = true;
const Mailbot: Transporter = createTransport({
	port: SMTP,
	host: HOST,
	auth: {
		user: mailbotCredentials.username,
		pass: mailbotCredentials.password,
	},
	secure: SECURE,
});

// Express Configuration

// const server = express();
// const router = express.Router();

// server.use(cors({}));
// server.use(express.json());
// server.use("/", router);

// Mailing Functions

const CreateEmail = (message: IMessage): string => {
	return `
<h1>Message from ${message.name}</h1>
<h2>${message.subject || "<i>No Subject<i>"}</h2>
<p>${message.message}</p>
<h3>Contact</h3>
<p>${message.detail || "<i>No Details</i>"}</p>
  `.trim();
};

// Routes

export default (req: Request, res: Response) => {
	try {
		res.status(Code.SUCCESS).json({
			success: true,
			message: "Successfully processed request",
		});
	} catch (error: any) {
		res.status(Code.ERROR).json({
			success: false,
			message: error || "Failed to process the request",
		});
	}
};
