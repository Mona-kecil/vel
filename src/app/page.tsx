"use client";

import {
	ArrowRight,
	Clock,
	Code,
	DollarSign,
	Globe,
	Lock,
	MessageCircle,
	Shield,
	Smartphone,
	Star,
	TrendingUp,
	Twitter,
	Users,
	Wallet,
	Zap,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

// Animation variants
const fadeInUp = {
	initial: { opacity: 0, y: 60 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const scaleOnHover = {
	hover: {
		scale: 1.05,
		transition: { duration: 0.2 },
	},
};

export default function LandingPage() {
	const [isVisible, setIsVisible] = useState(false);
	const { scrollYProgress } = useScroll();
	const heroRef = useRef(null);
	const featuresRef = useRef(null);
	const isHeroInView = useInView(heroRef, { once: true });
	const isFeaturesInView = useInView(featuresRef, { once: true });

	// Parallax effects
	const heroY = useTransform(scrollYProgress, [0, 1], [0, -50]);
	const globeY = useTransform(scrollYProgress, [0, 1], [0, -100]);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const features = [
		{
			icon: Zap,
			title: "Transfer Instan",
			description:
				"Terima pembayaran dalam hitungan detik dengan teknologi blockchain Lisk yang cepat dan efisien.",
			gradient: "from-[#4CAF50] to-[#8BC34A]",
			delay: 0,
		},
		{
			icon: DollarSign,
			title: "Biaya Transparan",
			description:
				"Hanya 0.5% per transaksi tanpa biaya tersembunyi. Hemat hingga 80% dibanding metode tradisional.",
			gradient: "from-blue-500 to-blue-600",
			delay: 0.1,
		},
		{
			icon: Shield,
			title: "Keamanan Terjamin",
			description:
				"Dilindungi dengan enkripsi tingkat militer dan audit keamanan berkala untuk melindungi dana Anda.",
			gradient: "from-purple-500 to-purple-600",
			delay: 0.2,
		},
		{
			icon: Globe,
			title: "Jangkauan Global",
			description:
				"Terima pembayaran dari seluruh dunia dengan dukungan berbagai mata uang kripto populer.",
			gradient: "from-orange-500 to-orange-600",
			delay: 0.3,
		},
		{
			icon: Smartphone,
			title: "Mobile-First",
			description:
				"Dashboard yang dioptimalkan untuk mobile dengan antarmuka yang intuitif dan mudah digunakan.",
			gradient: "from-green-500 to-green-600",
			delay: 0.4,
		},
		{
			icon: Lock,
			title: "Compliance Penuh",
			description:
				"Sesuai dengan regulasi Indonesia dan standar internasional untuk keamanan dan transparansi.",
			gradient: "from-red-500 to-red-600",
			delay: 0.5,
		},
	];

	const stats = [
		{ value: "500+", label: "Bisnis Aktif", icon: Users },
		{ value: "Rp 50M+", label: "Volume Transaksi", icon: TrendingUp },
		{ value: "99.9%", label: "Uptime", icon: Clock },
		{ value: "24/7", label: "Support", icon: Shield },
	];

	const testimonials = [
		{
			quote:
				"Vel mengubah cara kami menerima pembayaran dari klien internasional. Prosesnya jauh lebih cepat dan biayanya lebih rendah.",
			author: "Ahmad Sutrisno",
			role: "CEO, Digital Agency",
			avatar: "AS",
			color: "bg-[#4CAF50]",
		},
		{
			quote:
				"Integrasi API Vel sangat mudah. Tim developer kami bisa mengimplementasikannya dalam hitungan jam.",
			author: "Sari Purnama",
			role: "CTO, Fintech Startup",
			avatar: "SP",
			color: "bg-[#243B55]",
		},
		{
			quote:
				"Sebagai UMKM, Vel membantu kami menerima pembayaran dari luar negeri dengan mudah dan aman.",
			author: "Rina Handayani",
			role: "Owner, Craft Business",
			avatar: "RH",
			color: "bg-purple-500",
		},
	];

	return (
		<div className="min-h-screen overflow-hidden bg-white">
			{/* Navigation */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6 }}
				className="fixed top-0 right-0 left-0 z-50 border-gray-100 border-b bg-white/80 backdrop-blur-md"
			>
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex h-16 items-center justify-between">
						<motion.div
							className="flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
						>
							<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]">
								<Wallet className="h-5 w-5 text-white" />
							</div>
							<span className="font-bold text-[#243B55] text-xl">Vel</span>
						</motion.div>
						<div className="hidden items-center gap-8 md:flex">
							<motion.a
								href="#features"
								className="text-gray-600 transition-colors hover:text-[#243B55]"
								whileHover={{ y: -2 }}
							>
								Features
							</motion.a>
							<motion.a
								href="#pricing"
								className="text-gray-600 transition-colors hover:text-[#243B55]"
								whileHover={{ y: -2 }}
							>
								Pricing
							</motion.a>
							<motion.a
								href="#docs"
								className="text-gray-600 transition-colors hover:text-[#243B55]"
								whileHover={{ y: -2 }}
							>
								Docs
							</motion.a>
							<Link href="/dashboard">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										variant="outline"
										className="border-[#243B55] bg-transparent text-[#243B55] hover:bg-[#243B55] hover:text-white"
									>
										Sign in
									</Button>
								</motion.div>
							</Link>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Hero Section */}
			<section
				ref={heroRef}
				className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
			>
				{/* Animated Background Gradients */}
				<div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50">
					<motion.div
						className="absolute inset-0 opacity-30"
						animate={{
							background: [
								"radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)",
								"radial-gradient(circle at 80% 50%, rgba(36, 59, 85, 0.1) 0%, transparent 50%)",
								"radial-gradient(circle at 20% 50%, rgba(76, 175, 80, 0.1) 0%, transparent 50%)",
							],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
							ease: "linear",
						}}
					/>
				</div>

				<motion.div
					style={{ y: heroY }}
					className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
				>
					<div className="mx-auto max-w-4xl">
						{/* Badge */}
						<motion.div
							className="mb-8"
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<Badge className="border-[#4CAF50]/20 bg-[#4CAF50]/10 px-4 py-2 font-medium text-[#4CAF50] text-sm">
								<motion.div
									animate={{ rotate: 360 }}
									transition={{
										duration: 2,
										repeat: Number.POSITIVE_INFINITY,
										ease: "linear",
									}}
								>
									<Zap className="mr-2 h-4 w-4" />
								</motion.div>
								Powered by Lisk Blockchain
							</Badge>
						</motion.div>

						{/* Main Headline */}
						<motion.h1
							className="mb-6 font-bold text-5xl leading-tight md:text-7xl"
							initial={{ opacity: 0, y: 50 }}
							animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.3 }}
						>
							<motion.span
								className="bg-gradient-to-r from-[#243B55] via-[#243B55] to-[#4CAF50] bg-clip-text text-transparent"
								animate={{
									backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
								}}
								transition={{
									duration: 5,
									repeat: Number.POSITIVE_INFINITY,
									ease: "linear",
								}}
								style={{ backgroundSize: "200% 200%" }}
							>
								Pembayaran Rupiah
							</motion.span>
							<br />
							<span className="text-[#243B55]">untuk era Web3</span>
						</motion.h1>

						{/* Subheadline */}
						<motion.p
							className="mx-auto mb-8 max-w-3xl text-gray-600 text-xl leading-relaxed md:text-2xl"
							initial={{ opacity: 0, y: 30 }}
							animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.5 }}
						>
							Infrastruktur pembayaran yang menghubungkan bisnis Indonesia
							dengan ekonomi digital global. Terima pembayaran internasional
							dengan biaya rendah dan kecepatan blockchain.
						</motion.p>

						{/* CTA Buttons */}
						<motion.div
							className="mb-12 flex flex-col justify-center gap-4 sm:flex-row"
							initial={{ opacity: 0, y: 30 }}
							animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.7 }}
						>
							<Link href="/dashboard">
								<motion.div
									whileHover={{
										scale: 1.05,
										boxShadow: "0 20px 40px rgba(76, 175, 80, 0.3)",
									}}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										size="lg"
										className="rounded-full bg-[#4CAF50] px-8 py-4 font-semibold text-lg text-white shadow-lg hover:bg-[#45a049]"
									>
										<motion.div
											animate={{ x: [0, 5, 0] }}
											transition={{
												duration: 1.5,
												repeat: Number.POSITIVE_INFINITY,
											}}
										>
											Mulai Gratis
										</motion.div>
										<ArrowRight className="ml-2 h-5 w-5" />
									</Button>
								</motion.div>
							</Link>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									variant="outline"
									size="lg"
									className="rounded-full border-2 border-[#243B55] bg-transparent px-8 py-4 font-semibold text-[#243B55] text-lg hover:bg-[#243B55] hover:text-white"
								>
									<Code className="mr-2 h-5 w-5" />
									Lihat Dokumentasi
								</Button>
							</motion.div>
						</motion.div>

						{/* Trust Indicators */}
						<motion.div
							className="mb-8 text-gray-500 text-sm"
							initial={{ opacity: 0 }}
							animate={isHeroInView ? { opacity: 1 } : {}}
							transition={{ duration: 0.8, delay: 0.9 }}
						>
							Dipercaya oleh 500+ bisnis di Indonesia
						</motion.div>
					</div>
				</motion.div>

				{/* Floating Elements */}
				<motion.div
					className="absolute top-1/4 left-10 h-20 w-20 rounded-full bg-[#4CAF50]/10 blur-xl"
					animate={{
						y: [0, -20, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute right-10 bottom-1/4 h-32 w-32 rounded-full bg-[#243B55]/10 blur-xl"
					animate={{
						y: [0, 20, 0],
						scale: [1, 0.9, 1],
					}}
					transition={{
						duration: 5,
						repeat: Number.POSITIVE_INFINITY,
						ease: "easeInOut",
						delay: 1,
					}}
				/>
			</section>

			{/* Features Section */}
			<section id="features" ref={featuresRef} className="bg-gray-50 py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						className="mb-16 text-center"
						initial={{ opacity: 0, y: 50 }}
						animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8 }}
					>
						<h2 className="mb-6 font-bold text-4xl text-[#243B55] md:text-5xl">
							Mengapa memilih Vel?
						</h2>
						<p className="mx-auto max-w-3xl text-gray-600 text-xl">
							Platform pembayaran yang dirancang khusus untuk kebutuhan bisnis
							Indonesia di era digital
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
						variants={staggerContainer}
						initial="initial"
						animate={isFeaturesInView ? "animate" : "initial"}
					>
						{features.map((feature, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								custom={index}
								whileHover="hover"
							>
								<motion.div variants={scaleOnHover}>
									<Card className="group h-full border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
										<CardContent className="p-8">
											<motion.div
												className={`h-14 w-14 bg-gradient-to-r ${feature.gradient} mb-6 flex items-center justify-center rounded-2xl transition-transform group-hover:scale-110`}
												whileHover={{ rotate: 360 }}
												transition={{ duration: 0.6 }}
											>
												<feature.icon className="h-7 w-7 text-white" />
											</motion.div>
											<h3 className="mb-4 font-bold text-[#243B55] text-xl">
												{feature.title}
											</h3>
											<p className="text-gray-600 leading-relaxed">
												{feature.description}
											</p>
										</CardContent>
									</Card>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="bg-white py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						className="grid grid-cols-2 gap-8 md:grid-cols-4"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{stats.map((stat, index) => (
							<motion.div
								key={index}
								className="text-center"
								initial={{ opacity: 0, scale: 0.5 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#4CAF50]/10"
									whileHover={{ rotate: 360 }}
									transition={{ duration: 0.6 }}
								>
									<stat.icon className="h-6 w-6 text-[#4CAF50]" />
								</motion.div>
								<motion.div
									className="mb-2 font-bold text-4xl text-[#243B55]"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
									viewport={{ once: true }}
								>
									{stat.value}
								</motion.div>
								<div className="text-gray-600">{stat.label}</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="bg-gray-50 py-24">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						className="mb-16 text-center"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="mb-6 font-bold text-4xl text-[#243B55]">
							Dipercaya oleh bisnis terdepan
						</h2>
						<p className="text-gray-600 text-xl">
							Bergabunglah dengan ratusan bisnis yang telah merasakan kemudahan
							Vel
						</p>
					</motion.div>

					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-3"
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
					>
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								whileHover={{
									y: -10,
									boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
								}}
							>
								<Card className="h-full border-0 shadow-lg">
									<CardContent className="p-8">
										<div className="mb-4 flex">
											{[...Array(5)].map((_, i) => (
												<motion.div
													key={i}
													initial={{ opacity: 0, scale: 0 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.3, delay: i * 0.1 }}
													viewport={{ once: true }}
												>
													<Star className="h-5 w-5 fill-current text-yellow-400" />
												</motion.div>
											))}
										</div>
										<blockquote className="mb-6 text-gray-600">
											"{testimonial.quote}"
										</blockquote>
										<div className="flex items-center gap-3">
											<motion.div
												className={`h-10 w-10 ${testimonial.color} flex items-center justify-center rounded-full`}
												whileHover={{ scale: 1.1 }}
											>
												<span className="font-semibold text-sm text-white">
													{testimonial.avatar}
												</span>
											</motion.div>
											<div>
												<div className="font-semibold text-[#243B55]">
													{testimonial.author}
												</div>
												<div className="text-gray-500 text-sm">
													{testimonial.role}
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative overflow-hidden bg-gradient-to-r from-[#243B55] to-[#4CAF50] py-24">
				{/* Animated Background Elements */}
				<motion.div
					className="absolute top-0 left-0 h-full w-full opacity-10"
					animate={{
						backgroundPosition: ["0% 0%", "100% 100%"],
					}}
					transition={{
						duration: 20,
						repeat: Number.POSITIVE_INFINITY,
						ease: "linear",
					}}
					style={{
						backgroundImage:
							"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
						backgroundSize: "60px 60px",
					}}
				/>

				<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
					<motion.h2
						className="mb-6 font-bold text-4xl text-white md:text-5xl"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						Siap untuk memulai?
					</motion.h2>
					<motion.p
						className="mx-auto mb-8 max-w-2xl text-white/90 text-xl"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						Bergabunglah dengan Vel hari ini dan rasakan kemudahan pembayaran
						lintas batas yang sesungguhnya.
					</motion.p>

					<motion.div
						className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2"
						variants={staggerContainer}
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
					>
						<motion.div variants={fadeInUp}>
							<motion.div whileHover={{ scale: 1.05, y: -10 }}>
								<Card className="border-0 shadow-xl">
									<CardContent className="p-8 text-center">
										<motion.div
											className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4CAF50]/10"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											<Users className="h-8 w-8 text-[#4CAF50]" />
										</motion.div>
										<h3 className="mb-4 font-bold text-2xl text-[#243B55]">
											Untuk Bisnis
										</h3>
										<p className="mb-6 text-gray-600">
											Mulai terima pembayaran internasional dengan dashboard
											yang mudah digunakan.
										</p>
										<Link href="/dashboard">
											<motion.div
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												<Button className="w-full rounded-full bg-[#4CAF50] py-3 font-semibold text-white hover:bg-[#45a049]">
													Daftar Gratis
													<ArrowRight className="ml-2 h-4 w-4" />
												</Button>
											</motion.div>
										</Link>
										<p className="mt-3 text-gray-500 text-sm">
											Gratis untuk 30 hari pertama
										</p>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>

						<motion.div variants={fadeInUp}>
							<motion.div whileHover={{ scale: 1.05, y: -10 }}>
								<Card className="border-0 shadow-xl">
									<CardContent className="p-8 text-center">
										<motion.div
											className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#243B55]/10"
											whileHover={{ rotate: 360 }}
											transition={{ duration: 0.6 }}
										>
											<Code className="h-8 w-8 text-[#243B55]" />
										</motion.div>
										<h3 className="mb-4 font-bold text-2xl text-[#243B55]">
											Untuk Developer
										</h3>
										<p className="mb-6 text-gray-600">
											Integrasikan API Vel ke aplikasi Anda dengan dokumentasi
											lengkap.
										</p>
										<motion.div
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Button
												variant="outline"
												className="w-full rounded-full border-2 border-[#243B55] bg-transparent py-3 font-semibold text-[#243B55] hover:bg-[#243B55] hover:text-white"
											>
												Lihat Dokumentasi
												<ArrowRight className="ml-2 h-4 w-4" />
											</Button>
										</motion.div>
										<p className="mt-3 text-gray-500 text-sm">
											API gratis untuk testing
										</p>
									</CardContent>
								</Card>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#243B55] py-16 text-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<motion.div
						className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5"
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<div className="lg:col-span-2">
							<motion.div
								className="mb-4 flex items-center gap-2"
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#4CAF50] to-[#8BC34A]">
									<Wallet className="h-5 w-5 text-white" />
								</div>
								<span className="font-bold text-xl">Vel</span>
							</motion.div>
							<p className="mb-6 max-w-md text-white/80">
								Infrastruktur pembayaran terdepan untuk bisnis Indonesia di era
								Web3. Menghubungkan tradisional dengan digital.
							</p>
							<div className="flex gap-4">
								<motion.div
									whileHover={{ scale: 1.1, rotate: 360 }}
									transition={{ duration: 0.3 }}
								>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full text-white hover:bg-white/10"
									>
										<Twitter className="h-5 w-5" />
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ scale: 1.1, rotate: 360 }}
									transition={{ duration: 0.3 }}
								>
									<Button
										variant="ghost"
										size="icon"
										className="rounded-full text-white hover:bg-white/10"
									>
										<MessageCircle className="h-5 w-5" />
									</Button>
								</motion.div>
							</div>
						</div>

						{[
							{
								title: "Produk",
								links: [
									{ name: "Dashboard", href: "/dashboard" },
									{ name: "Payment Links", href: "/pay" },
									{ name: "API", href: "#" },
									{ name: "Mobile App", href: "#" },
								],
							},
							{
								title: "Developer",
								links: [
									{ name: "Documentation", href: "#" },
									{ name: "API Reference", href: "#" },
									{ name: "SDKs", href: "#" },
									{ name: "Status", href: "#" },
								],
							},
							{
								title: "Perusahaan",
								links: [
									{ name: "Tentang Kami", href: "#" },
									{ name: "Blog", href: "#" },
									{ name: "Karir", href: "#" },
									{ name: "Kontak", href: "#" },
								],
							},
						].map((section, index) => (
							<div key={index}>
								<h5 className="mb-4 font-semibold">{section.title}</h5>
								<ul className="space-y-3 text-white/80">
									{section.links.map((link, linkIndex) => (
										<motion.li
											key={linkIndex}
											whileHover={{ x: 5 }}
											transition={{ duration: 0.2 }}
										>
											<Link
												href={link.href}
												className="transition-colors hover:text-white"
											>
												{link.name}
											</Link>
										</motion.li>
									))}
								</ul>
							</div>
						))}
					</motion.div>

					<motion.div
						className="mt-12 flex flex-col items-center justify-between border-white/20 border-t pt-8 md:flex-row"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<p className="text-sm text-white/60">
							© 2025 Vel. All rights reserved. Powered by Lisk Blockchain.
						</p>
						<div className="mt-4 flex gap-6 md:mt-0">
							{["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
								(item, index) => (
									<motion.a
										key={index}
										href="#"
										className="text-sm text-white/60 transition-colors hover:text-white"
										whileHover={{ y: -2 }}
									>
										{item}
									</motion.a>
								),
							)}
						</div>
					</motion.div>
				</div>
			</footer>
		</div>
	);
}
