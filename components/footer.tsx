const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-500 mt-40">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 sm:mb-0">© 2024</div>
          <a
            href="https://github.com/fernandobouchet/calilegua_tp2"
            target="_blank"
            className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
