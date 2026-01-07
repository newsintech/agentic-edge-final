export const metadata = {
  title: 'AgenticEdge - AI Hardware Benchmarks & Privacy Computing',
  description: 'Real-world benchmarks for local AI hardware, tools, and privacy-focused computing.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, backgroundColor: '#f8f9fa' }}>
        {children}
      </body>
    </html>
  );
}
