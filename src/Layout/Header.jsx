import AmazonLogo from "../assets/amazon.webp";
import Btn from "../Layout/Button";
import Menu from "../Layout/Menu";

export default function Header() {
  return (
    <div className="flex justify-between px-10 items-center	grid-cols-3	bg-white border-b-2 border-gray-500	">
      <div >
         <img className="w-60 h-auto" src={AmazonLogo} alt="Amazon Logo" />
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <Btn/>
      </div>
    </div>
  )
}
