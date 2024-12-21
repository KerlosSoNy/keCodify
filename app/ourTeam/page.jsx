import React from 'react'
import { ourTeam } from '../constant/constant'
import OurTeamCard from '../../components/ourTeamCard'

export const metadata = {
  metadataBase: new URL("https://cross-walk.vercel.app"),
  title: {
      default: "KeCodify",
      template:
          "% | Our Team" ,
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

export default function OurTeam() {
  return (
    <section class="py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6 lg:px-8">
    <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">Our Team</h2>
    <p class="text-lg text-gray-600 text-center mb-12">
        {'We are a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for you.'}
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-auto gap-8 w-full place-items-center">
    {
        ourTeam?.map((item , index) => <OurTeamCard key={index} name={item.name} role={item.role} image={item.image} linkedin={item.linkedin}/>)
      }
    </div>
  </div>
</section>
  )
}
