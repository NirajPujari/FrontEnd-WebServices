import { Dispatch, SetStateAction, useState } from "react";
import { RingLoader } from "react-spinners";
import { motion } from "framer-motion";
import { applyFilter } from "@/lib/api";
import { filterOptions } from "@/utils/data";

interface Props {
	image: File | null;
	setImage: Dispatch<SetStateAction<string | null>>;
	onBack: () => void;
}

export default function FilterOptions({ image, setImage, onBack }: Props) {
	const [loading, setLoading] = useState(false);
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

	const handleApplyFilter = async () => {
		if (!image || !selectedFilter) {
			console.error("Image or filter is not selected.");
			return;
		}
		setLoading(true);

		try {
			const filteredImage = await applyFilter(image, selectedFilter);
			if (filteredImage) {
				setImage(filteredImage);
			} else {
				console.error("No filtered image returned.");
			}
		} catch (error) {
			console.error("Error applying filter:", error);
		}

		setLoading(false);
	};

	return loading ? (
		<div className="flex justify-center items-center p-12">
			<RingLoader color="#ffd700" size={100} />
		</div>
	) : (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
			<h2 className="container text-xl mb-4 text-accent-1">
				Choose a filter
			</h2>
			<div className="flex flex-wrap gap-4 justify-center font-semibold">
				{filterOptions.map((filter) => (
					<motion.button
						whileHover={{ scale: 1.05 }}
						key={filter}
						onClick={() => setSelectedFilter(filter.toLowerCase())}
						className={`p-4 w-1/2 md:w-1/3 lg:w-1/4 rounded-lg transition-all duration-500 bg-accent-2 text-accent-1 hover:text-accent-2 hover:bg-accent-1 ${
							selectedFilter === filter.toLowerCase()
								? "border-2 border-accent-3"
								: ""
						}`}
					>
						{filter}
					</motion.button>
				))}
			</div>

			<div className="mt-6 flex justify-between text-2xl font-bold">
				<motion.button
					whileHover={{ scale: 1.05 }}
					onClick={onBack}
					className="bg-secondary px-8 py-4 rounded-xl text-accent-1"
				>
					Back
				</motion.button>
				<motion.button
					whileHover={{ scale: 1.05 }}
					onClick={handleApplyFilter}
					className="bg-accent-1 px-8 py-4 rounded-xl text-secondary"
				>
					Apply
				</motion.button>
			</div>
		</motion.div>
	);
}
