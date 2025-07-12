"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, darkTheme, defaultConfig } from "@xellar/kit";
import type { ReactNode } from "react";
import { useMemo } from "react";
import { polygonAmoy } from "viem/chains";
import { type Config, WagmiProvider } from "wagmi";
import { env } from "~/env";

/**
 * Provides Web3, query management, and theming context to its child components.
 *
 * Wraps children with Wagmi, React Query, and XellarKit providers, configuring blockchain connectivity and UI theme for the application.
 *
 * @param children - The React nodes to render within the provider context
 */
export default function Web3Provider({ children }: { children: ReactNode }) {
	const config = useMemo(() => {
		const xellarAppId = env.NEXT_PUBLIC_XELLAR_PROJECT_ID;
		const walletConnectProjectId = env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID;

		return defaultConfig({
			appName: "Xellar",
			walletConnectProjectId,
			xellarAppId,
			xellarEnv: "sandbox",
			chains: [polygonAmoy],
			ssr: true,
		}) as Config;
	}, []);

	const queryClient = useMemo(() => new QueryClient(), []);

	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<XellarKitProvider theme={darkTheme}>{children}</XellarKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
