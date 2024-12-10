import { Button, Result } from "antd";
import React from "react";

export default function Forbidden() {
	return (
		<>
			<Result status={403} title="403" subTitle="对不起，你无法访问该页面">
				<Button type="primary" href="/">
					返回首页
				</Button>
			</Result>
		</>
	);
}
