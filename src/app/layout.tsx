"use client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import BasicLayout from "@/layouts/BasicLayout";
import React from "react";
import { Provider } from "react-redux";
import store from "@/stores";
import AccessLayout from "@/access/AccessLayout";
import InitLayout from "@/layouts/InitLayout";
import "./globals.css";
import "./index.css";

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
							<BasicLayout>
								<AccessLayout>{children}</AccessLayout>
							</BasicLayout>
						</InitLayout>
					</Provider>
				</AntdRegistry>
			</body>
		</html>
	);
}
