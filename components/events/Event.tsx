import Image from 'next/image';
import styles from './events.module.css';
interface EventType {
	player: string;
	assist: string;
	type: Type;
	home: boolean;
	detail: string;
}

enum Type {
	subst = 'subst',
	card = 'Card',
	goal = 'Goal',
}
const Event = ({ type, player, assist, detail, home }: EventType) => {
	const changeType = (type: Type) => {
		if (type === Type.goal && detail === 'Normal Goal') {
			return <Image src="/ball.svg" alt="goal" width={35} height={35} />;
		}
		if (type === Type.goal && detail === 'Penalty') {
			return (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Image src="/ball.svg" alt="goal" width={35} height={35} />
					<p>(P)</p>
				</div>
			);
		}
		if (type === Type.goal && detail === 'Missed Penalty') {
			return <p>(Missed Penalty)</p>;
		}
		if (type === Type.goal && detail === 'Own Goal') {
			return (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<Image src="/redball.svg" alt="goal" width={35} height={35} />
					<p>(OG)</p>
				</div>
			);
		}
		if (type === Type.card) {
			return (
				<p
					className={styles.card}
					style={{
						backgroundColor: `${detail === 'Yellow Card' ? 'yellow' : 'red'}`,
					}}></p>
			);
		}
		if (type === Type.subst) {
			return <p></p>;
		}
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: `${home ? 'row' : 'row-reverse'}`,
			}}>
			<p style={{ margin: '0 1rem' }}>{changeType(type)}</p>
			<div
				style={{
					display: 'flex',
					flexDirection: `${type === Type.subst ? 'column-reverse' : 'column'}`,
					alignItems: `${home ? '' : 'flex-end'}`,
				}}>
				<p style={{ color: `${type === Type.subst ? 'red' : ''}` }}>{player}</p>
				<p
					style={{
						color: `${type === Type.subst ? 'green' : '#999'}`,
						fontSize: `${type === Type.goal ? '1.5rem' : ''}`,
					}}>
					{type === Type.goal && assist ? 'Assist By ' : ''}
					{assist ? assist : null}
				</p>
			</div>
		</div>
	);
};

export default Event;
