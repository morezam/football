import React from 'react';

const Spinner = () => {
	return (
		<div className="parent">
			<div className="child"></div>
			<style jsx>{`
				.parent {
					max-width: 80rem;
					display: flex;
					margin: 0 auto;
					justify-content: center;
					margin-top: 2rem;
				}

				.child {
					width: 4rem;
					height: 4rem;
					border-radius: 100%;
					border-width: 2px;
					border-style: solid;
					border-image: initial;
					border-color: var(--text-color) var(--text-color) transparent;
					display: inline-block;
					animation: 0.75s linear 0s infinite normal both running spinner;
					background: transparent !important;
				}

				@keyframes spinner {
					0% {
						transform: rotate(0deg);
					}

					50% {
						transform: rotate(180deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}
			`}</style>
		</div>
	);
};

export default Spinner;
