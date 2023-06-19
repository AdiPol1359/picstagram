import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';

import { IconButton } from '../IconButton/IconButton';
import { ModalTitle } from './ModalTitle';

import type { ReactNode } from 'react';

type ModalProps = Readonly<{
	isOpen: boolean;
	onClose: () => void;
	large?: boolean;
	children?: ReactNode;
}>;

export const Modal = ({ isOpen, onClose, large, children }: ModalProps) => (
	<Transition as={Fragment} show={isOpen} appear>
		<Dialog onClose={onClose}>
			<Transition.Child
				as={Fragment}
				enter="transition-opacity duration-300"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition-opacity duration-300"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<div className="fixed inset-0 z-50 overflow-y-auto bg-black/50">
					<div className="flex min-h-full items-center justify-center p-2">
						<Transition.Child
							as={Fragment}
							enter="transition duration-300"
							enterFrom="opacity-0 -translate-y-6"
							enterTo="opacity-100 translate-y-0"
							leave="transition duration-300"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-8"
						>
							<Dialog.Panel
								className={twMerge(
									'relative w-full max-w-xl rounded-2xl bg-white p-3 shadow-sm sm:p-6',
									large && 'max-w-6xl'
								)}
							>
								<div className="absolute right-2.5 top-2.5">
									<IconButton
										label="Close modal"
										icon={<IoCloseSharp />}
										onClick={onClose}
									/>
								</div>
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Transition.Child>
		</Dialog>
	</Transition>
);

Modal.Title = ModalTitle;
