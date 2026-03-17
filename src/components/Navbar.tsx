import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#1a1a1a] text-white py-3 px-6 flex items-center justify-between shadow-md">
      {/* Phía bên trái (Giữ nguyên logo UIT và tên) */}
      <div className="flex items-center gap-3">
        <div className="bg-[#FFFFFF] p-1.5 rounded-sm flex items-center justify-center">
          <img 
            src="https://media.licdn.com/dms/image/v2/C510BAQHUtwuBizstCg/company-logo_200_200/company-logo_200_200/0/1630606553765/university_of_information_technology_viet_nam_national_university_ho_chi_minh_city_logo?e=2147483647&v=beta&t=uzTAJNz3-mS5etMYUpDqVDQ62QejUdrKtjASyzgfhIo" 
            alt="UIT Logo" 
            className="w-5 h-5 object-contain" // Giữ nguyên, không invert
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="bg-[#333] px-3 py-1 rounded border border-white/10">
          <span className="font-bold text-sm tracking-tight">Harry Hoang</span>
        </div>
      </div>

      {/* Giữa*/}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
        <a href="#lecture-notes" className="hover:text-white hover:opacity-100 transition-all">
          Lecture notes
        </a>
      </div>

      {/* Phía bên phải */}
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium hidden sm:inline opacity-90">CE</span>
        {/* Container cho logo mới */}
        <div className="bg-white/90 p-1 rounded-sm flex items-center justify-center"> 
          <img 
            src="https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/458524088_2326614281007597_5202808658000640079_n.png?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_ohc=mHYqmS--oxYQ7kNvwHLQb2p&_nc_oc=AdnYVJqGer0UoAn0ZRG1MZmdZsMulaZ1s2c-G1b5k9UyINYnpKEfAYh0Wm_b-H1ej0z0JqqTQfFjnkz2P2uz7qU3&_nc_zt=23&_nc_ht=scontent.fsgn16-1.fna&_nc_gid=c8jK5kEBQy13l40RLAO3LQ&_nc_ss=8&oh=00_AfxpRbokJeI4oK9JROS6MOKLR7IBcJYJXgOp8bTCsVudNg&oe=69BF3AB2" 
            alt="Computer Engineering Logo" 
            className="w-8 h-8 object-contain" // Điều chỉnh kích thước (w-8 h-8) để logo vuông hiển thị cân đối
          
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </nav>
  );
};
