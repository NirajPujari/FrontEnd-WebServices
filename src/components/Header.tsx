import { motion } from "framer-motion";

export default function Header() {
	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className="w-full py-5 bg-primary shadow-lg text-center"
		>
			<div className="container mx-auto flex justify-center items-center">
				<h1 className="text-4xl font-black text-accent-1">
					Web Service - Serverless Computation
				</h1>
			</div>
		</motion.header>
	);
}
