"use client";

import { Bell, SidebarIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { SearchForm } from "~/components/search-form";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useSidebar } from "~/components/ui/sidebar";

export function SiteHeader() {
	const { toggleSidebar } = useSidebar();
	const pathname = usePathname();

	const breadcrumbItems = pathname
		.split("/")
		.filter(Boolean)
		.map((item) => ({
			label: item,
			href: `/${item}`,
		}));

	return (
		<header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
			<div className="flex h-(--header-height) w-full items-center gap-2 px-4">
				<Button
					className="h-8 w-8"
					variant="ghost"
					size="icon"
					onClick={toggleSidebar}
				>
					<SidebarIcon />
				</Button>
				<Separator orientation="vertical" className="mr-2 h-4" />

				<Breadcrumb className="hidden sm:block">
					<BreadcrumbList>
						{breadcrumbItems.map((item, index) => (
							<BreadcrumbItem key={item.href} className="capitalize">
								{index === breadcrumbItems.length - 1 ? (
									<BreadcrumbPage>{item.label}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
								)}
								{index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
							</BreadcrumbItem>
						))}
					</BreadcrumbList>
				</Breadcrumb>
				<div className="ml-auto flex items-center gap-2">
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
					<SearchForm className="w-full sm:ml-auto sm:w-auto" />
				</div>
			</div>
		</header>
	);
}
