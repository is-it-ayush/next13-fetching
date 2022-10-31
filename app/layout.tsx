export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Next.js Playground</title>
      </head>
      <body
        style={{
          backgroundColor: "black",
          color: "white",
        }}
      >
        {children}
      </body>
    </html>
  );
}
