import "./globals.css";
import {JetBrains_Mono, Montserrat} from "@next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jetBrains = JetBrains_Mono({
	weight: ["400", "500", "600", "700"],
	variable: "--font-jetBrains",
	subsets: ["latin"],
});
const montserrat = Montserrat({
	weight: ["400", "500", "600", "700"],
	variable: "--font-montserrat",
	subsets: ["latin"],
});
export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body
				className={
					"relative bg-gray-950" +
					jetBrains.className +
					" " +
					montserrat.className
				}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
