import { useCallback, useEffect } from "react";

/**
 * 初始化布局
 */
export default function InitLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const doInit = useCallback(() => {
		// 初始化
	}, []);

	useEffect(() => {
		doInit();
	}, []);

	return children;
}
