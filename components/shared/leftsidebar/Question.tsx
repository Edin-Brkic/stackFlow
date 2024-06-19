import Image from "next/image";
import React from "react";

export default function Question({ texted }: { texted: string }) {
  return (
    <div className="text-dark500_light700 body-medium flex w-72 items-center  justify-between">
      <span className="w-64">{texted}</span>

      <Image
        className="hidden dark:block"
        src="/assets/icons/arrow-right.svg"
        alt="right_arrow"
        height={20}
        width={20}
      />
      <Image
        className="block dark:hidden"
        src="/assets/icons/arrow-right-dark.svg"
        alt="right_arrow"
        height={20}
        width={18}
      />
    </div>
  );
}
