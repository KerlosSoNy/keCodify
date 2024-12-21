import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";

export default function OurTeamCard({name,role , image ,linkedin}) {
  return (
    <div class="flex flex-col items-start text-center gap-3">
    <Image src={image} width={150} height={150} alt="Team Member" class="rounded-lg w-52 h-52 object-cover mb-4"/>
    <h3 class="text-xl font-semibold text-gray-900">{name}</h3>
    <p class="text-sm text-gray-600">{role}</p>
    <div className='flex flex-row'>
        <Link target='_blank' href={linkedin}>
            <FaLinkedinIn/>
        </Link>
    </div>
  </div>
  )
}
