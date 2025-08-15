



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className="[--pattern-fg:var(--color-neutral-50)]"
      >
        {children}
      </body>
    </html>
  );
}
