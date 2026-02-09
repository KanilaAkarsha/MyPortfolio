import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-Open_Sans",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Kanila Portfolio",
  description:
    "Kanila Akarsha is a fullstack developer based in Sri Lanka and a student in the Department of Computer Science at Trincomalee Campus, EUSL, Sri Lanka.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-Open_Sans leading-8 dark:bg-darkTheme dark:text-white">
        {children}
      </body>
    </html>
  );
}
