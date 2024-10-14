const Navbar = () => {
  return (
    <div className="w-full p-10 rounded-2xl bg-primary text-white">
      <ul className="flex items-center gap-5">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
