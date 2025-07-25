"use client";

import { ChevronRight, Lock, type LucideIcon } from "lucide-react";
import Link from "next/link";

import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "~/components/ui/collapsible";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "~/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function NavMain({
	items,
}: {
	items: {
		title: string;
		icon: LucideIcon;
		isActive?: boolean;
		items?: {
			title: string;
			url: string;
			disabled?: boolean;
		}[];
	}[];
}) {
	return (
		<SidebarGroup>
			<SidebarGroupLabel>Platform</SidebarGroupLabel>
			<SidebarMenu>
				{items.map((item) => (
					<Collapsible key={item.title} asChild defaultOpen={item.isActive}>
						<SidebarMenuItem>
							{item.items?.length ? (
								<CollapsibleTrigger asChild>
									<SidebarMenuButton tooltip={item.title}>
										<item.icon />
										<span>{item.title}</span>
										<ChevronRight className="ml-auto [[data-state=open]_&]:rotate-90" />
									</SidebarMenuButton>
								</CollapsibleTrigger>
							) : (
								<SidebarMenuButton asChild tooltip={item.title}>
									<item.icon />
									<span>{item.title}</span>
								</SidebarMenuButton>
							)}
							{item.items?.length ? (
								<CollapsibleContent>
									<SidebarMenuSub>
										{item.items?.map((subItem) => (
											<SidebarMenuSubItem key={subItem.title}>
												<SidebarMenuSubButton asChild>
													{subItem.disabled ? (
														<Tooltip>
															<TooltipTrigger>
																<span className="text-sm text-muted-foreground ml-1">{subItem.title}</span>
															</TooltipTrigger>
															<TooltipContent>
																<p>This feature is WIP</p>
															</TooltipContent>
														</Tooltip>
													) : (
														<Link href={subItem.url}>
															{subItem.title}
														</Link>
													)}
													
												</SidebarMenuSubButton>
											</SidebarMenuSubItem>
										))}
									</SidebarMenuSub>
								</CollapsibleContent>
							) : null}
						</SidebarMenuItem>
					</Collapsible>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
