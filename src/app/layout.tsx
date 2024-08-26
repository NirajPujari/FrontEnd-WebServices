import "@/app/globals.css";

export const metadata = {
	title: "Web Services - Serverless Computation",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<main className="min-h-screen flex flex-col justify-between">
					{children}
				</main>
			</body>
		</html>
	);
}
