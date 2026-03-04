"use client";
import { type PropsWithChildren } from "react";
import { RPConfig, type RPConfigProps } from "@react-pdf-kit/viewer";

function AppPdfViewerProvider({
	children,
	...props
}: PropsWithChildren<RPConfigProps>) {
	return <RPConfig {...props}>{children}</RPConfig>;
}
export default AppPdfViewerProvider;

export type { RPConfigProps };
