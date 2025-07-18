"use client";

import type React from "react";

import {
	ArrowLeft,
	Camera,
	CheckCircle,
	ExternalLink,
	Upload,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";

type PaymentState = "qr-input" | "payment-confirmation";

type PaymentData = {
	amount: number;
	amountUSDT: number;
	merchantName: string;
	description: string;
	recipientAddress: string;
	token: string;
	network: string;
};

export default function PayPage() {
	const [currentState, setCurrentState] = useState<PaymentState>("qr-input");
	const [isDragOver, setIsDragOver] = useState(false);

	// Mock payment data that would come from QR parsing
	const mockPaymentData: PaymentData = {
		amount: 1234567,
		amountUSDT: 77.16,
		merchantName: "PT Kreatif Digital",
		description: "Pembayaran Jasa Desain",
		recipientAddress: "lsk24cd35u4jdq8szo3pnsqe5dsxwrnazyqqqg5eu",
		token: "USDT",
		network: "Lisk Sepolia",
	};

	const formatIDR = (amount: number) => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		})
			.format(amount)
			.replace("IDR", "Rp");
	};

	const handleCameraScan = () => {
		// Simulate QR scanning - in real app this would open camera
		setTimeout(() => {
			setCurrentState("payment-confirmation");
		}, 500);
	};

	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			// Simulate QR parsing - in real app this would parse the QR code
			setTimeout(() => {
				setCurrentState("payment-confirmation");
			}, 500);
		}
	};

	const handleDragOver = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(true);
	}, []);

	const handleDragLeave = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);
	}, []);

	const handleDrop = useCallback((e: React.DragEvent) => {
		e.preventDefault();
		setIsDragOver(false);

		const files = e.dataTransfer.files;
		if (files.length > 0) {
			// Simulate QR parsing
			setTimeout(() => {
				setCurrentState("payment-confirmation");
			}, 500);
		}
	}, []);

	const handleProceedToPayment = () => {
		// In real app, this would trigger wallet connection
		alert("Membuka wallet untuk konfirmasi pembayaran...");
	};

	const shortenAddress = (address: string) => {
		return `${address.slice(0, 6)}...${address.slice(-6)}`;
	};

	return (
			<div className="space-y-6">
				{/* Header */}
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Link href="/dashboard">
							<Button variant="ghost" size="icon">
								<ArrowLeft className="h-5 w-5" />
							</Button>
						</Link>
						<div>
							<h1 className="text-3xl font-bold text-foreground">Scan & Pay</h1>
							<p className="text-muted-foreground">
								Scan QR code untuk melakukan pembayaran
							</p>
						</div>
					</div>
				</div>

				{currentState === "qr-input" && (
					<div className="grid gap-6 md:grid-cols-2">
						{/* QR Scanner */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Camera className="h-5 w-5" />
									Scan QR Code
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="aspect-square rounded-lg border-2 border-dashed border-border bg-muted/50 flex items-center justify-center">
									<div className="text-center">
										<Camera className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
										<p className="text-sm font-medium mb-2">
											Arahkan kamera ke QR code
										</p>
										<p className="text-xs text-muted-foreground mb-4">
											QR code akan dipindai secara otomatis
										</p>
										<Button onClick={handleCameraScan} className="w-full">
											Mulai Scan
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Upload QR Image */}
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Upload className="h-5 w-5" />
									Upload QR Code
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div
									className={`aspect-square rounded-lg border-2 border-dashed transition-colors cursor-pointer flex items-center justify-center ${
										isDragOver
											? "border-primary bg-primary/5"
											: "border-border bg-muted/50 hover:bg-muted/80"
									}`}
									onDragOver={handleDragOver}
									onDragLeave={handleDragLeave}
									onDrop={handleDrop}
									onClick={() => document.getElementById("file-upload")?.click()}
								>
									<div className="text-center">
										<Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
										<p className="text-sm font-medium mb-2">
											Upload gambar QR code
										</p>
										<p className="text-xs text-muted-foreground mb-4">
											Drag & drop atau klik untuk memilih file
										</p>
										<p className="text-xs text-muted-foreground">
											Format: JPG, PNG, PDF
										</p>
									</div>
								</div>
								<input
									id="file-upload"
									type="file"
									accept="image/*,.pdf"
									className="hidden"
									onChange={handleFileUpload}
								/>
							</CardContent>
						</Card>
					</div>
				)}

				{currentState === "payment-confirmation" && (
					<div className="max-w-2xl mx-auto">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<CheckCircle className="h-5 w-5 text-chart-1" />
									Konfirmasi Pembayaran
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{/* Payment Summary */}
								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">Merchant</span>
										<span className="font-medium">{mockPaymentData.merchantName}</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">Deskripsi</span>
										<span className="font-medium">{mockPaymentData.description}</span>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">Jumlah</span>
										<div className="text-right">
											<div className="text-2xl font-bold text-foreground">
												{formatIDR(mockPaymentData.amount)}
											</div>
											<div className="text-sm text-muted-foreground">
												≈ {mockPaymentData.amountUSDT} {mockPaymentData.token}
											</div>
										</div>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">Network</span>
										<Badge variant="secondary">{mockPaymentData.network}</Badge>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-muted-foreground">Alamat Tujuan</span>
										<div className="flex items-center gap-2">
											<span className="font-mono text-sm">
												{shortenAddress(mockPaymentData.recipientAddress)}
											</span>
											<Button variant="ghost" size="icon" className="h-6 w-6">
												<ExternalLink className="h-3 w-3" />
											</Button>
										</div>
									</div>
								</div>

								{/* Action Buttons */}
								<div className="flex gap-3 pt-4">
									<Button
										variant="outline"
										onClick={() => setCurrentState("qr-input")}
										className="flex-1"
									>
										Kembali
									</Button>
									<Button onClick={handleProceedToPayment} className="flex-1">
										Bayar Sekarang
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				)}
			</div>
	);
}
