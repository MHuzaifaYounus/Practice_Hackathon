import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="header-top bg-black h-12 w-full flex justify-center items-center max-md:h-24">

        <div className=" flex w-[79%] justify-center items-center relative max-lg:w-full max-md:flex-col max-md:justify-evenly">
          <h1 className="text-sm font-normal text-white max-md:w-[300px] text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="underline decoration-solid ">ShopNow</span></h1>
          <div className="h-full absolute right-0 w-[78px] flex justify-between text-white max-md:relative  " >
            <h1 className="text-sm ">English</h1>
            <Image src={"/icons/DropDown.svg"} alt="no icon found" width={24} height={24}></Image>

          </div>

        </div>
      </div>

      <div className="header w-full border-b-[0.5px] border-gray-500 ">

        <div className="container h-[38px] w-[79%] mt-10 mb-[13px] m-auto flex justify-between items-center max-lg:min-w-[90%]">
        <h1 className="text-2xl font-bold ">Exclusive</h1>
        <ul className="flex justify-between w-[33.3%] h-6 max-md:hidden">
          <li className="active"><Link href={"/"}>Home</Link></li>
          <li><Link href={"/"}>Contact</Link></li>
          <li><Link href={"/"}>About</Link></li>
          <li><Link href={"/signup"}>Sign Up</Link></li>
        </ul>

        <div className="w-[347px] h-[38px] flex justify-between items-center max-sm:w-[100px]">
          <div className="h-full w-[243px] flex justify-evenly bg-[#F5F5F5] py-[7px] pr-[12px] pl-[20px] max-sm:hidden">
            <input type="search" className="w-[90%] h-full bg-transparent text-sm border-none outline-none"  placeholder="What are you looking for?"/>
            <Image src={"/icons/search.svg"} alt="no icon found" width={24} height={24}></Image>

          </div>
          <Image src={"/icons/WishList.svg"} alt="no icon found" width={32} height={32}></Image>
          <Image src={"/icons/cart.svg"} alt="no icon found" width={32} height={32}></Image>
        </div>

        </div>

      </div>
     

    </div>
  )
}

export default Header