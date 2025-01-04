// import { Input } from "antd";

// function Header() {
//   return (
//     <div className="flex items-center justify-between bg-gray-900 px-9 py-4 ">
//       <button>
//         <h1 className="text-xl font-bold text-yellow-500">
//           MOVIE <span className="text-white">VENNIE</span>
//         </h1>
//       </button>

//       <div className=" flex">
//         {/* <Avatar size="large" icon={<UserOutlined />} /> */}

//         <Input
//           placeholder="Search Movie"
//           className="w-[250px] h-1/3 top-7 bg-slate-500 left-7"
//           style={{ borderRadius: "15px" }}
//         />
//         <img
//           src="https://movie-site-delta.vercel.app/img/user.png"
//           className="w-[150px]  "
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }

// export default Header;

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router";

function Header() {
  return (
    <div className=" sticky top-0 z-50 container mx-auto flex py-8flex items-center justify-between bg-gray-900 px-9 py-3 h-16">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">
            MOVIE<span className="text-yellow-500">VENNIE</span>
          </h1>
        </Link>
      </div>
      {/* Search and User Section */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Input
            placeholder="Search Movie"
            className="w-[250px] bg-gray-800 text-white placeholder-gray-500 rounded-3xl left-[50px]"
            prefix={<SearchOutlined style={{ color: "#fff" }} />}
          />
        </div>

        {/* User Icon */}
        <img
          src="https://movie-site-delta.vercel.app/img/user.png"
          className="w-[130px]  rounded-full"
          alt="User Icon"
        />
      </div>
    </div>
  );
}

export default Header;
