import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  buttonText: string;
}

const Card = ({ imageSrc, title, content, buttonText }: CardProps) => {
  return (
    <div className="border border-[#0864B7] p-4 flex flex-col items-center">
      <div className="mb-4">
        <Image
          src={imageSrc}
          className="w-12 h-12"
          alt=""
          width={50}
          height={50}
        ></Image>
      </div>

      <h1 className="font-TTFb text-[22px] text-[#0864B7] ">{title}</h1>

      <p className="text-left font-TTFn p-4 mb-6">{content}</p>

      <div className="bg-[#0864B7] text-white overflow-hidden mb-[5px] py-[11px] px-[8px] w-fit cursor-pointer">
        <div className="font-TTF text-[14px] sm:text-[16x] md:text-[16px] lg:text-[16px]">
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default Card;
