import type * as React from "react";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

// Animation presets for common card behaviors
const animationPresets = {
	none: {},
	hover: {
		whileHover: { 
			scale: 1.02, 
			boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
		},
		transition: { duration: 0.2, ease: "easeOut" }
	},
	scale: {
		whileHover: { scale: 1.05 },
		whileTap: { scale: 0.98 },
		transition: { duration: 0.2, ease: "easeOut" }
	},
	lift: {
		whileHover: { 
			y: -4,
			boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
		},
		transition: { duration: 0.3, ease: "easeOut" }
	},
	fade: {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.4, ease: "easeOut" }
	},
	slideUp: {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.5, ease: "easeOut" }
	}
} as const;

type AnimationPreset = keyof typeof animationPresets;

interface CardProps extends Omit<React.ComponentProps<"div">, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"> {
	/**
	 * Animation preset to apply to the card
	 * @default "none"
	 */
	animation?: AnimationPreset;
}

function Card({ 
	className, 
	animation = "none", 
	...props 
}: CardProps) {
	const shouldUseMotion = animation !== "none";
	const preset = animationPresets[animation];

	const baseClassName = cn(
		"flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm",
		className,
	);

	if (shouldUseMotion) {
		return (
			<motion.div
				data-slot="card"
				className={baseClassName}
				{...preset}
				{...props}
			/>
		);
	}

	return (
		<div
			data-slot="card"
			className={baseClassName}
			{...props}
		/>
	);
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				"@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
				className,
			)}
			{...props}
		/>
	);
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-title"
			className={cn("font-semibold leading-none", className)}
			{...props}
		/>
	);
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-description"
			className={cn("text-muted-foreground text-sm", className)}
			{...props}
		/>
	);
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				"col-start-2 row-span-2 row-start-1 self-start justify-self-end",
				className,
			)}
			{...props}
		/>
	);
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-content"
			className={cn("px-6", className)}
			{...props}
		/>
	);
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="card-footer"
			className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
			{...props}
		/>
	);
}

export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
	type AnimationPreset,
};
