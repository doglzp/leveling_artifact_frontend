import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_USER: API.LoginUserVO = {
	userName: "游客",
	userProfile: "用户暂无简介",
	userAvatar:
		"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
	userRole: "guest",
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
