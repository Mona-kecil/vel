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

interface PaymentData {
	amount: number;
	amountUSDT: number;
	merchantName: string;
	description: string;
	recipientAddress: string;
	token: string;
	network: string;
}

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
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<header className="sticky top-0 z-10 border-gray-200 border-b bg-white">
				<div className="mx-auto flex max-w-md items-center justify-between px-4 py-4">
					{currentState === "payment-confirmation" ? (
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setCurrentState("qr-input")}
							className="text-gray-600 hover:text-gray-900"
						>
							<ArrowLeft className="h-5 w-5" />
						</Button>
					) : (
						<Link href="/">
							<Button
								variant="ghost"
								size="icon"
								className="text-gray-600 hover:text-gray-900"
							>
								<ArrowLeft className="h-5 w-5" />
							</Button>
						</Link>
					)}

					<div className="flex-1 text-center">
						<h1 className="font-bold text-2xl text-[#243B55]">Vel</h1>
					</div>

					<div className="w-10" />
				</div>
			</header>

			{/* Main Content */}
			<main className="mx-auto max-w-md px-4 py-6">
				{currentState === "qr-input" && (
					<div className="space-y-6">
						{/* Title */}
						<div className="text-center">
							<h2 className="mb-2 font-bold text-2xl text-[#243B55]">
								Bagaimana Anda ingin membayar?
							</h2>
							<p className="text-gray-600">
								Pilih metode untuk memindai atau mengunggah kode QR pembayaran
							</p>
						</div>

						{/* Camera Scan Option */}
						<Card className="cursor-pointer border-2 border-gray-200 transition-colors hover:border-[#4CAF50]">
							<CardContent
								className="space-y-4 p-6 text-center"
								onClick={handleCameraScan}
							>
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]/10">
									<Camera className="h-8 w-8 text-[#4CAF50]" />
								</div>
								<div>
									<h3 className="mb-2 font-semibold text-[#243B55] text-lg">
										Pindai dengan Kamera
									</h3>
									<p className="text-gray-600 text-sm">
										Gunakan kamera Anda untuk memindai kode QR
									</p>
								</div>
								<Button className="w-full bg-[#4CAF50] text-white hover:bg-[#45a049]">
									Buka Kamera
								</Button>
							</CardContent>
						</Card>

						{/* Upload QR Option */}
						<Card
							className={`cursor-pointer border-2 transition-colors ${
								isDragOver
									? "border-[#4CAF50] bg-[#4CAF50]/5"
									: "border-gray-200 hover:border-[#4CAF50]"
							}`}
							onDragOver={handleDragOver}
							onDragLeave={handleDragLeave}
							onDrop={handleDrop}
						>
							<CardContent className="space-y-4 p-6 text-center">
								<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#243B55]/10">
									<Upload className="h-8 w-8 text-[#243B55]" />
								</div>
								<div>
									<h3 className="mb-2 font-semibold text-[#243B55] text-lg">
										Unggah Kode QR
									</h3>
									<p className="text-gray-600 text-sm">
										Seret & lepas atau klik untuk mengunggah gambar kode QR
									</p>
								</div>
								<div className="space-y-3">
									<div
										className={`rounded-lg border-2 border-dashed p-6 transition-colors ${
											isDragOver
												? "border-[#4CAF50] bg-[#4CAF50]/5"
												: "border-gray-300"
										}`}
									>
										<Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
										<p className="text-gray-500 text-sm">
											{isDragOver
												? "Lepaskan file di sini"
												: "Seret file ke sini"}
										</p>
									</div>
									<input
										type="file"
										accept="image/*"
										onChange={handleFileUpload}
										className="hidden"
										id="qr-upload"
									/>
									<label htmlFor="qr-upload">
										<Button
											variant="outline"
											className="w-full border-[#243B55] bg-transparent text-[#243B55] hover:bg-[#243B55] hover:text-white"
											asChild
										>
											<span>Pilih File</span>
										</Button>
									</label>
								</div>
							</CardContent>
						</Card>
					</div>
				)}

				{currentState === "payment-confirmation" && (
					<div className="space-y-6">
						{/* Success Indicator */}
						<div className="text-center">
							<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]/10">
								<CheckCircle className="h-8 w-8 text-[#4CAF50]" />
							</div>
							<h2 className="mb-2 font-bold text-2xl text-[#243B55]">
								Konfirmasi Detail Pembayaran
							</h2>
							<p className="text-gray-600">
								Periksa detail pembayaran sebelum melanjutkan
							</p>
						</div>

						{/* Payment Details Card */}
						<Card className="border-2 border-[#4CAF50]/20 bg-white">
							<CardHeader className="pb-4">
								<CardTitle className="text-center text-[#243B55]">
									Detail Pembayaran
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-6">
								{/* Amount */}
								<div className="border-gray-100 border-b pb-4 text-center">
									<p className="mb-1 text-gray-600 text-sm">
										Jumlah Pembayaran
									</p>
									<p className="mb-2 font-bold text-4xl text-[#243B55]">
										{formatIDR(mockPaymentData.amount)}
									</p>
									<p className="text-gray-500 text-sm">
										(Setara dengan {mockPaymentData.amountUSDT} USDT)
									</p>
								</div>

								{/* Payment Details */}
								<div className="space-y-4">
									<div className="flex items-start justify-between">
										<span className="font-medium text-gray-600 text-sm">
											Kepada:
										</span>
										<span className="text-right font-semibold text-[#243B55] text-sm">
											{mockPaymentData.merchantName}
										</span>
									</div>

									<div className="flex items-start justify-between">
										<span className="font-medium text-gray-600 text-sm">
											Untuk:
										</span>
										<span className="text-right font-semibold text-[#243B55] text-sm">
											{mockPaymentData.description}
										</span>
									</div>

									<div className="flex items-start justify-between">
										<span className="font-medium text-gray-600 text-sm">
											Jaringan:
										</span>
										<Badge
											variant="outline"
											className="border-[#4CAF50] bg-[#4CAF50]/10 text-[#4CAF50]"
										>
											{mockPaymentData.network}
										</Badge>
									</div>

									<div className="space-y-2 rounded-lg bg-gray-50 p-4">
										<div className="flex items-center justify-between">
											<span className="text-gray-500 text-xs">
												Alamat Penerima:
											</span>
											<span className="font-mono text-gray-700 text-xs">
												{shortenAddress(mockPaymentData.recipientAddress)}
											</span>
										</div>
										<div className="flex items-center justify-between">
											<span className="text-gray-500 text-xs">Token:</span>
											<span className="font-semibold text-gray-700 text-xs">
												{mockPaymentData.token}
											</span>
										</div>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Proceed Button */}
						<Button
							onClick={handleProceedToPayment}
							className="h-14 w-full bg-[#4CAF50] font-semibold text-lg text-white hover:bg-[#45a049]"
						>
							<ExternalLink className="mr-2 h-5 w-5" />
							Lanjutkan ke Pembayaran
						</Button>

						{/* Important Information */}
						<Card className="border-blue-200 bg-blue-50">
							<CardContent className="p-4">
								<div className="space-y-2 text-blue-800 text-sm">
									<p className="font-semibold">Informasi Penting:</p>
									<ul className="space-y-1 text-xs">
										<li>
											• Mohon pastikan detail di atas benar sebelum melanjutkan
										</li>
										<li>• Vel hanya memfasilitasi transaksi</li>
										<li>• Wallet Anda akan meminta persetujuan akhir</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</div>
				)}

				{/* Footer */}
				<div className="mt-8 border-gray-200 border-t pt-6 text-center">
					<p className="text-gray-500 text-xs">
						Didukung oleh{" "}
						<span className="font-semibold text-[#243B55]">Vel</span>
					</p>
				</div>
			</main>
		</div>
	);
}
