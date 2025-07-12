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

/**
 * Root layout component that sets up global styles, font, and Web3 context for the application.
 *
 * Wraps all page content with the Inter font, applies a gray background, and provides the Web3 context to descendants.
 *
 * @param children - The content to be rendered within the layout
 */
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
