import Link from "next/link";

const HeaderTop = () => {
  return (
    <div>
      <div className="bg-gray-100 py-2 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left Section */}
          <div className="flex space-x-4">
            <button className="text-gray-700 hover:text-orange-600">
              English
            </button>
            <a href="#" className="text-gray-700 hover:text-orange-600">
              Help Center
            </a>
            <span className="text-gray-500">Helpline: 0809123456</span>
          </div>

          {/* Right Section */}
          <div className="flex space-x-4">
            <div className="text-gray-700 hover:text-orange-600">
              Become a Seller
            </div>
            <div className="text-gray-700 hover:text-orange-600">
              Order Track
            </div>
            <Link href="/SignUp" className="text-orange-600 font-medium">
              Sign Up / Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
