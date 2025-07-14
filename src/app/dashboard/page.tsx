"use client";

import {
	Activity,
	ArrowRight,
	Bell,
	CreditCard,
	DollarSign,
	HelpCircle,
	LogOut,
	Plus,
	QrCode,
	Settings,
	TrendingUp,
	Users,
} from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback } from "~/components/ui/avatar";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

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

export default function DashboardPage() {
	const transactions = [
		{
			date: "10 Juli 2025",
			description: "Pembayaran Pesanan #1234",
			amount: 50000,
			status: "Selesai",
			type: "income",
		},
		{
			date: "9 Juli 2025",
			description: "Penarikan ke Bank",
			amount: -200000,
			status: "Selesai",
			type: "withdrawal",
		},
		{
			date: "8 Juli 2025",
			description: "Pembayaran Layanan Digital",
			amount: 125000,
			status: "Selesai",
			type: "income",
		},
		{
			date: "7 Juli 2025",
			description: "Pembayaran Pesanan #1230",
			amount: 75000,
			status: "Tertunda",
			type: "income",
		},
		{
			date: "6 Juli 2025",
			description: "Pembayaran Konsultasi",
			amount: 300000,
			status: "Selesai",
			type: "income",
		},
		{
			date: "5 Juli 2025",
			description: "Penarikan ke Bank",
			amount: -150000,
			status: "Selesai",
			type: "withdrawal",
		},
	];

	return (
		<div>
			<div className="flex min-h-screen bg-gray-50">
				<main className="flex-1 p-6">
					<Header />

					<div className="space-y-6">
						<KeyMetrics />
					</div>
					<RecentTransactions transactions={transactions} />
				</main>
			</div>
		</div>
	);
}

function Header() {
	return (
		<header className="flex h-16 items-center justify-between border-gray-200 border-b bg-white px-6">
			<div className="flex items-center gap-4">
				<div>
					<h1 className="font-semibold text-[#243B55] text-xl">Dashboard</h1>
					<p className="text-gray-500 text-sm">
						Selamat datang kembali, Toko Saya
					</p>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<Button size="sm" className="bg-[#4CAF50] hover:bg-[#45a049]">
					<Plus className="mr-2 h-4 w-4" />
					Buat Pembayaran
				</Button>
				<Button
					variant="ghost"
					size="icon"
					className="text-gray-600 hover:text-gray-900"
				>
					<Bell className="h-5 w-5" />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="flex items-center gap-2">
							<Avatar className="h-8 w-8">
								<AvatarFallback className="bg-[#4CAF50] text-sm text-white">
									TS
								</AvatarFallback>
							</Avatar>
							<span className="font-medium">Toko Saya</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56">
						<DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<Settings className="mr-2 h-4 w-4" />
							Pengaturan
						</DropdownMenuItem>
						<DropdownMenuItem>
							<HelpCircle className="mr-2 h-4 w-4" />
							Bantuan
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem className="text-red-600">
							<LogOut className="mr-2 h-4 w-4" />
							Keluar
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}

function KeyMetrics() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			<Card className="border-l-4 border-l-[#4CAF50]">
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium text-gray-600 text-sm">Total Saldo</p>
							<p className="font-bold text-3xl text-[#243B55]">
								{formatIDR(1234567)}
							</p>
						</div>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4CAF50]/10">
							<DollarSign className="h-6 w-6 text-[#4CAF50]" />
						</div>
					</div>
					<div className="mt-4 flex items-center">
						<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
						<span className="font-medium text-[#4CAF50] text-sm">+12.5%</span>
						<span className="ml-2 text-gray-500 text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium text-gray-600 text-sm">
								Pendapatan Bulan Ini
							</p>
							<p className="font-bold text-3xl text-[#243B55]">
								{formatIDR(450000)}
							</p>
						</div>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
							<TrendingUp className="h-6 w-6 text-blue-600" />
						</div>
					</div>
					<div className="mt-4 flex items-center">
						<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
						<span className="font-medium text-[#4CAF50] text-sm">+8.2%</span>
						<span className="ml-2 text-gray-500 text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium text-gray-600 text-sm">
								Total Transaksi
							</p>
							<p className="font-bold text-3xl text-[#243B55]">24</p>
						</div>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
							<Activity className="h-6 w-6 text-purple-600" />
						</div>
					</div>
					<div className="mt-4 flex items-center">
						<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
						<span className="font-medium text-[#4CAF50] text-sm">+15.3%</span>
						<span className="ml-2 text-gray-500 text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			<QuickActions />

			<Card>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-medium text-gray-600 text-sm">
								Pelanggan Aktif
							</p>
							<p className="font-bold text-3xl text-[#243B55]">12</p>
						</div>
						<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
							<Users className="h-6 w-6 text-orange-600" />
						</div>
					</div>
					<div className="mt-4 flex items-center">
						<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
						<span className="font-medium text-[#4CAF50] text-sm">+5.1%</span>
						<span className="ml-2 text-gray-500 text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function QuickActions() {
	return (
		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
			<Card className="cursor-pointer transition-shadow hover:shadow-md">
				<CardContent className="p-6">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4CAF50]/10">
							<QrCode className="h-6 w-6 text-[#4CAF50]" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold text-[#243B55]">
								Terima Pembayaran
							</h3>
							<p className="text-gray-600 text-sm">
								Buat link atau QR code untuk menerima pembayaran
							</p>
						</div>
						<ArrowRight className="h-5 w-5 text-gray-400" />
					</div>
				</CardContent>
			</Card>

			<Card className="cursor-pointer transition-shadow hover:shadow-md">
				<CardContent className="p-6">
					<div className="flex items-center gap-4">
						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#243B55]/10">
							<CreditCard className="h-6 w-6 text-[#243B55]" />
						</div>
						<div className="flex-1">
							<h3 className="font-semibold text-[#243B55]">Tarik Dana</h3>
							<p className="text-gray-600 text-sm">
								Cairkan saldo Anda ke rekening bank
							</p>
						</div>
						<ArrowRight className="h-5 w-5 text-gray-400" />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

function RecentTransactions({ transactions }: { transactions: any[] }) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-[#243B55] text-xl">
					Transaksi Terbaru
				</CardTitle>
				<Button variant="ghost" className="text-[#4CAF50] hover:text-[#45a049]">
					Lihat Semua
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-0">
					{transactions.slice(0, 6).map((tx, index) => (
						<div
							key={index}
							className="-mx-6 flex items-center justify-between border-gray-100 border-b px-6 py-4 last:border-0 hover:bg-gray-50"
						>
							<div className="flex items-center gap-4">
								<div
									className={`flex h-10 w-10 items-center justify-center rounded-lg ${
										tx.type === "income" ? "bg-[#4CAF50]/10" : "bg-red-50"
									}`}
								>
									{tx.type === "income" ? (
										<ArrowRight className="h-5 w-5 rotate-[-45deg] text-[#4CAF50]" />
									) : (
										<ArrowRight className="h-5 w-5 rotate-[135deg] text-red-500" />
									)}
								</div>
								<div>
									<p className="font-medium text-gray-900">{tx.description}</p>
									<p className="text-gray-500 text-sm">{tx.date}</p>
								</div>
							</div>
							<div className="text-right">
								<p
									className={`font-semibold ${
										tx.type === "income" ? "text-[#4CAF50]" : "text-red-500"
									}`}
								>
									{tx.type === "income" ? "+" : ""}
									{formatIDR(tx.amount)}
								</p>
								<Badge
									variant={tx.status === "Selesai" ? "default" : "secondary"}
									className="text-xs"
								>
									{tx.status}
								</Badge>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
