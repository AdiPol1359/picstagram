import { SocialButton } from './SocialButton';

import { Button } from '@/components/ui/Button/Button';
import { signInWith } from '@/lib/auth';

import type { FormEventHandler, ReactNode } from 'react';

type EntryFormProps = Readonly<{
	buttonText: string;
	onSubmit: FormEventHandler<HTMLFormElement>;
	children: ReactNode;
}>;

export const EntryForm = ({
	buttonText,
	onSubmit,
	children,
}: EntryFormProps) => (
	<>
		<form className="space-y-3.5" onSubmit={onSubmit}>
			{children}
			<Button type="submit" variant="primary" fill>
				{buttonText}
			</Button>
		</form>
		<div className="my-6 flex items-center before:mr-8 before:block before:h-[1px] before:flex-1 before:bg-gray-200 after:ml-8 after:block after:h-[1px] after:flex-1 after:bg-gray-200">
			Or continue with
		</div>
		<div className="grid grid-cols-2 gap-2">
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
			<div className="col-span-2">
				<SocialButton
					variant="discord"
					text="Discord"
					onClick={() => signInWith('discord')}
				/>
			</div>
		</div>
	</>
);
