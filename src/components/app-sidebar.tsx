"use client";

import {
	Banknote,
	BarChart2,
	Briefcase,
	CreditCard,
	LayoutDashboard,
	LifeBuoy,
	MessageCircle,
	Repeat,
	Settings,
	Shield,
	UserCircle,
	Users,
	Wallet,
} from "lucide-react";
import type * as React from "react";

import { NavMain } from "~/components/nav-main";
import { NavSecondary } from "~/components/nav-secondary";
import { NavUser } from "~/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "~/components/ui/sidebar";

const data = {
	user: {
		name: "shadcn",
		email: "m@example.com",
		avatar: "/avatars/shadcn.jpg",
	},
	navMain: [
		{
			title: "Main",
			icon: LayoutDashboard, // Dashboard icon for main section
			isActive: true,
			items: [
				{
					title: "Dashboard",
					url: "#",
				},
				{
					title: "Transaction",
					url: "#",
				},
				{
					title: "Payments",
					url: "#",
				},
				{
					title: "Withdrawals",
					url: "#",
				},
			],
		},
		{
			title: "Business",
			icon: Briefcase, // Business/briefcase icon
			items: [
				{
					title: "Customers",
					url: "#",
				},
				{
					title: "Analytics",
					url: "#",
				},
			],
		},
		{
			title: "Account",
			icon: UserCircle, // Account/user circle icon
			items: [
				{
					title: "Settings",
					url: "#",
				},
				{
					title: "Security",
					url: "#",
				},
				{
					title: "Connected Wallets",
					url: "#",
				},
			],
		},
	],
	navSecondary: [
		{
			title: "Support",
			url: "#",
			icon: LifeBuoy, // Support/lifebuoy icon
		},
		{
			title: "Feedback",
			url: "#",
			icon: MessageCircle, // Feedback/message icon
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
			{...props}
		>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<a href="#">
								<div className="grid flex-1">
									<span className="truncate text-center font-bold font-sans text-2xl tracking-widest">
										Vel
									</span>
								</div>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
