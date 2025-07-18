import { useConnectModal } from "@xellar/kit";
import { useAccount } from "wagmi";

export function useRequireWallet() {
	const { isConnecting, address } = useAccount();
	const { open } = useConnectModal();

	return {
		isConnecting,
		address,
		requiresWallet: !isConnecting,
		openWalletModal: open,
	};
} 