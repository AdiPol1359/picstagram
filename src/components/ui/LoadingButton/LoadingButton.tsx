import { Button } from '../Button/Button';
import { Spinner } from '../Spinner/Spinner';

import type { ComponentProps } from 'react';

type LoadingButtonProps = Readonly<{
	isLoading: boolean;
}> &
	Omit<ComponentProps<typeof Button>, 'disabled' | 'icon'>;

export const LoadingButton = ({ isLoading, ...props }: LoadingButtonProps) => (
	<Button
		disabled={isLoading}
		icon={isLoading && <Spinner size="xs" />}
		{...props}
	/>
);
