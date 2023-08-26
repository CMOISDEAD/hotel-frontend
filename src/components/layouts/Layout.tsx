import { useEffect } from "react";
import checkStore from "../../utils/checkStore";
import { Navbar } from "../Navbar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  useEffect(() => {
    checkStore();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-5">{children}</div>
    </>
  );
};
