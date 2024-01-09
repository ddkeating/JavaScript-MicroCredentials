import Image from "next/image";
import styles from "./banner.modules.css";

const Banner = () => {
	return (
		<header className={styles.header}>
			<div>
				<Image src="/images/logo.png" alt="logo" width={130} height={110} />
			</div>
			<div className={styles.navLink}>NZ houses market data</div>
		</header>
	);
};

export default Banner;
