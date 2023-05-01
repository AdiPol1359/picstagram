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
	<label htmlFor={htmlFor} className="text-sm font-medium">
		{label}
		{required && <span className="align-text-top text-primary"> *</span>}
	</label>
);
