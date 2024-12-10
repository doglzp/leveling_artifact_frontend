import ACCESS_ENUM from "@/access/accessEnum";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_USER: API.LoginUserVO = {
	userName: "未登录",
	userProfile: "暂无简介",
	userAvatar: "/assets/notLoginUser.png",
	userRole: ACCESS_ENUM.NOT_LOGIN,
};

export const loginUserSlice = createSlice({
	name: "loginUser",
	initialState: DEFAULT_USER,
	reducers: {
		setLoginUser: (state, action: PayloadAction<API.LoginUserVO>) => {
			return {
				...action.payload,
			};
		},
	},
});

export const { setLoginUser } = loginUserSlice.actions;

export default loginUserSlice.reducer;
