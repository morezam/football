import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import styles from './tab.module.css';

interface TabsProps {
	children?: ReactElement[];
	index: number;
	setIndex: Dispatch<SetStateAction<number>>;
}

const Tabs = ({ children, index, setIndex }: TabsProps) => {
	if (!children) {
		return null;
	}
	return (
		<div>
			<ul className={styles.tabList}>
				{children.map((child, i) => (
					<li
						className={`${styles.li} ${i === index ? styles.clicked : null}`}
						key={i}
						onClick={() => setIndex(i)}>
						{child.props.title}
					</li>
				))}
			</ul>
			<div>{children[index]}</div>
		</div>
	);
};

export default Tabs;
