"use client";
import styles from "./page.module.css";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";

export default function Home() {
	const loginUser = useSelector((state: RootState) => state.loginUser);

	const cliButton = () => {
		console.log(loginUser);
	};

	return (
		<div className={styles.page}>
			<Button onClick={() => cliButton()} type="primary">
				题库大全
			</Button>
			<main className={styles.main}>
				<ol>
					<li>
						Get started by editing <code>src/app/page.tsx</code>.
					</li>
					<li>Save and see your changes instantly.</li>
				</ol>

				<div className={styles.ctas}>
					<a
						className={styles.primary}
						href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer">
						Deploy now
					</a>
					<a
						href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.secondary}>
						Read our docs
					</a>
				</div>
			</main>
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
