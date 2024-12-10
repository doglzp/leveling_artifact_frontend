import {
	CrownOutlined,
	HomeOutlined,
	MenuOutlined,
	ReadOutlined,
} from "@ant-design/icons";
import { MenuDataItem } from "@ant-design/pro-layout";

export const menus = [
	{
		path: "/",
		name: "主页",
		icon: <HomeOutlined />,
	},
	{
		path: "/banks",
		name: "题库",
		icon: <ReadOutlined />,
	},
	{
		path: "/questions",
		name: "题目",
		icon: <MenuOutlined />,
	},
	{
		name: "面试鸭",
		path: "https://mianshiya.com",
		target: "_blank",
	},
	{
		path: "/admin",
		name: "管理",
		icon: <CrownOutlined />,
		children: [
			{
				path: "/admin/user",
				name: "用户管理",
			},
		],
	},
] as MenuDataItem[];
