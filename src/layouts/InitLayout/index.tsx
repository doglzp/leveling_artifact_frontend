import { getLoginUserUsingGet } from "@/api/userController";
import { setLoginUser } from "@/stores/loginUser";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * 初始化布局
 */
export default function InitLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const dispatch = useDispatch();

	const doInitLoginUser = useCallback(async () => {
		const res = await getLoginUserUsingGet();
		if (res.data) {
			// 更新全局用户状态
		} else {
			setTimeout(() => {
				const testUser = {
					userName: "测试",
					userProfile: "用户暂无简介",
					userAvatar: "/public/assets/logo.png",
				};
				dispatch(setLoginUser(testUser));
			}, 3000);
		}
		// 初始化
	}, []);

	useEffect(() => {
		doInitLoginUser();
	}, []);

	return children;
}
