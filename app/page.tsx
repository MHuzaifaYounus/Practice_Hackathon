import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="slider w-full min-h-[500px] max-lg:pb-14 pt-1">
        <div className="container m-auto w-[79%] flex justify-evenly items-end max-lg:items-start max-2xl:min-w-full">
          <div className="left  w-[217px] h-[384px] border-r-[0.5px] border-black max-sm:hidden">
            <ul className="h-full w-full flex flex-col justify-evenly">
              <li className="w-[90%] flex justify-between items-center">Womans Fashion <span className="font-extrabold">&gt;</span></li>
              <li className="w-[90%] flex justify-between items-center">Mens Fashion <span className="font-extrabold">&gt;</span></li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Babys & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <div className="right bg-black w-[892px] min-h-[344px] flex  justify-between items-center text-white max-lg:w-[350px] max-lg:flex-col  max-sm:w-[90%]">
            <div className="text pl-[64px]  h-[344px] flex flex-col justify-evenly max-sm:w-full max-sm:pl-[30px]">
              <Image src={"/icons/applelogo.svg"} alt="no img found" width={190} height={49}></Image>
              <h1 className="text-5xl font-semibold w-[294px] max-sm:text-4xl max-sm:w-[80%]">Up to 10% off Voucher</h1>
              <button className="font-medium w-[113px] h-[28px] flex justify-between"><span className="underline">Shop Now</span> --&gt;</button>
            </div>
            <Image src={"/img/sliderimg.svg"} alt="no img found" width={496} height={344}></Image>
          </div>

        </div>

      </div>
      <div className="section2 w-[79%] min-h-[600px] border-b-[0.5px] border-gray-500 mb-3 m-auto max-sm:w-[90%]">
        <div className="top text-secondary font-semibold w-[100px] flex justify-between items-center">
          <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary">Todays</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-3xl">Flash Sales</h1>
          <div className="arrows w-[100px] max-sm:w-[80px] max-sm:h-[32px] flex justify-between">
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5] flex justify-center items-center"><Image src={"/icons/leftarrow.svg"} alt="not found" width={24} height={24}></Image></div>
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5]  flex justify-center items-center"><Image src={"/icons/rightarrow.svg"} alt="not found" width={24} height={24}></Image></div>
          </div>

        </div>
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-40%</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                Add to cart
              </Button>

              <Image src={"/img/frame11.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">HAVIT HV-G92 Gamepad</h2>
              <p className="text-mysecondary font-medium">$120 <span className="text-gray-600 line-through">$190</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(89)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-36%</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame12.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">AK-900 Wired Keyboard</h2>
              <p className="text-mysecondary font-medium">$150 <span className="text-gray-600 line-through">$160</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(89)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-30%</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame13.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">IPS LCD Gaming Monitor</h2>
              <p className="text-mysecondary font-medium">$370 <span className="text-gray-600 line-through">$400</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(43)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mysecondary" size={"sm"}>-25%</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame14.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">S-Series Comfort Chair </h2>
              <p className="text-mysecondary font-medium">$325 <span className="text-gray-600 line-through">$400</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
            </CardContent>
          </Card>

        </div>
        <div className="w-full flex justify-center">
          <Button className="font-medium bg-mysecondary mt-10 mb-10 h-[56px] w-[234px]">View All Products</Button>

        </div>

      </div>
      <div className="section3 w-[79%] min-h-[430px] border-b-[0.5px] border-gray-500 pb-8 m-auto pt-12 max-sm:w-[90%]">
        <div className="top text-secondary font-semibold  flex  items-center">
          <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-4">Categories</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-xl">Browse By category</h1>
          <div className="arrows w-[100px] max-sm:w-[80px] max-sm:h-[32px] flex justify-between">
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5] flex justify-center items-center"><Image src={"/icons/leftarrow.svg"} alt="not found" width={24} height={24}></Image></div>
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5]  flex justify-center items-center"><Image src={"/icons/rightarrow.svg"} alt="not found" width={24} height={24}></Image></div>
          </div>

        </div>
        <div className="items-box w-full flex justify-between mt-12 flex-wrap max-sm:justify-center">
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-CellPhone.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Phones</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Computer.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Computers</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-SmartWatch.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">SmartWatch</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Camera.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Camera</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Headphone.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Headphone</h2>
            </CardContent>
          </Card>
          <Card className="mt-5 max-sm:ml-3">
            <CardContent className="flex flex-col justify-center items-center w-[170px] h-[145px] pb-0">
              <Image src={"/icons/Category-Gamepad.svg"} alt="no img found" width={56} height={56}></Image>
              <h2 className="font-medium pt-3">Gamepad</h2>
            </CardContent>
          </Card>



        </div>
      </div>
      <div className="section4 w-[79%] min-h-[600px] pb-8 m-auto pt-12 max-sm:w-[90%]">
        <div className="top text-secondary font-semibold flex  items-center">
          <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-4">This Month</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-xl">Best Selling Products</h1>

          <Button className="bg-mysecondary h-[56px] w-[159px] max-sm:w-[110px] max-sm:h-[40px] ">View All</Button>


        </div>
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                Add to cart
              </Button>

              <Image src={"/img/frame41.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">The north coat</h2>
              <p className="text-mysecondary font-medium">$260 <span className="text-gray-600 line-through">$360</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(65)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame42.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Gucci duffle bag</h2>
              <p className="text-mysecondary font-medium">$960 <span className="text-gray-600 line-through">$1160</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(65)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame43.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">RGB liquid CPU Cooler</h2>
              <p className="text-mysecondary font-medium">$160 <span className="text-gray-600 line-through">$170</span></p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(65)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame44.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Small BookShelf</h2>
              <p className="text-mysecondary font-medium">$360 </p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
      <div className="click_section w-[79%] max-xl:w-[95%] max-lg:flex-col m-auto mt-20 mb-10 min-h-[500px] flex items-center justify-around bg-black text-white">
        <div className="text  w-[40%] h-[500px] flex flex-col pl-20 justify-around max-lg:w-full max-lg:h-[400px] max-sm:pl-2 max-sm:items-center">
          <h2 className="text-mytertiary font-semibold">Categories</h2>
          <h1 className="font-semibold text-5xl max-sm:text-3xl max-sm:text-center">Enhance Your Music Experience</h1>
          <div className="timer w-[320px] flex justify-between max-sm:w-[90%]">
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-black">
              <h3 className="font-semibold">23</h3>
              <p className="text-xs">Hours</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-black">
              <h3 className="font-semibold">05</h3>
              <p className="text-xs">Days</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-black">
              <h3 className="font-semibold">59</h3>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center text-black">
              <h3 className="font-semibold">35</h3>
              <p className="text-xs">Seconds</p>
            </div>
          </div>
          <Button className="bg-mytertiary h-[56px] w-[171px] font-medium max-sm:h-[50px] max-sm:w-[150px]">Buy Now</Button>
        </div>
        <div className="img   w-[60%] h-[500px] flex justify-center items-center max-lg:w-full max-sm:h-[350px] relative">
          <div className="shine absolute w-[80%] h-[80%] blur-3xl rounded-full opacity-45 bg-white"></div>
          <Image src={"/img/speaker.svg"} className="z-10" alt="no img fond" width={600} height={420}></Image>
        </div>

      </div>
      <div className="section5 w-[69%] min-h-[600px] border-b-[0.5px] border-gray-500 mb-3 m-auto pt-12 max-sm:w-[90%]">
        <div className="top text-secondary font-semibold  flex  items-center">
          <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-4">Our Products</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-xl">Explore Our Products</h1>
          <div className="arrows w-[100px] max-sm:w-[80px] max-sm:h-[32px] flex justify-between">
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5] flex justify-center items-center"><Image src={"/icons/leftarrow.svg"} alt="not found" width={24} height={24}></Image></div>
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5]  flex justify-center items-center"><Image src={"/icons/rightarrow.svg"} alt="not found" width={24} height={24}></Image></div>
          </div>

        </div>
        <div className="items-box w-full flex justify-between mt-4 flex-wrap max-sm:justify-center">
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute bottom-0 left-0 w-full h-[41px] rounded-none font-medium ">
                Add to cart
              </Button>

              <Image src={"/img/frame51.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Breed Dry Dog Food</h2>
              <p className="text-mysecondary font-medium">$100</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(35)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame52.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">CANON EOS DSLR Camera</h2>
              <p className="text-mysecondary font-medium">$360</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(59)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame53.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">ASUS FHD Gaming Laptop</h2>
              <p className="text-mysecondary font-medium">$700 </p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(63)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame54.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Curology Product Set </h2>
              <p className="text-mysecondary font-medium">$500 </p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(63)</p>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mytertiary" size={"sm"}>New</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame55.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Kids Electric car</h2>
              <p className="text-mysecondary font-medium">$960</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
              <div className="colors flex pt-2">
                <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
                <div className="h-5 w-5 rounded-full bg-mysecondary ml-2"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame56.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Jr. Zoom Soccer Cleats</h2>
              <p className="text-mysecondary font-medium">$1160</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
              <div className="colors flex pt-2">
                <div className="h-5 w-5 rounded-full bg-green-500"></div>
                <div className="h-5 w-5 rounded-full bg-pink-500 ml-2"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">
              <Button className="absolute top-2 left-2 bg-mytertiary" size={"sm"}>New</Button>
              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame57.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">GP11 Shooter USB Gamepad</h2>
              <p className="text-mysecondary font-medium">$660</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
              <div className="colors flex pt-2">
                <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                <div className="h-5 w-5 rounded-full bg-orange-700 ml-2"></div>
              </div>
            </CardContent>
          </Card>
          <Card className="overflow-hidden w-[270px] mt-10">
            <CardHeader className="w-[270px] h-[250px] bg-myGray flex justify-center items-center relative">

              <Button className="absolute top-2 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/WishList.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Button className="absolute top-14 right-2 max-sm:right-4 rounded-full" variant={"secondary"} size={"sm"}>
                <Image src={"/icons/eye.svg"} alt="no icon found" width={24} height={24}></Image>
              </Button>
              <Image src={"/img/frame58.svg"} alt="no img found" width={190} height={180}></Image>
            </CardHeader>
            <CardContent>
              <h2 className="font-medium pt-3">Quilted Satin Jacket</h2>
              <p className="text-mysecondary font-medium">$260</p>
              <div className="stars w-[140px] flex">
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/fillstar.svg"} alt='no icon found' height={20} width={20}></Image>
                <Image src={"/icons/star.svg"} alt='no icon found' height={20} width={20}></Image>

                <p className="text-gray-600">(90)</p>
              </div>
              <div className="colors flex pt-2">
                <div className="h-5 w-5 rounded-full bg-yellow-500"></div>
                <div className="h-5 w-5 rounded-full bg-red-500 ml-2"></div>
              </div>
            </CardContent>
          </Card>

        </div>
        <div className="w-full flex justify-center">
          <Button className="font-medium bg-mysecondary mt-10 mb-10 h-[56px] w-[234px]">View All Products</Button>

        </div>

      </div>

      <div className="section6 w-[69%] min-h-[600px] mb-3 m-auto pt-12 max-xl:w-[90%]">
        <div className="top text-secondary font-semibold  flex  items-center">
          <div className="w-5 h-10 bg-mysecondary rounded-md"></div>
          <h1 className="text-mysecondary pl-4">Featured</h1>
        </div>
        <div className="title w-full flex justify-between mt-3">
          <h1 className="text-4xl font-semibold max-sm:text-xl">New Arival</h1>
          <div className="arrows w-[100px] max-sm:w-[80px] max-sm:h-[32px] flex justify-between">
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5] flex justify-center items-center"><Image src={"/icons/leftarrow.svg"} alt="not found" width={24} height={24}></Image></div>
            <div className="w-[46px] h-[46px] max-sm:w-[32px] max-sm:h-[32px] rounded-full bg-[#F5F5F5]  flex justify-center items-center"><Image src={"/icons/rightarrow.svg"} alt="not found" width={24} height={24}></Image></div>
          </div>

        </div>
        <div className="items-box w-full min-h-[600px] grid grid-cols-4 grid-rows-2 gap-10 mt-12 max-lg:grid-rows-3 max-sm:grid-cols-1 max-sm:grid-rows-4">
          <div className="bg-black col-span-2 row-span-2 flex items-end justify-center relative max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 bottom-10 w-[242px] text h-[122px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">PlayStation 5</h1>
              <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame61.svg"} alt="no img found" width={511} height={511}></Image>
          </div>
          <div className="bg-black relative col-span-2 flex justify-end max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 bottom-10 w-[242px] text h-[122px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Womens Collection</h1>
              <p className="text-sm">Featured woman collections that give you another vibe.</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame62.svg"} alt="no img found" width={432} height={266}></Image>
          </div>
          <div className="bg-black relative flex justify-center items-center max-lg:col-span-2 max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 max-xl:left-5 bottom-10 w-[242px] text h-[85px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Speakers</h1>
              <p className="text-sm">Amazon wireless speakers</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame63.svg"} alt="no img found" width={210} height={222}></Image>
          </div>
          <div className="bg-black relative flex justify-center items-center max-lg:col-span-4 max-sm:col-span-1 max-sm:row-span-1">
            <div className="absolute left-10 max-xl:left-5 bottom-10 w-[242px] text h-[85px] flex flex-col justify-between items-start text-white">
              <h1 className="text-2xl font-semibold">Perfume</h1>
              <p className="text-sm">GUCCI INTENSE OUD EDP</p>
              <button className="font-medium underline">Shop Now</button>
            </div>
            <Image src={"/img/frame64.svg"} alt="no img found" width={210} height={222}></Image>
          </div>


        </div>
        <div className="w-full flex justify-evenly items-center mt-20 mb-20 flex-wrap ">
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/Icon-secure.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">24/7 CUSTOMER SERVICE</h1>
            <p className="text-sm">Friendly 24/7 customer support</p>
          </div>
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/Icon-Customer.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">MONEY BACK GUARANTEE</h1>
            <p className="text-sm">We reurn money within 30 days</p>
          </div>
          <div className="item w-[249px] h-[161px] flex flex-col justify-between items-center mt-10 ">
            <div className="w-[80px] h-[80px] rounded-full bg-black border-8 border-gray-400 flex justify-center items-center">
              <Image src={"/icons/icon-delivery.svg"} alt="no icon found" width={40} height={40}></Image>
            </div>
            <h1 className="font-semibold text-xl">FREE AND FAST DELIVERY</h1>
            <p className="text-sm">Free delivery for all orders over $140</p>
          </div>


        </div>

      </div>

    

    </div>
  );
}
