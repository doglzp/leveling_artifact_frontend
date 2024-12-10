"use client";
import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Provider } from "react-redux";
import "./globals.css";
import BasicLayout from "@/layouts/BasicLayout";
import InitLayout from "@/layouts/InitLayout";
import store from "@/stores";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="zh">
			<body>
				<AntdRegistry>
					<Provider store={store}>
						<InitLayout>
							<BasicLayout>{children}</BasicLayout>
						</InitLayout>
					</Provider>
				</AntdRegistry>
			</body>
		</html>
	);
}
