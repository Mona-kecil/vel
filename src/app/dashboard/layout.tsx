import type { Metadata } from "next";
import { AppSidebar } from "~/components/app-sidebar";
import { SiteHeader } from "~/components/site-header";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

export const metadata: Metadata = {
	title: "Vel - Dashboard",
	description: "Merchant Dashboard",
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="[--header-height:calc(--spacing(14))]">
			<SidebarProvider className="flex flex-col">
				<SiteHeader />
				<div className="flex flex-1">
					<AppSidebar />
					<SidebarInset>{children}</SidebarInset>
				</div>
			</SidebarProvider>
		</div>
	);
}
