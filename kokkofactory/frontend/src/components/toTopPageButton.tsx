"use client";
import { useRouter } from "next/navigation";

const ToTopPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/web"); 
  };

  return (
    <button onClick={handleClick}>
      Click here
    </button>
  );
};

export default ToTopPage;
