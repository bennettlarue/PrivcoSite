import React from "react";
import RowPadding from "./content-containers/RowPadding";
import SectionColor from "./content-blocks/SectionColor";
import Image from "next/image";
import FlexRow from "./content-containers/Flexrow";

const Footer: React.FC = ({}) => {
  return (
    <div>
      <SectionColor backgroundColor="#043873" textColor="#FFFFFF">
        <RowPadding>
          <div className="flex flex-col md:flex-row gap-12 w-full justify-between">
            <div className="gap-4 flex flex-col">
              <Image
                src={"/images/logo.png"}
                alt={"privco logo"}
                width={200}
                height={100}
                className="object-cover md:w-[200px] w-[150px]"
              />
              <div>
                <h5 className="font-bold">Address:</h5>
                <p>Level 1, 12 Sample St, Sydney NSW 2000</p>
              </div>

              <div>
                <h5 className="font-bold">Contact:</h5>
                <ul>
                  <li>1800 123 4567</li>
                  <li>info@relume.io</li>
                </ul>
              </div>

              <div className="flex gap-5 items-center">
                <Image
                  src={"/images/svgs/facebook.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                  className="object-cover"
                />

                <Image
                  src={"/images/svgs/instagram.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                  className="object-cover"
                />

                <Image
                  src={"/images/svgs/x.svg"}
                  alt={"facebook logo"}
                  width={24}
                  height={24}
                  className="object-cover"
                />

                <Image
                  src={"/images/svgs/youtube.svg"}
                  alt={"youtube logo"}
                  width={50}
                  height={50}
                  className="object-cover w-[24px]"
                />
              </div>
            </div>

            <div className="flex gap-20">
              <ul className="gap-3 flex flex-col">
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
                <li>Link 4</li>
                <li>Link 5</li>
              </ul>
              <ul className="gap-3 flex flex-col">
                <li>Link 6</li>
                <li>Link 7</li>
                <li>Link 8</li>
                <li>Link 9</li>
                <li>Link 10</li>
              </ul>
            </div>
          </div>
        </RowPadding>
      </SectionColor>
    </div>
  );
};

export default Footer;
