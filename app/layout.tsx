import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange>
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}
