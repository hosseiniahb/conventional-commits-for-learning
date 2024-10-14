import Navbar from "../components/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen py-7">
      <Navbar />
      <main className="p-5">{children}</main>
    </div>
  );
};

export default RootLayout;
