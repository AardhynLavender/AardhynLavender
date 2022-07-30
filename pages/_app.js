import "../style/app.scss";
import Head from "next/head";

const application = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Aardhyn Lavender</title>
		</Head>
		<Component {...pageProps} />
	</>
);

export default application;
