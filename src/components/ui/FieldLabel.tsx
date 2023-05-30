type FieldLabelProps = Readonly<{
	required?: boolean;
	htmlFor: string;
	label: string;
}>;

export const FieldLabel = ({ required, htmlFor, label }: FieldLabelProps) => (
	<label
		htmlFor={htmlFor}
		className="mb-1.5 flex w-fit items-center gap-x-0.5 text-sm font-medium leading-3"
	>
		{label}
		{required && <span className="text-primary">*</span>}
	</label>
);
