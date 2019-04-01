import React, {ReactNode} from 'react';

import './Button.css';

type SomeObj = {
	a: number;
	b: boolean;
}

type ButtonProps = {
	children: ReactNode,
	/** The color for the button */
	color: string,
	/** The size of the button */
	size: 'small' | 'normal' | 'large',
	/** Disable button */
	disabled?: boolean,
	/** Gets called when the user clicks on the button */
	onClick: (event: React.MouseEvent) => void,
	/** No time for decent example, sorry */
	obj: SomeObj,
}

/**
 * The only true button.
 */
export default function Button({
	color = '#333',
	size = 'normal',
	onClick = (event) => {
		console.log('You have clicked me!', event.target);
	},
	disabled,
	children,
	obj
}: ButtonProps) {
	const styles = {
		color,
		fontSize: Button.sizes[size],
	};

	return (
		<button className="button" style={styles} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
}
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
