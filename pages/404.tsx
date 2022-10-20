import Image from 'next/future/image';
import Link from 'next/link';
import styles from '@style/notfound.module.css';

const NotFound = () => {
	return (
		<div className={styles.parent}>
			<h2>
				<span>4</span>
				<Image src="/404-ball.svg" alt="ball" height={200} width={200} />
				<span>4</span>
			</h2>
			<p className={styles.text}>sorry,page not found!</p>
			<Link href="/">
				<a className={styles.link}>Back to Home</a>
			</Link>
		</div>
	);
};

export default NotFound;
