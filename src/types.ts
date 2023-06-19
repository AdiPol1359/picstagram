export type PageParams<T extends string> = Readonly<{ [K in T]: string }>;
