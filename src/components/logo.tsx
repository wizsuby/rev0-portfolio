"use client";
// import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

type Props = {
  size?: number;
};

const Logo = ({ size = 50 }: Props) => {
  // const { theme, systemTheme } = useTheme();

  return (
    <div>
      {/* <Image
        src={
          theme == "dark"
            ? "/logo-2.svg"
            : theme == "light"
            ? "/logo-dark.svg"
            : systemTheme === "dark"
            ? "/logo-2.svg"
            : "/logo-dark.svg"
        }
        height={size}
        width={size}
        alt=""
      /> */}
      <Image
        src="/logo-dark.svg"
        height={size}
        width={size}
        alt=""
      />
    </div>
  );
};

export default Logo;
