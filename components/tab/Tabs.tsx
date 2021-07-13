import React, { ReactElement, useState } from 'react';

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
			<ul
				style={{
					display: 'flex',
					fontSize: '1.8rem',
					listStyle: 'none',
					maxWidth: '70rem',
					margin: '2rem auto',
					justifyContent: 'center',
				}}>
				{children.map((child, i) => (
					<li
						style={{ cursor: 'pointer', margin: '0 2rem' }}
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
