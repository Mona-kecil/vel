"use client";

import {
	Briefcase,
	LayoutDashboard,
	LifeBuoy,
	MessageCircle,
	UserCircle,
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
					url: "/dashboard",
				},
				{
					title: "Transaction",
					url: "/transactions",
				},
				{
					title: "Payments",
					url: "/payments",
				},
				{
					title: "Withdrawals",
					url: "/withdrawals",
				},
			],
		},
		{
			title: "Business",
			icon: Briefcase, // Business/briefcase icon
			items: [
				{
					title: "Customers",
					url: "/customers",
					disabled: true,
				},
				{
					title: "Analytics",
					url: "/analytics",
					disabled: true,
				},
			],
		},
		{
			title: "Account",
			icon: UserCircle, // Account/user circle icon
			items: [
				{
					title: "Settings",
					url: "/account/settings",
					disabled: true,
				},
				{
					title: "Security",
					url: "/account/security",
					disabled: true,
				},
				{
					title: "Connected Wallets",
					url: "/account/wallets",
					disabled: true,
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
						<div className="grid flex-1">
							<span className="truncate text-center font-bold font-sans text-2xl tracking-widest">
								Vel
							</span>
						</div>
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
