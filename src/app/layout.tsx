"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import InitLayout from "@/layouts/InitLayout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh">
			<body>
				<AntdRegistry>
					<InitLayout>
						<BasicLayout>{children}</BasicLayout>
					</InitLayout>
				</AntdRegistry>
			</body>
		</html>
	);
}
