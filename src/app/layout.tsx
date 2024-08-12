import { Metadata } from "next";
import { PropsWithChildren } from "react";

import { Container } from "@/components/container";
import { Content } from "@/components/content";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { rubik } from "@/lib/font";
import { InitializeScript } from "@/lib/initialize";

import "./index.css";

export const metadata: Metadata = {
	title: "Oliver Plummer",
	description: "Oliver Plummer",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html
			suppressHydrationWarning
			lang="en"
			className={rubik.className}
			data-page="true"
			data-sidebar="false"
		>
			<head>
				<InitializeScript />
			</head>
			<body className="antialiased dark:subpixel-antialiased">
				<Header />
				<Sidebar />
				<Container>
					<Content>{children}</Content>
					<Footer />
				</Container>
			</body>
		</html>
	);
}
