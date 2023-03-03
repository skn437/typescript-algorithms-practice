//? Metadata
import { type Metadata } from "next/types";

export const metadata: Metadata = {
	title: "Home",
	description: "Home Page",
	icons: "/Home.ico",
};

//? Styles & Animations
import styles from "@/src/ui/app/Home.module.scss";

//? Package
import Link from "next/link";

const Home = () => {
	return (
		<div className={styles.container}>
			<nav>
				<Link href="/">About</Link>
			</nav>

			<main>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js!</a>
				</h1>
			</main>

			<footer>
				<p>Footer</p>
			</footer>
		</div>
	);
};

export default Home;
