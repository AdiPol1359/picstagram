export const PROJECT_NAME = 'Picstagram';

export const DEFAULT_ERROR_MESSAGE = 'An unexpected error occurred!';
export const DEFAULT_PROFILE_BIOGRAPHY = 'No bio yet.';

export const USERNAME_ERROR_MESSAGE = 'Please enter a valid username';
export const NAME_ERROR_MESSAGE = 'Please enter a valid name';
export const EMAIL_ERROR_MESSAGE = 'Please enter a valid email address';
export const EMAIL_MAX_LENGTH_ERROR_MESSAGE =
	'Email can be up to 320 characters long';

export const EMAIL_MAX_LENGTH = 320;
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 30;

export const USERNAME_REGEX = /^[a-z0-9_.-]{1,20}$/;
export const NAME_REGEX =
	/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,29}(?: [A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłńóśźż]{0,29})?$/;
