import { Input } from "antd";

function Header() {
  return (
    <div className="flex items-center justify-between bg-gray-900 px-9 py-4">
      <button>
        <h1 className="text-xl font-bold text-yellow-500">
          MOVIE <span className="text-white">VENNIE</span>
        </h1>
      </button>

      <div className="mr-[10px] flex">
        {/* <Avatar size="large" icon={<UserOutlined />} /> */}

        <Input
          placeholder="Search Movie"
          className="w-1/2 h-1/3 top-7 bg-slate-500"
          style={{ borderRadius: "15px" }}
        />
        <img
          src="https://movie-site-delta.vercel.app/img/user.png"
          className="w-[150px] "
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
