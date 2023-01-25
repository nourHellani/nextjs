import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      ></link>
      <body className="bg-[#f2f2f2] text-[#333] ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
