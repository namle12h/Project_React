const Footer: React.FC = () => {
  const handleNextPage = () => {
    // Thực hiện điều hướng hoặc hành động khi bấm nút "Next Page"
    console.log("Next Page clicked");
  };

  return (
    <div className="bg-gray-900 text-white p-6 flex flex-col items-center">
      {/* Next Page Button */}
      <button
        onClick={handleNextPage}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Next Page
      </button>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-300 mt-8">
        <p>© MovieVennie All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
