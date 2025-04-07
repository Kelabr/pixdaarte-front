import "./globals.css";

export const metadata = {
  title: "Pix da Arte",
  description: "Apoie um artista",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
