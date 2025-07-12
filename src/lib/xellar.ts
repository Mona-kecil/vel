import { XellarSDK } from "@xellar/sdk";
import { env } from "~/env";

const xellar = new XellarSDK({
	clientSecret: env.XELLAR_CLIENT_SECRET,
	appId: env.NEXT_PUBLIC_XELLAR_PROJECT_ID,
	env: "sandbox",
});

export default xellar;
