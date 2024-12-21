import Collection from "../components/Collection";
import HeroBanner from "../components/HeroBanner";
import HomeProducts from "../components/HomeProducts";

export const metadata = {
  metadataBase: new URL("https://cross-walk.vercel.app"),
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
      url: "https://cross-walk.vercel.app/",
      siteName: "KeCodify",
  },
  icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Collection />
      <span className="text-2xl font-bold text-center mt-10 mb-10">
        Recent Products List
      </span>
      <HomeProducts show={true} />
    </div>
  );
}
