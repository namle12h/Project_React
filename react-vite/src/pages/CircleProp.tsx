// // import React from "react";

// // interface CircularProgressProps {
// //   percentage: number;
// //   size?: number;
// //   strokeWidth?: number;
// // }

// // const CircularProgress: React.FC<CircularProgressProps> = ({
// //   percentage,
// //   size = 50,
// //   strokeWidth = 6,
// // }) => {
// //   const radius = (size - strokeWidth) / 2; // Bán kính của đường tròn
// //   const circumference = 2 * Math.PI * radius; // Chu vi của đường tròn
// //   const offset = circumference * (1 - percentage / 100); // Tính phần bị ẩn (offset)

// //   return (
// //     <svg
// //       width={size}
// //       height={size}
// //       className="transform -rotate-90"
// //       style={{ display: "block", margin: "auto" }}
// //     >
// //       {/* Đường tròn nền */}
// //       <circle
// //         cx={size / 2}
// //         cy={size / 2}
// //         r={radius}
// //         stroke="#e5e7eb" // Màu nền (xám nhạt)
// //         strokeWidth={strokeWidth}
// //         fill="transparent"
// //       />
// //       {/* Đường tròn phần trăm */}
// //       <circle
// //         cx={size / 2}
// //         cy={size / 2}
// //         r={radius}
// //         stroke="#4ade80" // Màu chính (xanh lá cây)
// //         strokeWidth={strokeWidth}
// //         fill="transparent"
// //         strokeDasharray={circumference} // Tổng chiều dài đường tròn
// //         strokeDashoffset={offset} // Phần bị che (offset)
// //         strokeLinecap="round" // Bo góc tròn cho đường viền
// //       />
// //       {/* Text hiển thị phần trăm */}
// //       <text
// //         x="50%"
// //         y="50%"
// //         dy=".3em"
// //         textAnchor="middle"
// //         className="text-sm font-bold fill-gray-900"
// //       >
// //         {percentage}%
// //       </text>
// //     </svg>
// //   );
// // };

// // export default CircularProgress;

// import React from "react";

// interface CircularProgressProps {
//   percentage: number;
//   size?: number;
//   strokeWidth?: number;
//   circleBackgroundColor?: string;
// }

// const CircularProgress: React.FC<CircularProgressProps> = ({
//   percentage,
//   size = 50,
//   strokeWidth = 6,
//   circleBackgroundColor = "black",
// }) => {
//   const radius = (size - strokeWidth) / 2; // Bán kính của đường tròn
//   const circumference = 2 * Math.PI * radius; // Chu vi của đường tròn
//   const offset = circumference * (1 - percentage / 100); // Tính phần bị ẩn (offset)

//   return (
//     <svg width={size} height={size}>
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         stroke="#e5e7eb"
//         strokeWidth={strokeWidth}
//         fill="transparent"
//       />
//       {/* Đường tròn phần trăm */}
//       <circle
//         cx={size / 2}
//         cy={size / 2}
//         r={radius}
//         fill={circleBackgroundColor}
//         stroke="#4ade80" // Màu chính (xanh lá cây)
//         strokeWidth={strokeWidth}
//         fill="transparent"
//         strokeDasharray={circumference} // Tổng chiều dài đường tròn
//         strokeDashoffset={offset} // Phần bị che (offset)
//         strokeLinecap="round" // Bo góc tròn cho đường viền
//       />
//       {/* Text hiển thị phần trăm */}
//       <text
//         x="50%"
//         y="50%"
//         dy=".3em"
//         textAnchor="middle"
//         className="text-sm font-bold fill-white "
//       >
//         {percentage}%
//       </text>
//     </svg>
//   );
// };

// export default CircularProgress;

import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  circleBackgroundColor?: string; // Màu nền bên trong hình tròn
  trackColor?: string; // Màu của đường tròn nền
  progressColor?: string; // Màu của đường tròn phần trăm
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 50,
  strokeWidth = 6,
  circleBackgroundColor = "black", // Màu nền mặc định bên trong hình tròn
  trackColor = "#d9d9d9", // Màu đường tròn nền
  progressColor = "#4ade80", // Màu đường tròn phần trăm
}) => {
  const radius = (size - strokeWidth) / 2; // Bán kính của đường tròn
  const circumference = 2 * Math.PI * radius; // Chu vi của đường tròn
  const offset = circumference * (1 - percentage / 100); // Tính phần bị ẩn (offset)

  return (
    <svg
      width={size}
      height={size}
      style={{ display: "block", margin: "auto" }}
    >
      {/* Nền bên trong hình tròn */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius + strokeWidth / 2} // Bán kính lớn hơn để bao toàn bộ hình
        fill={circleBackgroundColor} // Màu nền bên trong
      />
      {/* Đường tròn nền */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={trackColor} // Màu đường tròn nền
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      {/* Đường tròn phần trăm */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={progressColor} // Màu đường tròn phần trăm
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference} // Tổng chiều dài đường tròn
        strokeDashoffset={offset} // Phần bị che (offset)
        strokeLinecap="round" // Bo góc tròn cho đường viền
      />
      {/* Text hiển thị phần trăm */}
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        className="text-sm font-bold fill-white"
        // style={{ fill: "#000" }} // Đặt màu chữ
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgress;
