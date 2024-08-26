import { motion } from "framer-motion";

export default function Footer() {
	return (
		<motion.footer
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="w-full py-4 bg-secondary text-center"
		>
			<p className="text-accent-1">© 2024 Team 7. All rights reserved.</p>
		</motion.footer>
	);
}
