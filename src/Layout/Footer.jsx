import Logo from "../assets/amazon-black.jpeg";
import Address from "./Address";

export default function Footer() {
  return (
    <div className="py-16 px-10	bg-black">
    <div className="flex justify-between grid-cols-3 mb-8">
      <div className="w-1/3 border-r-2">
         <img className='w-40 h-auto' src={Logo} alt="avatar" />
         <p className="font-mono text-base text-white mt-6">I am very sociable and curious. I love discussing ideas and events. Knowing I could share these interests with my Cambly tutors, I dont remember ever missing a single booked lesson.</p>
      </div>

      <div className="w-3/12 border-r-2">
        <h4 className="text-white text-2xl text-bold pb-1 mb-5 uppercase">Pages</h4>
        <ul className="items-center text-white font-bold font-mono text-base capitalize">
          <li className="mb-3 hover:text-[#f68f3d]" >Home</li>
          <li className="mb-3 hover:text-[#f68f3d]" >About</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Profile</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Location</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Contact US</li>
        </ul>
      </div>

      <div className="w-1/3">
        <Address/>
      </div>

    </div>
    <div className="border-t	border-[#888888] pt-5 text-center">
      <p className="text-[#888888] font-mono font-normal text-base">Copyrighy@2024</p>
    </div>
    </div>
  )
}


