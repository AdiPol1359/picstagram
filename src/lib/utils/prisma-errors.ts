import { Prisma } from '@prisma/client';

export const prismaErrors = {
	UniqueKeyViolation: 'P2002',
} as const;

type ErrorCode = (typeof prismaErrors)[keyof typeof prismaErrors];

interface PrismaError extends Prisma.PrismaClientKnownRequestError {
	code: ErrorCode;
	meta?: {
		target: string[];
	};
}

export const isPrismaError = (
	err: unknown,
	code?: ErrorCode
): err is PrismaError => {
	if (!(err instanceof Prisma.PrismaClientKnownRequestError)) {
		return false;
	}

	return !code || err.code === code;
};
