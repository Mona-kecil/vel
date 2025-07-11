# Vel

## Seamless IDR Payments for the Human Layer of Web3

## 🚀 Overview

**Vel** is a foundational Web3 infrastructure designed to revolutionize cross-border payments, making it exceptionally seamless, fast, and compliant for Indonesian businesses (especially digital service exporters and recipients of remittances). Built on the **Lisk blockchain**, Vel acts as the crucial bridge between global cryptocurrency liquidity and the local Indonesian Rupiah (IDR) economy, empowering users to receive payments efficiently while abstracting away the complexities of blockchain.

Our mission is to contribute to Lisk's "Human Layer for Web3" narrative by providing intuitive, IDR-centric tools that enable widespread adoption of decentralized finance for real-world economic growth in Southeast Asia, starting with Indonesia.

## ✨ Problem Solved

Traditional cross-border payments for Indonesian freelancers, digital service exporters, and remittance recipients are plagued by:

- **High Fees:** Intermediary banks and currency conversions erode value.
- **Slow Transfers:** Payments can take days to settle.
- **Complexity:** Manual processes, opaque tracking, and managing different currencies.
- **Regulatory Hurdles:** Difficulty in compliantly accepting non-IDR payments for domestic use.

While Indonesian digital payments (e-wallets) are ubiquitous, access to efficient, global, and transparent financial services beyond basic local transfers remains limited for many "underbanked" MSMEs.

## 💡 Vel's Solution

Vel provides the **API-driven infrastructure** and an intuitive **Merchant Dashboard** to solve these challenges:

1.  **Seamless Inbound Payments:** International clients (crypto-savvy) can pay in various cryptocurrencies (e.g., USDT, ETH on Lisk).
2.  **Automated Crypto-to-IDRX Stablecoin Conversion:** Payments are automatically swapped into an IDR-pegged stablecoin (`IDRX_Token`) on the Lisk blockchain using the 1inch API, ensuring price stability for the recipient.
3.  **IDR-Centric Experience:** Merchants always see their balances and receive payments displayed in IDR, abstracting the underlying blockchain and stablecoin mechanics.
4.  **Compliant Local Payouts:** Merchants maintain full control and initiate fiat IDR withdrawals to their own licensed Indonesian crypto exchange accounts for final bank/e-wallet transfer, adhering to local regulations.
5.  **Fast & Low-Cost Settlement:** Leverages the Lisk blockchain as a hyper-efficient, low-fee, and fast finality settlement layer.

**Vel aims to be the "picks and shovels" payment rail that businesses and developers rely on to connect to the global Web3 economy.**

## 🌐 Features

### **For Merchants (via Vel Dashboard)**

- **IDR-Centric Dashboard:** Real-time balance and transaction history displayed solely in IDR.
- **Custom Payment Request Generation:** Generate unique QR codes / payment links for clients to pay.
- **Real-time Notifications:** Instant alerts upon successful payment receipt.
- **Streamlined Withdrawal:** Clear, user-guided process for transferring IDRX Stablecoin to licensed Indonesian exchanges for fiat cash-out.

### **For Developers & Businesses (via Vel API/SDK - Conceptual for Hackathon)**

- **Payment Request API:** Easily generate payment links and crypto addresses for incoming IDR-denominated payments.
- **Webhook System:** Receive real-time notifications about payment status directly to your application.
- **Balance & Transaction APIs:** Programmatically manage and view merchant accounts.
- **Automated Swaps:** Built-in integration with 1inch API to convert various incoming crypto assets to IDRX Stablecoin on Lisk.

## 🛠️ Technology Stack

- **Blockchain:** Lisk (Lisk Sepolia Testnet for Hackathon Demo)
- **Frontend:** Next.js
- **Backend:** Convex
- **DEX Aggregation:** 1inch API (for automated crypto-to-crypto swaps on Lisk)
- **Smart Contracts:** Custom Vel Router/Gateway Smart Contract (for advanced features/fee collection).
- **Wallet Integration:** `viem` for backend wallet interactions.

## 🚀 Getting Started (Hackathon Demo)

To run the Vel demo locally:

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/Mona-kecil/vel.git
    cd vel
    ```
2.  **Project setup:**
    ```bash
    cp .env.example .env
    # Fill in the .env file with the correct values
    npm install
    ```
3.  **Run the project:**
    ```bash
    npm run dev:full
    ```
4.  **Conceptual Lisk Testnet Setup:**
    - Ensure you have a Lisk Sepolia Testnet RPC URL configured in your backend and frontend.
    - Have a small amount of Lisk native tokens (e.g., test LSK) in your backend's signing wallet for gas fees.
    - (Optionally) Deploy a mock `IDRX_Token` stablecoin and ensure some mock liquidity is available on a Lisk-based testnet DEX.

## 🤝 Contribution

We welcome contributions! Please feel free to open issues or pull requests.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT), one of the most open and permissive licenses available. You are free to use, modify, distribute, and sublicense this software with minimal restrictions.
