import Avatar from "../assets/boy-avatar.png";
import Btn from "../Layout/Button";




function Home() {
  return (
    <>
        <div className="border-2	border-white	">
          <img className='w-full  h-auto' src={Avatar} alt="avatar" />
          <div className="pt-5 pb-5 px-5 ">
            <h2 className='text-white text-2xl	font-bold uppercase pb-3'>Avatar Ahmed</h2>
            <p className='text-lg	 text-white font-mono mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eligendi esse delectus praesentium quod magni cum accusantium ea in quae pariatur illo qui, atque asperiores. Quidem, atque magni. Similique, molestias!</p>

          <Btn/>

          </div>
        </div>
    </>
  )
}


export default Home;
