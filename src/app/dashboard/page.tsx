"use client";

import {
	Activity,
	ArrowRight,
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
import { ProtectedLayout } from "~/components/layouts/ProtectedLayout";
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

const currencyFormatter = new Intl.NumberFormat("id-ID", {
	style: "currency",
	currency: "IDR",
	currencyDisplay: "code",
	maximumFractionDigits: 0,
});

const formatIDR = (amount: number) => {
	return currencyFormatter.format(amount);
};

const percentageFormatter = new Intl.NumberFormat("ID-id", {
	style: "percent",
	maximumFractionDigits: 1,
	signDisplay: "always",
});

const formatPercentage = (value: number) => {
	return percentageFormatter.format(value);
}

type Transaction = {
	date: string;
	description: string;
	amount: number;
	status: string;
	type: "income" | "withdrawal";
};

export default function DashboardPage() {
	const metrics = {
		totalBalance: 2000000,
		totalBalanceLastMonth: 1650000,
		totalRevenue: 750000,
		totalRevenueLastMonth: 800000,
		totalTransactions: 30,
		totalTransactionsLastMonth: 33,
		totalCustomers: 25,
		totalCustomersLastMonth: 27,
	};

	const transactions: Transaction[] = [
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

	/** Convex useQuery call
	 * const metrics = useQuery(api.dashboard.getMetrics(), {}); probably we need to enter userID somewhere.
	 * const transactions = useQuery(api.transactions.getTransactions(), {});
	 */

	return (
		<ProtectedLayout>
			<div className="space-y-6">
				<div className="gap-6 mb-6">
					<KeyMetrics metrics={metrics} />
				</div>
				<RecentTransactionsCard transactions={transactions} />
			</div>
		</ProtectedLayout>
	);
}

function KeyMetrics({ metrics }: { metrics: {
	totalBalance: number;
	totalRevenue: number;
	totalTransactions: number;
	totalCustomers: number;
	totalBalanceLastMonth: number;
	totalRevenueLastMonth: number;
	totalTransactionsLastMonth: number;
	totalCustomersLastMonth: number;
} }) {
	return (
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
			{/* Current Balance Card - Featured as primary metric */}
			<Card 
				animation="hover"
				className="group relative overflow-hidden border-0 bg-primary text-primary-foreground shadow-lg sm:col-span-2 xl:col-span-1"
			>
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-primary-foreground/80 text-sm font-medium">Total Saldo</p>
							<p className="text-3xl font-bold">
								{formatIDR(metrics.totalBalance)}
							</p>
						</div>
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm">
							<DollarSign className="h-7 w-7 text-primary-foreground" />
						</div>
					</div>
					{/* TODO: Add percentage change */}
					<div className="mt-4 flex items-center">
						<TrendingUp className="mr-2 h-4 w-4 text-primary-foreground" />
						<span className="text-sm font-medium text-primary-foreground">
							{formatPercentage((metrics.totalBalance - metrics.totalBalanceLastMonth) / metrics.totalBalanceLastMonth)}
						</span>
						<span className="ml-2 text-primary-foreground/70 text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			{/* Monthly Revenue Card */}
			<Card animation="hover" className="group border-0 shadow-md">
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-muted-foreground text-sm font-medium">
								Pendapatan Bulan Ini
							</p>
							<p className="text-3xl font-bold text-foreground">
								{formatIDR(metrics.totalRevenue)}
							</p>
						</div>
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-2/10 transition-all duration-300 group-hover:bg-chart-2/20">
							<TrendingUp className="h-7 w-7 text-chart-2" />
						</div>
					</div>
					{/* TODO: Add percentage change */}
					<div className="mt-4 flex items-center">
						<div className="flex items-center rounded-full bg-chart-1/10 px-2 py-1">
							<TrendingUp className="mr-1 h-3 w-3 text-chart-1" />
							<span className="text-chart-1 text-xs font-medium">
								{formatPercentage((metrics.totalRevenue - metrics.totalRevenueLastMonth) / metrics.totalRevenueLastMonth)}
							</span>
						</div>
						<span className="ml-2 text-muted-foreground text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			{/* Transaction Count Card */}
			<Card animation="hover" className="group border-0 shadow-md">
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-muted-foreground text-sm font-medium">
								Total Transaksi
							</p>
							<p className="text-3xl font-bold text-foreground">
								{metrics.totalTransactions}
							</p>
						</div>
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-4/10 transition-all duration-300 group-hover:bg-chart-4/20">
							<Activity className="h-7 w-7 text-chart-4" />
						</div>
					</div>
					{/* TODO: Add percentage change */}
					<div className="mt-4 flex items-center">
						<div className="flex items-center rounded-full bg-chart-1/10 px-2 py-1">
							<TrendingUp className="mr-1 h-3 w-3 text-chart-1" />
							<span className="text-chart-1 text-xs font-medium">
								{formatPercentage((metrics.totalTransactions - metrics.totalTransactionsLastMonth) / metrics.totalTransactionsLastMonth)}
							</span>
						</div>
						<span className="ml-2 text-muted-foreground text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>

			{/* Active Customers Card */}
			<Card animation="hover" className="group border-0 shadow-md">
				<CardContent className="p-6">
					<div className="flex items-center justify-between">
						<div className="space-y-1">
							<p className="text-muted-foreground text-sm font-medium">
								Pelanggan Aktif
							</p>
							<p className="text-3xl font-bold text-foreground">
								{metrics.totalCustomers}
							</p>
						</div>
						<div className="flex h-14 w-14 items-center justify-center rounded-full bg-chart-5/10 transition-all duration-300 group-hover:bg-chart-5/20">
							<Users className="h-7 w-7 text-chart-5" />
						</div>
					</div>
					{/* TODO: Add percentage change */}
					<div className="mt-4 flex items-center">
						<div className="flex items-center rounded-full bg-chart-1/10 px-2 py-1">
							<TrendingUp className="mr-1 h-3 w-3 text-chart-1" />
							<span className="text-chart-1 text-xs font-medium">
								{formatPercentage((metrics.totalCustomers - metrics.totalCustomersLastMonth) / metrics.totalCustomersLastMonth)}
							</span>
						</div>
						<span className="ml-2 text-muted-foreground text-sm">dari bulan lalu</span>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}

// This feature is not yet supported since rampable doesn't support off-ramp from Lisk chain
// function QuickActions() {
// 	return (
// 		<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
// 			<Card className="cursor-pointer transition-shadow hover:shadow-md">
// 				<CardContent className="p-6">
// 					<div className="flex items-center gap-4">
// 						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4CAF50]/10">
// 							<QrCode className="h-6 w-6 text-[#4CAF50]" />
// 						</div>
// 						<div className="flex-1">
// 							<h3 className="font-semibold text-[#243B55]">
// 								Terima Pembayaran
// 							</h3>
// 							<p className="text-gray-600 text-sm">
// 								Buat link atau QR code untuk menerima pembayaran
// 							</p>
// 						</div>
// 						<ArrowRight className="h-5 w-5 text-gray-400" />
// 					</div>
// 				</CardContent>
// 			</Card>

// 			<Card className="cursor-pointer transition-shadow hover:shadow-md">
// 				<CardContent className="p-6">
// 					<div className="flex items-center gap-4">
// 						<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#243B55]/10">
// 							<CreditCard className="h-6 w-6 text-[#243B55]" />
// 						</div>
// 						<div className="flex-1">
// 							<h3 className="font-semibold text-[#243B55]">Tarik Dana</h3>
// 							<p className="text-gray-600 text-sm">
// 								Cairkan saldo Anda ke rekening bank
// 							</p>
// 						</div>
// 						<ArrowRight className="h-5 w-5 text-gray-400" />
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	);
// }

function RecentTransactionsCard({ transactions }: { transactions: Transaction[] }) {
	return (
		<Card>
			<CardHeader className="flex flex-row items-center justify-between">
				<CardTitle className="text-foreground text-xl">
					Transaksi Terbaru
				</CardTitle>
				<Button variant="ghost" className="text-chart-1 hover:text-chart-1/80">
					Lihat Semua
					<ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</CardHeader>
			<CardContent>
				<div className="space-y-0">
					{transactions.map((tx) => (
						<div
							key={tx.date}
							className="-mx-6 flex items-center justify-between border-border border-b px-6 py-4 last:border-0 hover:bg-muted/50"
						>
							<div className="flex items-center gap-4">
								<div
									className={`flex h-10 w-10 items-center justify-center rounded-lg ${
										tx.type === "income" ? "bg-chart-1/10" : "bg-destructive/10"
									}`}
								>
									{tx.type === "income" ? (
										<ArrowRight className="h-5 w-5 rotate-[-45deg] text-chart-1" />
									) : (
										<ArrowRight className="h-5 w-5 rotate-[135deg] text-destructive" />
									)}
								</div>
								<div>
									<p className="font-medium text-foreground">{tx.description}</p>
									<p className="text-muted-foreground text-sm">{tx.date}</p>
								</div>
							</div>
							<div className="text-right">
								<p
									className={`font-semibold ${
										tx.type === "income" ? "text-chart-1" : "text-destructive"
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
