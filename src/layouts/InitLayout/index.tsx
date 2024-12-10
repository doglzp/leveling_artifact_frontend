import { getLoginUserUsingGet } from "@/api/userController";
import { AppDispatch } from "@/stores";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

/**
 * 全局初始化逻辑
 * @param children
 * @constructor
 */
const InitLayout: React.FC<
	Readonly<{
		children: React.ReactNode;
	}>
> = ({ children }) => {
	const dispatch = useDispatch<AppDispatch>();
	// 初始化全局用户状态
	const doInitLoginUser = useCallback(async () => {
		const res = await getLoginUserUsingGet();
		if (res.data) {
			// 更新全局用户状态
		} else {
			// 仅用于测试
			// setTimeout(() => {
			//   const testUser = {
			//     userName: "测试登录",
			//     id: 1,
			//     userAvatar: "https://www.code-nav.cn/logo.png",
			//     userRole: ACCESS_ENUM.ADMIN
			//   };
			//   dispatch(setLoginUser(testUser));
			// }, 3000);
		}
	}, []);

	// 只执行一次
	useEffect(() => {
		doInitLoginUser();
	}, []);
	return children;
};

export default InitLayout;
