import Header from "@/components/Header";

export const metadata = {
  title: "Pix da Arte",
  description: "Apoie um artista",
};

export default function RootLayout({ children }) {
  return (
    <main>
        <Header/>
        {children}
    </main>


  );
}
