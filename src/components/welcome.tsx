import { getHomeInfo } from "@/lib/getHomeInfo"
import Image from "next/image";
const { BlocksRenderer } = require("@strapi/blocks-react-renderer")

export const Welcome = async () => {

  const { homeInfo } = getHomeInfo();
  const { title, description, image } = await homeInfo();
  return (
    <div className="relative">
      <Image className=" w-full h-[600px]"
        src={image}
        width={600}
        height={600}
        alt="Audioplannar logo"
      />
      {/* <img
        src="{{image}}"
        alt="Hero"
        className="w-full h-[600px] object-cover"
      /> */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center w-1/2 text-white">
          <h1 className="text-5xl font-bold mb-14">{title}</h1>
          <div className="text-xl mb-8"><BlocksRenderer content={description} /></div>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Ver Audífonos
          </button>
        </div>
      </div>
    </div>
  );

}