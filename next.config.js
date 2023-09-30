/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
    // unoptimized: true,
    // loader: "imgix",
    // path: "",
  },
};

module.exports = nextConfig;
// module.exports = {
//   reactStrictMode: true,
// };
