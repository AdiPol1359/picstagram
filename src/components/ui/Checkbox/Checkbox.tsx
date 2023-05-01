import { forwardRef } from 'react';
import { FaCheck } from 'react-icons/fa';

import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

type CheckboxProps = Readonly<{
	error?: string;
	label: string;
}>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ error, label }, ref) => (
		<div className="space-y-1">
			<label className="flex w-fit cursor-pointer items-center gap-x-1.5 text-sm font-medium">
				<input type="checkbox" ref={ref} className="peer hidden" />
				<div className="flex h-6 w-6 items-center justify-center rounded-md border text-xs text-white transition-colors duration-100 peer-checked:border-primary-400 peer-checked:bg-primary">
					<FaCheck />
				</div>
				{label}
			</label>
			{error && <ErrorMessage message={error} />}
		</div>
	)
);

Checkbox.displayName = 'Checkbox';
