import { LazyAppPdfViewer } from "./_components/LazyAppPdfViewer";

export default function Home() {
	return (
		<>
			<div
				style={{
					width: "1024px",
					margin: "0 auto",
				}}>
				<h1>RP Starter Toolkit: Nextjs + Typescript in Turborepo</h1>
				<br />
				<h2>Default Toolbar</h2>
				<LazyAppPdfViewer
					providerProps={{
						src: `https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf`,
						initialPage: 1,
					}}
					defaultLayoutProps={{ style: { width: "100%", height: "600px" }, toolbar: true }}
				/>
				<br />
				<h2>Without Toolbar</h2>
				<LazyAppPdfViewer
					showToolbar={false}
					providerProps={{
						src: `https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf`,
						initialPage: 1,
					}}
				/>
				<br />
				<h2>Mobile</h2>
				<LazyAppPdfViewer
					defaultLayoutProps={{
						toolbar: true,
						style: { width: "500px"},
					}}
				/>
			</div>
		</>
	);
}
