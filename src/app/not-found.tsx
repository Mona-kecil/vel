"use client";

import { ArrowLeft, FileX, Home } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background p-6">
			<div className="w-full max-w-md">
				<motion.div
					initial={{ opacity: 0, y: 20, scale: 0.95 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						duration: 0.6,
						ease: [0.25, 0.46, 0.45, 0.94],
						staggerChildren: 0.1,
					}}
				>
					<Card className="text-center">
						<CardContent className="p-8">
							{/* Error Icon */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									delay: 0.2,
									duration: 0.5,
									type: "spring",
									stiffness: 200,
								}}
								className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10"
							>
								<motion.div
									animate={{
										rotate: [0, -10, 10, -10, 0],
									}}
									transition={{
										delay: 0.8,
										duration: 0.6,
										ease: "easeInOut",
									}}
								>
									<FileX className="h-10 w-10 text-primary" />
								</motion.div>
							</motion.div>

							{/* Error Text */}
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3, duration: 0.5 }}
								className="mb-2 font-bold text-6xl text-foreground"
							>
								404
							</motion.h1>
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
								className="mb-4 font-semibold text-foreground text-xl"
							>
								Halaman Tidak Ditemukan
							</motion.h2>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
								className="mb-8 text-muted-foreground"
							>
								Maaf, halaman yang Anda cari tidak dapat ditemukan. Halaman
								mungkin telah dipindahkan atau tidak ada.
							</motion.p>

							{/* Action Buttons */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.5 }}
								className="space-y-3"
							>
								<Link href="/dashboard" className="block">
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
										transition={{ type: "spring", stiffness: 400, damping: 17 }}
									>
										<Button className="w-full">
											<Home className="mr-2 h-4 w-4" />
											Kembali ke Dashboard
										</Button>
									</motion.div>
								</Link>

								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
								>
									<Button
										variant="outline"
										className="w-full"
										onClick={() => window.history.back()}
									>
										<ArrowLeft className="mr-2 h-4 w-4" />
										Kembali ke Halaman Sebelumnya
									</Button>
								</motion.div>
							</motion.div>

							{/* Additional Help */}
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.8, duration: 0.5 }}
								className="mt-6 border-border border-t pt-6"
							>
								<p className="text-muted-foreground text-sm">
									Butuh bantuan?{" "}
									<motion.span
										whileHover={{ scale: 1.05 }}
										transition={{ type: "spring", stiffness: 400, damping: 17 }}
										className="inline-block"
									>
										<Link
											href="/dashboard"
											className="font-medium text-primary hover:text-primary/80"
										>
											Hubungi Support
										</Link>
									</motion.span>
								</p>
							</motion.div>
						</CardContent>
					</Card>
				</motion.div>
			</div>
		</div>
	);
}
