import React, { ReactElement, useState } from 'react';
import styles from './tab.module.css';

interface TabsProps {
	children?: ReactElement[];
}

const Tabs = ({ children }: TabsProps) => {
	const [index, setIndex] = useState(0);
	if (!children) {
		return null;
	}
	return (
		<div>
			<ul className={styles.tabList}>
				{children.map((child, i) => (
					<li className={styles.li} key={i} onClick={() => setIndex(i)}>
						{child.props.title}
					</li>
				))}
			</ul>
			<div>{children[index]}</div>
		</div>
	);
};

export default Tabs;
