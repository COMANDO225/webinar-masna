import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@/providers/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Webinar | Domina la Arquitectura de Software",
	description: "Aprende a dominar la arquitectura de software",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body id='__byAlmeyda' className={inter.className}>
				<NextUIProvider>{children}</NextUIProvider>
			</body>
		</html>
	);
}
