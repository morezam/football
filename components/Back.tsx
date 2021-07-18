import { useRouter } from 'next/router';
import { ReactElement } from 'react';
const Back = ({ children }: { children: ReactElement }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.back()}
			style={{
				position: 'absolute',
				top: '1rem',
				left: '2rem',
				fontSize: '1.8rem',
				cursor: 'pointer',
			}}>
			{children}
		</div>
	);
};

export default Back;
