import { forwardRef, useId } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

import { BUTTON_BASE_STYLES, BUTTON_VARIANTS } from '../Button/Button.styles';

import type {
	ChangeEvent,
	ChangeEventHandler,
	FocusEventHandler,
	ReactNode,
} from 'react';

type FileButtonProps = Readonly<
	| {
			name?: string;
			accept?: string;
			multiple?: boolean;
			fill?: boolean;
			icon?: boolean;
			variant?: keyof typeof BUTTON_VARIANTS;
			onChange?: ChangeEventHandler<HTMLInputElement>;
			onBlur?: FocusEventHandler<HTMLInputElement>;
			onFiles?: (files: FileList) => void;
			children: ReactNode;
	  } & (
			| { limit?: undefined; onLimitError?: undefined }
			| { limit: number; onLimitError?: () => void }
	  )
>;

export const FileButton = forwardRef<HTMLInputElement, FileButtonProps>(
	(
		{
			name,
			accept,
			limit,
			multiple,
			fill,
			icon,
			variant = 'default',
			onChange,
			onBlur,
			onFiles,
			onLimitError,
			children,
		},
		ref
	) => {
		const id = useId();

		const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
			const { files } = event.target;

			if (!files) return;

			if (limit && files.length > limit) {
				onLimitError?.();
				event.preventDefault();
			} else {
				onFiles?.(files);
			}

			onChange?.(event);
		};

		return (
			<>
				<label
					htmlFor={id}
					className={twMerge(
						BUTTON_BASE_STYLES,
						'cursor-pointer select-none',
						fill ? 'w-full' : 'w-fit',
						BUTTON_VARIANTS[variant]
					)}
				>
					{icon && <AiOutlineCloudUpload />}
					{children}
				</label>
				<input
					type="file"
					ref={ref}
					id={id}
					name={name}
					accept={accept}
					multiple={multiple}
					onChange={handleInputChange}
					onBlur={onBlur}
					hidden
				/>
			</>
		);
	}
);

FileButton.displayName = 'FileButton';
