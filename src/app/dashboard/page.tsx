"use client";

import { useXellarAccount } from "@xellar/kit";
import {
	Activity,
	ArrowRight,
	Bell,
	CreditCard,
	DollarSign,
	HelpCircle,
	History,
	Home,
	LogOut,
	MoreHorizontal,
	Plus,
	QrCode,
	Settings,
	TrendingUp,
	Users,
	Wallet,
} from "lucide-react";
import { useState } from "react";
import React from "react";
import { Navigation } from "~/components/navigation";
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
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from "~/components/ui/sidebar";

type Screen =
	| "dashboard"
	| "receive"
	| "withdraw"
	| "transactions"
	| "settings";

const menuItems = [
	{ title: "Dashboard", icon: Home, key: "dashboard" as Screen },
	{ title: "Terima Pembayaran", icon: QrCode, key: "receive" as Screen },
	{ title: "Tarik Dana", icon: CreditCard, key: "withdraw" as Screen },
	{ title: "Riwayat Transaksi", icon: History, key: "transactions" as Screen },
	{ title: "Pengaturan", icon: Settings, key: "settings" as Screen },
];

function AppSidebar() {
	const { setCurrentScreen, currentScreen } = useSidebarContext();

	return (
		<Sidebar variant="inset" className="border-gray-200 border-r">
			<SidebarHeader className="border-gray-200 border-b p-4">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4CAF50]">
						<Wallet className="h-6 w-6 text-white" />
					</div>
					<div>
						<h2 className="font-bold text-[#243B55] text-lg">Vel</h2>
						<Badge
							variant="outline"
							className="border-[#4CAF50] bg-[#4CAF50]/10 text-[#4CAF50] text-xs"
						>
							<div className="mr-1 h-1.5 w-1.5 rounded-full bg-[#4CAF50]" />
							Lisk Sepolia
						</Badge>
					</div>
				</div>
			</SidebarHeader>

			<SidebarContent className="p-2">
				<SidebarGroup>
					<SidebarGroupLabel className="font-semibold text-[#243B55]">
						Menu Utama
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{menuItems.map((item) => (
								<SidebarMenuItem key={item.key}>
									<SidebarMenuButton
										onClick={() => setCurrentScreen(item.key)}
										isActive={currentScreen === item.key}
										className="h-11 w-full justify-start gap-3 text-gray-700 hover:bg-[#4CAF50]/10 hover:text-[#4CAF50] data-[active=true]:bg-[#4CAF50] data-[active=true]:text-white"
									>
										<item.icon className="h-5 w-5" />
										<span className="font-medium">{item.title}</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>

				<SidebarGroup className="mt-6">
					<SidebarGroupLabel className="font-semibold text-[#243B55]">
						Bantuan
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<SidebarMenuItem>
								<SidebarMenuButton className="h-11 w-full justify-start gap-3 text-gray-700 hover:bg-gray-100">
									<HelpCircle className="h-5 w-5" />
									<span className="font-medium">Pusat Bantuan</span>
								</SidebarMenuButton>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			<SidebarFooter className="border-gray-200 border-t p-4">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							className="h-12 w-full justify-start gap-3 hover:bg-gray-100"
						>
							<Avatar className="h-8 w-8">
								<AvatarFallback className="bg-[#4CAF50] text-sm text-white">
									TS
								</AvatarFallback>
							</Avatar>
							<div className="text-left">
								<p className="font-medium text-gray-900 text-sm">Toko Saya</p>
								<p className="text-gray-500 text-xs">toko@example.com</p>
							</div>
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
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

const SidebarContext = React.createContext<{
	currentScreen: Screen;
	setCurrentScreen: (screen: Screen) => void;
}>({
	currentScreen: "dashboard",
	setCurrentScreen: () => {},
});

function useSidebarContext() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error(
			"useSidebarContext must be used within SidebarContext.Provider",
		);
	}
	return context;
}

export default function DashboardPage() {
	const [currentScreen, setCurrentScreen] = useState<Screen>("dashboard");
	const xellarAccount = useXellarAccount();

	console.log(`Xellar account: ${JSON.stringify(xellarAccount, null, 2)}`);

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

	// Check if mobile
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	if (isMobile) {
		// Mobile version
		return (
			<div className="min-h-screen bg-gray-50">
				{/* Mobile Header */}
				<div className="border-gray-200 border-b bg-white p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#4CAF50]">
								<Wallet className="h-5 w-5 text-white" />
							</div>
							<span className="font-bold text-[#243B55] text-lg">Vel</span>
						</div>
						<div className="flex items-center gap-2">
							<Button variant="ghost" size="icon">
								<Bell className="h-5 w-5 text-gray-600" />
							</Button>
							<Avatar className="h-8 w-8">
								<AvatarFallback className="bg-[#4CAF50] text-white text-xs">
									TS
								</AvatarFallback>
							</Avatar>
						</div>
					</div>
				</div>

				{/* Mobile Content */}
				<div className="space-y-6 p-4">
					{/* Balance Overview */}
					<div className="grid grid-cols-2 gap-4">
						<Card className="bg-gradient-to-br from-[#243B55] to-[#141E30] text-white">
							<CardContent className="p-4">
								<div className="mb-2 flex items-center justify-between">
									<DollarSign className="h-5 w-5 text-[#4CAF50]" />
									<span className="text-white/60 text-xs">Total</span>
								</div>
								<p className="font-bold text-xl">{formatIDR(1234567)}</p>
								<p className="text-white/60 text-xs">Saldo Saat Ini</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-4">
								<div className="mb-2 flex items-center justify-between">
									<TrendingUp className="h-5 w-5 text-[#4CAF50]" />
									<span className="text-gray-500 text-xs">Bulan Ini</span>
								</div>
								<p className="font-bold text-[#4CAF50] text-xl">
									{formatIDR(450000)}
								</p>
								<p className="text-gray-500 text-xs">+12.5%</p>
							</CardContent>
						</Card>
					</div>

					{/* Quick Actions */}
					<div className="grid grid-cols-2 gap-3">
						<Button className="h-12 bg-[#4CAF50] text-white hover:bg-[#45a049]">
							<QrCode className="mr-2 h-4 w-4" />
							Terima
						</Button>
						<Button
							variant="outline"
							className="h-12 border-[#243B55] bg-transparent text-[#243B55]"
						>
							<CreditCard className="mr-2 h-4 w-4" />
							Tarik
						</Button>
					</div>

					{/* Recent Activity */}
					<Card>
						<CardHeader className="pb-3">
							<div className="flex items-center justify-between">
								<CardTitle className="text-lg">Aktivitas Terbaru</CardTitle>
								<Button variant="ghost" size="sm">
									<MoreHorizontal className="h-4 w-4" />
								</Button>
							</div>
						</CardHeader>
						<CardContent className="space-y-3">
							{transactions.slice(0, 4).map((tx, index) => (
								<div
									key={index}
									className="flex items-center justify-between py-2"
								>
									<div className="flex items-center gap-3">
										<div
											className={`flex h-8 w-8 items-center justify-center rounded-lg ${
												tx.type === "income" ? "bg-[#4CAF50]/10" : "bg-red-50"
											}`}
										>
											{tx.type === "income" ? (
												<ArrowRight className="h-4 w-4 rotate-[-45deg] text-[#4CAF50]" />
											) : (
												<ArrowRight className="h-4 w-4 rotate-[135deg] text-red-500" />
											)}
										</div>
										<div>
											<p className="font-medium text-sm">{tx.description}</p>
											<p className="text-gray-500 text-xs">{tx.date}</p>
										</div>
									</div>
									<div className="text-right">
										<p
											className={`font-semibold text-sm ${tx.type === "income" ? "text-[#4CAF50]" : "text-red-500"}`}
										>
											{tx.type === "income" ? "+" : ""}
											{formatIDR(tx.amount)}
										</p>
									</div>
								</div>
							))}
						</CardContent>
					</Card>
				</div>
				<Navigation />
			</div>
		);
	}

	// Desktop version with Stripe-inspired design
	return (
		<SidebarContext.Provider value={{ currentScreen, setCurrentScreen }}>
			<SidebarProvider>
				<div className="flex min-h-screen bg-gray-50">
					<AppSidebar />
					<SidebarInset className="flex-1">
						{/* Stripe-style Header */}
						<header className="flex h-16 items-center justify-between border-gray-200 border-b bg-white px-6">
							<div className="flex items-center gap-4">
								<SidebarTrigger className="text-gray-600 hover:text-gray-900" />
								<div>
									<h1 className="font-semibold text-[#243B55] text-xl">
										Dashboard
									</h1>
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

						{/* Main Content - Stripe Style */}
						<main className="flex-1 p-6">
							<div className="space-y-6">
								{/* Key Metrics - Stripe Style */}
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
									<Card className="border-l-4 border-l-[#4CAF50]">
										<CardContent className="p-6">
											<div className="flex items-center justify-between">
												<div>
													<p className="font-medium text-gray-600 text-sm">
														Total Saldo
													</p>
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
												<span className="font-medium text-[#4CAF50] text-sm">
													+12.5%
												</span>
												<span className="ml-2 text-gray-500 text-sm">
													dari bulan lalu
												</span>
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
												<span className="font-medium text-[#4CAF50] text-sm">
													+8.2%
												</span>
												<span className="ml-2 text-gray-500 text-sm">
													dari bulan lalu
												</span>
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
													<p className="font-bold text-3xl text-[#243B55]">
														24
													</p>
												</div>
												<div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
													<Activity className="h-6 w-6 text-purple-600" />
												</div>
											</div>
											<div className="mt-4 flex items-center">
												<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
												<span className="font-medium text-[#4CAF50] text-sm">
													+15.3%
												</span>
												<span className="ml-2 text-gray-500 text-sm">
													dari bulan lalu
												</span>
											</div>
										</CardContent>
									</Card>

									<Card>
										<CardContent className="p-6">
											<div className="flex items-center justify-between">
												<div>
													<p className="font-medium text-gray-600 text-sm">
														Pelanggan Aktif
													</p>
													<p className="font-bold text-3xl text-[#243B55]">
														12
													</p>
												</div>
												<div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
													<Users className="h-6 w-6 text-orange-600" />
												</div>
											</div>
											<div className="mt-4 flex items-center">
												<TrendingUp className="mr-1 h-4 w-4 text-[#4CAF50]" />
												<span className="font-medium text-[#4CAF50] text-sm">
													+5.1%
												</span>
												<span className="ml-2 text-gray-500 text-sm">
													dari bulan lalu
												</span>
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Quick Actions */}
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
													<h3 className="font-semibold text-[#243B55]">
														Tarik Dana
													</h3>
													<p className="text-gray-600 text-sm">
														Cairkan saldo Anda ke rekening bank
													</p>
												</div>
												<ArrowRight className="h-5 w-5 text-gray-400" />
											</div>
										</CardContent>
									</Card>
								</div>

								{/* Recent Transactions - Stripe Style */}
								<Card>
									<CardHeader className="flex flex-row items-center justify-between">
										<CardTitle className="text-[#243B55] text-xl">
											Transaksi Terbaru
										</CardTitle>
										<Button
											variant="ghost"
											className="text-[#4CAF50] hover:text-[#45a049]"
										>
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
																tx.type === "income"
																	? "bg-[#4CAF50]/10"
																	: "bg-red-50"
															}`}
														>
															{tx.type === "income" ? (
																<ArrowRight className="h-5 w-5 rotate-[-45deg] text-[#4CAF50]" />
															) : (
																<ArrowRight className="h-5 w-5 rotate-[135deg] text-red-500" />
															)}
														</div>
														<div>
															<p className="font-medium text-gray-900">
																{tx.description}
															</p>
															<p className="text-gray-500 text-sm">{tx.date}</p>
														</div>
													</div>
													<div className="text-right">
														<p
															className={`font-semibold ${tx.type === "income" ? "text-[#4CAF50]" : "text-red-500"}`}
														>
															{tx.type === "income" ? "+" : ""}
															{formatIDR(tx.amount)}
														</p>
														<Badge
															variant={
																tx.status === "Selesai"
																	? "default"
																	: "secondary"
															}
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
							</div>
						</main>
					</SidebarInset>
				</div>
			</SidebarProvider>
		</SidebarContext.Provider>
	);
}
