import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "~/styles/globals.css";
import Web3Provider from "~/components/xellar-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Vel",
	description: "Platform pembayaran lintas batas untuk Indonesia",
};

export default function RootLayout({
	children,
}: {
	children: ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Web3Provider>
					<div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
						{children}
					</div>
				</Web3Provider>
			</body>
		</html>
	);
}
