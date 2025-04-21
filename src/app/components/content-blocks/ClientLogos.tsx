import React from "react";
import Image from "next/image";
// Props for the ClientLogos component
interface ClientLogosProps {
  images: string[];
}

const ClientLogos: React.FC<ClientLogosProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-8 items-center">
      {images.map((item, index) =>
        index == 4 ? (
          <div className="hidden xl:inline" key={index}>
            <Image
              src={item}
              className="mx-auto"
              alt={"dd"}
              width={207}
              height={200}
            />
          </div>
        ) : (
          <div style={{}} className="">
            <Image
              key={index}
              src={item}
              className="mx-auto"
              alt={"dd"}
              width={207}
              height={200}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ClientLogos;
