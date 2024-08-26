"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FilterOptions from "./FilterOptions";
import StoreOptions from "./StoreOptions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ImageUploader() {
	const [image, setImage] = useState<File | null>(null);
	const [screenImage, setScreenImage] = useState<string | null>(null);
	const [step, setStep] = useState(1);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			setImage(file);
			setStep(2);
			setScreenImage(URL.createObjectURL(file));
		}
	};

	return (
		<>
			<Header />
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="p-8 bg-primary rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-center min-h-[87vh] gap-16"
			>
				<div
					className={`flex flex-col items-center ${
						step >= 2 ? "w-1/3" : "w-full"
					}`}
				>
					{/* Upload button */}
					<motion.button
						whileHover={{ scale: 1.05 }}
						onClick={() =>
							document.getElementById("fileInput")?.click()
						}
						className="bg-accent-1 p-3 rounded-lg text-secondary font-semibold"
					>
						Upload Image
					</motion.button>

					<input
						title="TEMP"
						id="fileInput"
						type="file"
						accept="image/*"
						onChange={handleImageUpload}
						className="hidden"
					/>

					{/* Remove button */}
					{step >= 2 && (
						<motion.div
							className="flex flex-col gap-5 w-full"
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
						>
							<StoreOptions image={image} />
							<FilterOptions
								image={image}
								setImage={setScreenImage}
								onBack={() => setStep(1)}
							/>
						</motion.div>
					)}
				</div>

				{screenImage && step >= 2 && (
					<motion.div
						key={screenImage} // Key ensures new animation on each upload
						className="relative flex-shrink-0 w-1/2"
						initial={{ opacity: 0, scale: 0, rotate: 180 }}
						animate={{ opacity: 1, scale: 1, rotate: 0 }}
						transition={{
							type: "spring",
							stiffness: 260,
							damping: 20,
							delay: 0.2,
						}}
					>
						<Image
							width={screen.width}
							height={screen.height}
							src={screenImage}
							alt="Uploaded"
							className="max-w-full object-cover rounded-lg shadow-md"
						/>
					</motion.div>
				)}
			</motion.div>
			<Footer />
		</>
	);
}
