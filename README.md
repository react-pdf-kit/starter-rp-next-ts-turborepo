# React PDF Kit Starter Toolkit for Next.js and TypeScript in Turborepo

[![Open example in codesandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/react-pdf-dev/starter-rp-next-ts-turborepo/main)

Welcome to the React PDF Kit Starter Toolkit! This repository provides a comprehensive guide on integrating React PDF with Nextjs and TypeScript in Turborepo. It showcases how React PDF Kit can be integrated and rendered as part of a monorepo project.

## Table of Contents

- [Usage](#usage)
  - [Project Setup](#project-setup)
  - [Running the Example Project](#running-the-example-project)
- [Examples](#examples)

## Usage

### Project Setup

1. **Clone the Repository**: If you haven't already, clone the repository and navigate into the project directory.

   ```bash
   git clone https://github.com/react-pdf-kit/starter-rp-next-ts-turborepo.git
   cd starter-rp-next-ts-turborepo
   ```

2. **Install Dependencies**: Install the necessary dependencies using npm, yarn, pnpm or bun.

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Example Project

This repository includes an example project to demonstrate React PDF Kit in action.

1. **Start the Development Server**: Use the following command to start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm run dev
   # or
   bun run dev
   ```

2. **Open in Browser**: Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal) to see the example project in action

### Using the React PDF Component

Once the example project is running, you can explore the source code to see how the React PDF component is integrated. Here is a brief overview:

1.  **Import the component**: Import the desired React PDF component into your codes

```tsx
import {
	RPProvider,
	RPLayout,
	RPPages,
	RPProviderProps,
	RPLayoutProps,
} from "@react-pdf-kit/viewer";

interface Props {
	showToolbar?: boolean;
	providerProps?: RPProviderProps;
	defaultLayoutProps?: RPLayoutProps;
}

const AppPdfViewer = (props: Props) => {
	const { showToolbar = true, providerProps, defaultLayoutProps } = props;

	return (
		<RPProvider
			src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf
			"
			{...providerProps}>
			{showToolbar ? (
				<RPLayout {...defaultLayoutProps}>
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
```

2. **Import Config Component**: Import the Config component

```tsx
import { FC } from "react";
import { RPConfig, RPConfigProps } from "@react-pdf-kit/viewer";

const AppProviders: FC<RPConfigProps> = ({ children }) => (
	<RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
```

3. **Disable SSR for AppPdfViewer**: Disable SSR for the AppPdfViewer component by using `dynamic` from `next/dynamic` and set `ssr: false`

```tsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppPdfViewer = dynamic(() => import("./AppPdfViewer"), {
	ssr: false,
});
```

4. **Disable SSR for AppProviders**: Disable SSR for AppProviders by using `dynamic` from `next/dynamic` and set `ssr: false`

```tsx
"use client";
import dynamic from "next/dynamic";

export const LazyAppProviders = dynamic(() => import("./AppProviders"), {
	ssr: false,
});
```

5. **Use the LazyAppProviders component in layout**: Add the React PDF component to your page

```jsx
import "./globals.css";
import { LazyAppProviders } from "./components/LazyAppProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <LazyAppProviders licenseKey="your-license-key">
          <main>{children}</main>
        </LazyAppProviders>
      </body>
    </html>
  );
}
```

6. **Use the LazyAppPdfViewer component in page**: Add the React PDF component to your page

```jsx

import { LazyAppPdfViewer } from "./components/LazyAppPdfViewer";

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
					defaultLayoutProps={{ style: { width: "100%", height: "600px" } }}
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
						style: { width: "500px", margin: "0 auto" },
					}}
				/>
			</div>
		</>
	);
}

```

## Examples

For more examples, please refer to the `apps/web/app/page.tsx` file in this repository:

- Default Toolbar
- Without Toolbar
- Mobile View

_Remark: If you would like more examples, feel free open an issue._

For more configurations, please check the [documentation](https://docs.react-pdf-kit.dev) site.

---

Thank you for using React PDF Kit! We hope this toolkit helps you build amazing Next.js applications. If you have any questions or need further assistance on this example, please feel free to open an issue. Happy coding!
