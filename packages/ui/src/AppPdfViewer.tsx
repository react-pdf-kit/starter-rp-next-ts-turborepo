"use client";
import {
	RPProvider,
	RPLayout,
	RPPages,
	type RPLayoutProps,
	type RPProviderProps,
} from "@react-pdf-kit/viewer";

export interface Props {
	showToolbar?: boolean;
	providerProps?: RPProviderProps;
	defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props: Props) => {
	const { showToolbar = true, providerProps, defaultLayoutProps } = props;
	const { toolbar, style } = defaultLayoutProps ?? {};
	return (
		<RPProvider
			src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
			{...providerProps}>
			{showToolbar ? (
				<RPLayout toolbar={toolbar} style={style}>
					<RPPages />
				</RPLayout>
			) : (
				<div style={{ width: "100%", height: "550px" }}>
					<RPPages />
				</div>
			)}
		</RPProvider>
	);
};

export default AppPdfViewer;
