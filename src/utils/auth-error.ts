const DEFAULT_ERROR_MESSAGE =
	'An unexpected error occurred while creating your account!';

const signInPageErrorMessage: Record<string, string> = {
	OAuthAccountNotLinked:
		'An account with the given e-mail address already exists!',
};

export const getSignInPageErrorMessage = (error: string) =>
	signInPageErrorMessage[error] || DEFAULT_ERROR_MESSAGE;
