import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Envo Technologies | Our Services",
  description:
    "A leading Technology and Engineering firm in the global south that provides integrated solutions in water, environment and renewable energy. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-manrope">
        {children}
      </body>
    </html>
  );
}
