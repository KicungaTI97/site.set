import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-gray-800 text-gray-100 selection:bg-blue-500 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
