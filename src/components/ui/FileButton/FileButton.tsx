import { forwardRef, useId } from 'react';

import type {
	ChangeEvent,
	ChangeEventHandler,
	FocusEventHandler,
	ReactNode,
} from 'react';

type FileButtonProps = Readonly<{
	name?: string;
	accept?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	onBlur?: FocusEventHandler<HTMLInputElement>;
	onFiles?: (files: FileList) => void;
	children: ReactNode;
}>;

export const FileButton = forwardRef<HTMLInputElement, FileButtonProps>(
	({ name, accept, onChange, onBlur, onFiles, children }, ref) => {
		const id = useId();

		const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
			const { files } = event.target;

			if (files) {
				onFiles?.(files);
			}

			onChange?.(event);
		};

		return (
			<>
				<label
					htmlFor={id}
					className="duration-250 flex w-full cursor-pointer select-none items-center justify-center gap-x-1.5 rounded-lg border bg-white px-5 py-2.5 font-medium text-black shadow-sm transition disabled:opacity-75"
				>
					{children}
				</label>
				<input
					type="file"
					id={id}
					accept={accept}
					name={name}
					ref={ref}
					onChange={handleInputChange}
					onBlur={onBlur}
					hidden
				/>
			</>
		);
	}
);

FileButton.displayName = 'FileButton';
