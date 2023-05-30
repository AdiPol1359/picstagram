import { forwardRef, useId } from 'react';
import { twMerge } from 'tailwind-merge';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';
import { FieldLabel } from '../FieldLabel';

import type { ChangeEventHandler, FocusEventHandler } from 'react';

type TextareaProps = Readonly<{
	spellCheck?: boolean;
	required?: boolean;
	name?: string;
	label?: string;
	error?: string;
	onChange?: ChangeEventHandler<HTMLTextAreaElement>;
	onBlur?: FocusEventHandler<HTMLTextAreaElement>;
	placeholder: string;
}>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	(
		{
			spellCheck = true,
			required,
			name,
			label,
			error,
			onChange,
			onBlur,
			placeholder,
		},
		ref
	) => {
		const id = useId();

		return (
			<div className="space-y-1">
				{label && <FieldLabel htmlFor={id} label={label} required={required} />}
				<textarea
					id={id}
					name={name}
					placeholder={placeholder}
					required={required}
					ref={ref}
					onChange={onChange}
					onBlur={onBlur}
					className={twMerge(
						'duration-250 app-scrollbar block h-32 w-full resize-none rounded-lg border p-2.5 leading-5 shadow-sm transition-colors focus:border-primary-400 focus:outline-0',
						error && 'border-red-600 text-red-600 focus:border-red-600'
					)}
					{...(!spellCheck && { spellCheck })}
				/>
				{error && <ErrorMessage message={error} />}
			</div>
		);
	}
);

Textarea.displayName = 'Textarea';
