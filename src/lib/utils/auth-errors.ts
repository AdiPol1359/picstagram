import { DEFAULT_ERROR_MESSAGE } from '../constants';

const signInPageErrorMessages: Record<string, string> = {
	OAuthAccountNotLinked:
		'An account with the given e-mail address already exists!',
};

export const getSignInPageErrorMessage = (error: string) =>
	signInPageErrorMessages[error] || DEFAULT_ERROR_MESSAGE;
