type ErrorMessageProps = Readonly<{
	message: string;
}>;

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
	<p role="alert" className="text-sm font-medium text-red-600">
		{message}
	</p>
);
