import axios, { AxiosResponse } from "axios";
import {
	ChangeEvent,
	FormEvent,
	FormEventHandler,
	ReactElement,
	useState,
} from "react";
import IMessage from "../types/message";
import SectionHeader from "./SectionHeader";

export const Contact = (): ReactElement => {
	const [Name, SetName] = useState<string>("");
	const [Subject, SetSubject] = useState<string>("");
	const [Message, SetMessage] = useState<string>("");
	const [Detail, SetDetail] = useState<string>("");

	const HandleSubmit = async (
		formEvent: FormEvent<HTMLFormElement>
	): Promise<void> => {
		formEvent.preventDefault();
		try {
			if (!Name) throw "Name must be provided";
			if (!Message) throw "Message must be provided!";

			const messageData: IMessage = {
				name: Name,
				message: Message,
				subject: Subject,
				detail: Detail,
			};

			const responce: AxiosResponse = await axios.post(
				"/api/contact/",
				messageData
			);

			alert("Success! I look forward to reading your message!");

			SetName("");
			SetSubject("");
			SetMessage("");
			SetDetail("");
		} catch (error: any) {
			console.error(
				error || "Arbitary Error! Failed to process form submission!"
			);
			alert("Sorry! somthing went wrong...");
		}
	};

	return (
		<>
			<SectionHeader heading="Contact" subheading="Say Hello" />
			<form onSubmit={HandleSubmit}>
				<input
					required={true}
					type="text"
					name="name"
					placeholder="Name"
					value={Name}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						SetName(event.target.value);
					}}
				/>
				<input
					required={false}
					type="text"
					name="subject"
					value={Subject}
					placeholder="Subject"
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						SetSubject(event.target.value);
					}}
				/>
				<textarea
					required={true}
					name="message"
					placeholder="Message"
					value={Message}
					onChange={(event: ChangeEvent<HTMLTextAreaElement>) => {
						SetMessage(event.target.value);
					}}
				/>
				<input
					required={false}
					type="email"
					placeholder="email"
					value={Detail}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						SetDetail(event.target.value);
					}}
				/>
				<button type="submit" name="submit" value="submit">
					Send
				</button>
			</form>
		</>
	);
};
