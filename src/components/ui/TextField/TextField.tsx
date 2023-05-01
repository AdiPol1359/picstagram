import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { TextFieldIcon } from './TextFieldIcon';
import { TextFieldLabel } from './TextFieldLabel';

import type { ReactNode } from 'react';

type TextFieldProps = Readonly<{
	autoComplete?: boolean;
	spellCheck?: boolean;
	required?: boolean;
	label?: string;
	error?: string;
	icon?: ReactNode;
	type: 'email' | 'number' | 'password' | 'text';
	placeholder: string;
}>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			autoComplete = true,
			spellCheck = true,
			required,
			label,
			error,
			icon,
			type,
			placeholder,
		},
		ref
	) => {
		const id = useId();

		return (
			<div className="w-full space-y-1">
				{label && (
					<TextFieldLabel htmlFor={id} label={label} required={required} />
				)}
				<div className="relative">
					<input
						id={id}
						ref={ref}
						type={type}
						placeholder={placeholder}
						required={required}
						className={twMerge(
							'duration-250 w-full rounded-lg border bg-white p-2.5 shadow-sm transition-colors focus:border-primary-400 focus:outline-none',
							error && 'border-red-600 text-red-600 focus:border-red-600',
							icon && 'pr-9'
						)}
						{...(!autoComplete && { autoComplete: 'off' })}
						{...(!spellCheck && { spellCheck })}
					/>
					{icon && <TextFieldIcon icon={icon} error={Boolean(error)} />}
				</div>
				{error && <ErrorMessage message={error} />}
			</div>
		);
	}
);

TextField.displayName = 'TextField';
