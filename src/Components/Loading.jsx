import { useEffect, useState } from 'react';

function LoadingGif() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="m m-auto pt-4 w-[100%] flex justify-center">
      {isLoading && (
        // <img className="justify-center items-center align-middle text-center flex flex-wrap w-[20%]" src={Loading} alt="Loading" />

        <h1>loading...</h1>
      )}
    </div>
  );
}

export default LoadingGif;
