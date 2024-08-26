import { imageStore } from "@/lib/api";
import { storeOptions } from "@/utils/data";
import { motion } from "framer-motion";
import { useState } from "react";
import { PacmanLoader } from "react-spinners";

interface Props {
	image: File | null;
}

export default function StoreOptions({ image }: Props) {
	const [loading, setLoading] = useState(false);
	const [stored, setStored] = useState(false);

	const handleStoreImage = async (option: string) => {
		setLoading(true);
		console.log(option);
		if (image) {
			await imageStore(image, option);
		}
		setLoading(false);
		setStored(true);
	};

	const handleGoBack = () => {
		setStored(false);
	};

	if (loading) {
		return (
			<div className="flex justify-center items-center p-16">
				<PacmanLoader color="#ffd700" size={100} />
			</div>
		);
	}

	if (stored) {
		return (
			<div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center p-16 bg-primary z-50">
				<h2 className="text-2xl mb-6 text-accent-1">
					Your image has been stored successfully!
				</h2>
				<button
					onClick={handleGoBack}
					className="mt-4 bg-secondary py-3 px-6 rounded-lg text-accent-3 transition-all duration-500 hover:bg-accent-3 hover:text-accent-2"
				>
					Go Back
				</button>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="mt-6"
		>
			<h2 className="text-xl mb-4 text-accent-1">
				Where would you like to store?
			</h2>
			<div className="grid gap-4 justify-items-center font-semibold">
				{storeOptions.map((option) => (
					<motion.button
						key={option}
						whileHover={{ scale: 1.05 }}
						onClick={() =>
							handleStoreImage(
								option.toLowerCase().replace(" ", "")
							)
						}
						className="w-1/2 bg-accent-2 p-3 rounded-lg text-accent-1 transition-all duration-500 hover:bg-accent-1 hover:text-primary"
					>
						{option}
					</motion.button>
				))}
			</div>
		</motion.div>
	);
}
