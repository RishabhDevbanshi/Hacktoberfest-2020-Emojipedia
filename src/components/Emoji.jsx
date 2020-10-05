import React, { useState } from 'react';
import { useSpring, animated as a } from 'react-spring';

function Emoji({ name, emoji, meaning }) {
	const [flipped, setFlipped] = useState(false);

	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 50 },
	});

	return (
		<div className="term" onClick={() => setFlipped((state) => !state)}>
			<a.div
				className="card front"
				style={{
					opacity: opacity.interpolate((o) => 1 - o),
					transform,
				}}
			>
				<dt>
					<span className="emoji" role="img" aria-label={name}>
						{emoji}
					</span>
					<span>{name}</span>
				</dt>
			</a.div>
			<a.div
				className="card back"
				style={{
					opacity,
					transform: transform.interpolate(
						(t) => `${t} rotateY(180deg)`
					),
				}}
			>
				<dd>{meaning}</dd>
			</a.div>
		</div>
	);
}

export default Emoji;
