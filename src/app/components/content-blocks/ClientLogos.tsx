import React from "react";
import Image from "next/image";
import FadeIn from "../transition-wrappers/FadeIn"; // Import FadeIn component

// Props for the ClientLogos component
interface ClientLogosProps {
  images: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-16 gap-12 items-center w-fit mx-auto md:px-0 px-5">
      {images.map((item, index) => (
        <div className={` ${index === 4 ? "hidden xl:block" : ""}`}>
          <FadeIn key={index} delay={index * 0.2}>
            <div>
              <Image
                src={item}
                className="mx-auto"
                alt={"Client logo"}
                width={180} // Uniform width
                height={200} // Uniform height
              />
            </div>
          </FadeIn>
        </div>
      ))}
    </div>
  );
};

export default ClientLogos;
