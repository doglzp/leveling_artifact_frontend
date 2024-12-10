"use client";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import "./index.css";

export default function Banks() {
	const loginUser = useSelector((state: RootState) => state.loginUser);

	const cliButton = () => {
		console.log(loginUser);
	};

	return (
		<div className="banks">
			<Button onClick={() => cliButton()} type="primary">
				题库大全
			</Button>
		</div>
	);
}
