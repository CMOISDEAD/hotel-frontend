import { Navbar } from "../components/Navbar";
export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-5">{children}</div>
    </>
  );
};
