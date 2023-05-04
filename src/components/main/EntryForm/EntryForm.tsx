import { SocialButton } from './SocialButton';

import { LoadingButton } from '@/components/ui/LoadingButton/LoadingButton';
import { signInWith } from '@/lib/auth';

import type { FormEventHandler, ReactNode } from 'react';

type EntryFormProps = Readonly<{
	buttonText: string;
	isLoading: boolean;
	onSubmit: FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}>;

export const EntryForm = ({
	buttonText,
	isLoading,
	onSubmit,
	children,
}: EntryFormProps) => (
	<>
		<form className="space-y-3.5" onSubmit={onSubmit}>
			{children}
			<LoadingButton type="submit" variant="primary" isLoading={isLoading} fill>
				{buttonText}
			</LoadingButton>
		</form>
		<div className="my-6 flex items-center before:mr-8 before:block before:h-[1px] before:flex-1 before:bg-gray-200 after:ml-8 after:block after:h-[1px] after:flex-1 after:bg-gray-200">
			Or continue with
		</div>
		<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
			<SocialButton
				variant="google"
				text="Google"
				onClick={() => signInWith('google')}
			/>
			<SocialButton
				variant="facebook"
				text="Facebook"
				onClick={() => signInWith('facebook')}
			/>
			<div className="col-span-1 sm:col-span-2">
				<SocialButton
					variant="discord"
					text="Discord"
					onClick={() => signInWith('discord')}
				/>
			</div>
		</div>
	</>
);
