'use client';

import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { IconButton } from '../IconButton/IconButton';
import { TextField } from '../TextField/TextField';

import type { ComponentProps } from 'react';

type PasswordFieldProps = Omit<
	ComponentProps<typeof TextField>,
	'type' | 'icon'
>;

export const PasswordField = (props: PasswordFieldProps) => {
	const [isVisible, setIsVisible] = useState(false);

	const icon = isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />;

	return (
		<TextField
			type={isVisible ? 'text' : 'password'}
			icon={
				<IconButton
					label={`${isVisible ? 'Hide' : 'Show'} password`}
					icon={icon}
					onClick={() => setIsVisible((prev) => !prev)}
				/>
			}
			{...props}
		/>
	);
};
