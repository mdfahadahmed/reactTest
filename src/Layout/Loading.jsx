import React, { useEffect, useState } from 'react';
import Loading from "../assets/Loading.gif";

function LoadingGif() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m m-auto pt-4 w-[100%] flex justify-center">
      {isLoading && (
        <img className="justify-center items-center align-middle text-center flex flex-wrap w-[40%]" src={Loading} alt="Loading" />
      )}
    </div>
  );
}

export default LoadingGif;
