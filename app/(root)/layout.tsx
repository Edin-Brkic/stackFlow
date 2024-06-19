import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/leftsidebar/LeftSidebar";
import RightSidebar from "@/components/shared/leftsidebar/RightSidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="custom-scrollbar flex min-h-screen flex-1 flex-col overflow-y-auto px-6 pb-6 pt-36 max-md:!px-5 max-md:pb-14 sm:px-14">
          <div className="max-2-5xl mx-auto w-full ">{children}</div>
        </section>
        <RightSidebar />
      </div>
    </main>
  );
}
