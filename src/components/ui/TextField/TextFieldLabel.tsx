type TextFieldLabelProps = Readonly<{
	required?: boolean;
	htmlFor: string;
	label: string;
}>;

export const TextFieldLabel = ({
	required,
	htmlFor,
	label,
}: TextFieldLabelProps) => (
	<label
		htmlFor={htmlFor}
		className="mb-1.5 flex w-fit items-center gap-x-0.5 text-sm font-medium leading-3"
	>
		{label}
		{required && <span className="text-primary">*</span>}
	</label>
);
