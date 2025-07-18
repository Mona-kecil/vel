"use client";

import { Wallet } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { Button } from "~/components/ui/button";
import { useRequireWallet } from "~/hooks/useRequireWallet";

interface ProtectedLayoutProps {
	children: ReactNode;
}

export function ProtectedLayout({ children }: ProtectedLayoutProps) {
	const { isConnecting, requiresWallet, openWalletModal } = useRequireWallet();

	if (isConnecting) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-background">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					className="text-center space-y-4"
				>
					<motion.div
						className="h-8 w-8 mx-auto border-2 border-primary border-t-transparent rounded-full"
						animate={{ rotate: 360 }}
						transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
					/>
					<p className="text-muted-foreground text-sm">Connecting wallet...</p>
					<p className="text-xs text-muted-foreground">
						If you are stuck on "Connecting wallet...", please try refreshing the page.
					</p>
				</motion.div>
			</div>
		);
	}

	if (requiresWallet) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-background">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center space-y-6 p-8 max-w-md"
				>
					<motion.div
						className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10"
						whileHover={{ scale: 1.05 }}
					>
						<Wallet className="h-8 w-8 text-primary" />
					</motion.div>
					
					<div className="space-y-2">
						<h1 className="text-2xl font-bold text-foreground">
							Connect Your Wallet
						</h1>
						<p className="text-muted-foreground text-sm">
							You need to connect your wallet to access the dashboard and manage your payments.
						</p>
					</div>

					<motion.div
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<Button 
							onClick={openWalletModal}
							size="lg"
							className="w-full font-medium"
						>
							Connect Wallet
						</Button>
					</motion.div>
					
					<p className="text-muted-foreground text-xs">
						Secure connection powered by Xellar
					</p>
				</motion.div>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
			className="p-6"
		>
			{children}
		</motion.div>
	);
} 