import { Dialog } from '@headlessui/react';

import type { ReactNode } from 'react';

type ModalTitleProps = Readonly<{
	children: ReactNode;
}>;

export const ModalTitle = ({ children }: ModalTitleProps) => (
	<Dialog.Title className="mb-2.5 text-lg font-semibold text-black">
		{children}
	</Dialog.Title>
);
