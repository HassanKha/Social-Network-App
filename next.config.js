/** @type {import('next').NextConfig} */

const nextConfig = {
  images:{
  domains:[
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "metro.co.uk",
      "www.usanetwork.com",
      "encrypted-tbn0.gstatic.com"
  ]
  
  },
  env: {
    AUTH_SECRET:process.env.AUTH_SECRET,
  },
  
  
  }

module.exports = nextConfig
