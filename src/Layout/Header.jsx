import Logo from "../assets/Fahad-logo.png";
import Btn from "../Layout/Button";



export default function Header() {
  return (
    <div className="flex justify-between px-10 items-center	grid-cols-3	bg-black">
      <div >
         <img className='w-60 h-auto' src={Logo} alt="avatar" />
      </div>
      <div>
        <ul className="flex gap-8 items-center text-white font-bold font-mono text-xl uppercase">
          <li href="#">Home</li>
          <li href="#">About</li>
          <li href="#">Profile</li>
          <li href="#">Location</li>
          <li href="#">Contact US</li>
        </ul>
      </div>
      <div>
        <Btn/>
      </div>
    </div>
  )
}
