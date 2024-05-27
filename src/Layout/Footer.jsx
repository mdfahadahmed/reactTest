import Logo from "../assets/Fahad-logo.png";

export default function Footer() {
  return (
    <div className="flex justify-between py-16 px-10 grid-cols-3	bg-black">
      <div className="w-1/3">
         <img className='w-40 h-auto' src={Logo} alt="avatar" />
         <p className="font-mono text-base text-white">I am very sociable and curious. I love discussing ideas and events. Knowing I could share these interests with my Cambly tutors, I don’t remember ever missing a single booked lesson.</p>
      </div>

      <div className="w-3/12">
        <h4 className="text-white text-2xl text-bold capitalize pb-1 mb-5 border-b-2">Pages</h4>
        <ul className="items-center text-white font-bold font-mono text-base capitalize">
          <li className="mb-3" href="#">Home</li>
          <li className="mb-3" href="#">About</li>
          <li className="mb-3" href="#">Profile</li>
          <li className="mb-3" href="#">Location</li>
          <li className="mb-3" href="#">Contact US</li>
        </ul>
      </div>

      <div className="w-1/3">
        <h4 className="text-white text-2xl text-bold capitalize pb-1 mb-5 border-b-2">Contact info</h4>
        <ul className="gap-8 items-center text-white font-bold font-mono text-base capitalize">
            <li className="flex gap-2 mb-3">Email : <span className="font-normal">avatarahmed2024@gamil.com</span></li>
            <li className="flex gap-2 mb-3">Phone : <span className="font-normal">01300000022</span></li>
            <li className="flex gap-2 mb-3">Location : <span className="font-normal">avatarahmed2024@gamil.com</span></li>
        </ul>

      </div>

    </div>
  )
}


