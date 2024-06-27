import { useEffect, useState } from 'react';
import ErrorPage from "../assets/404-error.gif";

function Error() {
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
        <img className="justify-center items-center align-middle text-center flex flex-wrap w-[20%]" src={ErrorPage} alt="error" />
      )}
    </div>
  );
}

export default Error;

