import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FieldLabel } from '../FieldLabel';
import { TextFieldIcon } from './TextFieldIcon';

import type { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';

type TextFieldProps = Readonly<{
	autoComplete?: boolean;
	spellCheck?: boolean;
	required?: boolean;
	name?: string;
	label?: string;
	error?: string;
	icon?: ReactNode;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	type: 'email' | 'number' | 'password' | 'text';
	placeholder: string;
}>;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
	(
		{
			autoComplete = true,
			spellCheck = true,
			required,
			name,
			label,
			error,
			icon,
			onChange,
			onBlur,
			type,
			placeholder,
		},
		ref
	) => {
		const id = useId();

		return (
			<div className="w-full space-y-1">
				{label && <FieldLabel htmlFor={id} label={label} required={required} />}
				<div className="relative">
					<input
						id={id}
						name={name}
						ref={ref}
						type={type}
						placeholder={placeholder}
						required={required}
						onChange={onChange}
						onBlur={onBlur}
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
