"use client";

import { History, Home, LayoutDashboard, QrCode } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";

export function Navigation() {
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "Beranda", icon: Home },
		{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
		{ href: "/pay", label: "Bayar", icon: QrCode },
		{ href: "/transactions", label: "Transaksi", icon: History },
	];

	return (
		<nav className="fixed right-0 bottom-0 left-0 z-50 border-gray-200 border-t bg-white md:hidden">
			<div className="mx-auto max-w-md px-4 py-2">
				<div className="flex justify-around">
					{navItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link key={item.href} href={item.href}>
								<Button
									variant="ghost"
									size="sm"
									className={`flex h-auto flex-col items-center gap-1 px-3 py-2 ${
										isActive
											? "bg-[#4CAF50]/10 text-[#4CAF50]"
											: "text-gray-600 hover:text-[#4CAF50]"
									}`}
								>
									<item.icon className="h-5 w-5" />
									<span className="font-medium text-xs">{item.label}</span>
								</Button>
							</Link>
						);
					})}
				</div>
			</div>
		</nav>
	);
}
