import { useEffect, useState } from 'react';
import Loaddingimg from "../assets/loading.gif";

function LoadingGif() {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m m-auto pt-4 w-[100%] flex justify-center">
      {Loading && (
        <img className="justify-center items-center align-middle text-center flex flex-wrap w-[20%]" src={Loaddingimg} alt="Loading" />
      )}
    </div>
  );
}

export default LoadingGif;
