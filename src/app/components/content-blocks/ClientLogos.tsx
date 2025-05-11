import React from "react";
import Image from "next/image";
import FadeIn from "../transition-wrappers/FadeIn"; // Use your existing FadeIn component

// Props for the ClientLogos component
interface ClientLogosProps {
  images: string[];
  alts: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ images, alts }) => {
  return (
    <FadeIn>
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-16 gap-12 items-center w-fit mx-auto md:px-0 px-5">
        {images.map((item, index) => (
          <div
            key={index}
            className={`${index === 4 ? "hidden xl:block" : ""}`}
          >
            <div>
              <Image
                src={item}
                className="mx-auto"
                alt={alts[index] || "Client logo"} // Use corresponding alt or fallback
                width={180} // Uniform width
                height={200} // Uniform height
              />
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export default ClientLogos;
