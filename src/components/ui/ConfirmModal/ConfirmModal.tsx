import { Button } from '../Button/Button';
import { LoadingButton } from '../LoadingButton/LoadingButton';
import { Modal } from '../Modal/Modal';

import type { ComponentProps } from 'react';

type ConfirmModalProps = Readonly<{
	title: string;
	isLoading?: boolean;
	onConfirm?: () => void;
}> &
	ComponentProps<typeof Modal>;

export const ConfirmModal = ({
	title,
	isLoading,
	onConfirm,
	...props
}: ConfirmModalProps) => (
	<Modal {...props}>
		<Modal.Title>{title}</Modal.Title>
		<footer className="flex justify-end gap-x-2">
			<LoadingButton
				variant="primary"
				isLoading={Boolean(isLoading)}
				onClick={onConfirm}
			>
				Confirm
			</LoadingButton>
			<Button onClick={props.onClose}>Cancel</Button>
		</footer>
	</Modal>
);
