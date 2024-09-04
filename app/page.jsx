import Image from "next/image";
import home_bird from '@/public/img/home_bird.png'
import sweat_photo from '@/public/img/sweat_photo.jpg';
import blog_image from '@/public/img/Blogging-Future-in-India.jpg'

export default function Home() {
  return (
    <div className="container flex flex-col md:flex-row gap-5 h-[calc(100vh-4rem)]">
      <div className="basis-full flex flex-col justify-center md:basis-2/3">
        <p className="special-word text-xs">Upload Your Blog</p>
        <h1 className="pb-5">
          Welcome to <span className="special-word">Our Blog </span><br /> 
          <span className="special-word">Website </span>
        </h1>
        <p>Stay ahead of the curve with the latest updates in technology, gadgets, and software development.</p>
      </div>

      {/* Right-aligned image */}
      <div className="flex  justify-end items-center hidden md:flex basis-1/3">
        <Image 
          src={sweat_photo}  
          alt="Home bird"
          sizes="100vw"
          className="rounded-full object-cover w-100 h-100" // Ensure the image has equal width and height
        />
      </div>
    </div>
  );
}
