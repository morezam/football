import React from 'react';
import styles from './facts.module.css';

interface FactProps {
	label: string;
	value: string;
}

const Fact = ({ label, value }: FactProps) => {
	return (
		<div className={styles.fact}>
			<p className={styles.label}>{label}: </p>
			<p> {value}</p>
		</div>
	);
};

export default Fact;
