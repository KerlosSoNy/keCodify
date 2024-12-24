import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import NavBar from "../components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://ke-codify.vercel.app/"),
  title: {
      default: "KeCodify",
      template:
          "KeCodify",
  },
  description:
 "Welcome to KeCodify Interview Questions, your go-to resource for thoughtfully crafted questions designed to spark engaging and insightful conversations. Whether you're preparing for a professional interview, hosting a podcast, or conducting a panel discussion, our curated collection of questions covers a wide range of topics in marketing, branding, and advertising. Discover the tools you need to inspire meaningful dialogue, gain valuable insights, and explore strategies that empower businesses to thrive in today's dynamic landscape.",
  openGraph: {
      title: "KeCodify",
      description:
      "Welcome to KeCodify Interview Questions, your go-to resource for thoughtfully crafted questions designed to spark engaging and insightful conversations. Whether you're preparing for a professional interview, hosting a podcast, or conducting a panel discussion, our curated collection of questions covers a wide range of topics in marketing, branding, and advertising. Discover the tools you need to inspire meaningful dialogue, gain valuable insights, and explore strategies that empower businesses to thrive in today's dynamic landscape.",
      type: "website",
      locale: "en_US",
      url: "https://ke-codify.vercel.app/",
      siteName: "KeCodify",
  },
  icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="ymYfjvSdKiU-l4BrhY98KgFhOGRcRpehbUUsIKvpaW8" />
      </head>
      <body className={inter.className}>
        <NextTopLoader color="#000" height={4} />
                <NavBar />
                <Toaster />
                {children}
                <Footer />
      </body>
    </html>
  );
}
