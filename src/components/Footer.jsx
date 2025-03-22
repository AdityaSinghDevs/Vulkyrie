const Footer = () => {
  return (
    <footer className="bg-gray-700 py-12">
      <div className="mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-8 mb-8 md:mb-0">
          <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-bold">LOGO</span>
          </div>
          <h2 className="text-white text-4xl font-bold">
            VUL-<br />KYRIE
          </h2>
        </div>

        <div className="text-white">
          <ul className="space-y-2">
            <li className="hover:text-gray-300">
              <a href="#">INSTA</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">FACEBOOK</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">WHP</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#">TWITTER</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 