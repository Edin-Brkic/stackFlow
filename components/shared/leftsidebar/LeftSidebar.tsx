"use client";
import React from "react";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
export default function LeftSidebar() {
  const pathname = usePathname();
  return (
    <section className=" custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between  overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <section className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <div key={item.route}>
              <Link
                href={item.route}
                className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4 max-sm:w-14 max-sm:gap-0`}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p
                  className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden `}
                >
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
      </section>
      <SignedIn>
        <div>
          <Link href="/log-out">
            <Button
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4
                   py-3"
            >
              <span className="primary-text-gradient">Log out</span>
            </Button>
          </Link>
        </div>
      </SignedIn>
      <SignedOut>
        <div>
          <Link href="/sign-in">
            <Button
              className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4
                   py-3"
            >
              <span className="primary-text-gradient max-lg:hidden">
                Log in
              </span>
              <Image
                src="/assets/icons/account.svg"
                alt="Login"
                height={20}
                width={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
        </div>
        <div className="mt-3">
          <Link href="/sign-up">
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg
                   px-4 py-3"
            >
              <span className="max-lg:hidden">Sign up</span>
              <Image
                src="/assets/icons/sign-up.svg"
                alt="Signup"
                height={20}
                width={20}
                className="invert-colors lg:hidden"
              />
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
}
