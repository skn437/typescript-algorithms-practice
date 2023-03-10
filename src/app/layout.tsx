//? Metadata
import { type Metadata } from "next/types";

export const metadata: Metadata = {
	title: {
		default: "WEBSITE",
		template: "%s | WEBSITE",
	},
	viewport: {
		width: "device-width",
		initialScale: 1,
		maximumScale: 1,
	},
};

//? Styles & Animations
import "@/src/app/globals.css";

//? Source
import { type ChildrenType } from "@/src/app/BasicTypes";

const RootLayout = async (props: ChildrenType) => {
	const { children } = props;

	return (
		<html lang="en">
			<head></head>

			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
