import React from "react";
import Question from "./Question";
import Tag from "./Tag";
export default function RightSidebar() {
  return (
    <section className="background-light900_dark200 custom-scrollbar sticky right-0 top-0 z-0 hidden h-screen overflow-y-auto pb-6 pt-36  shadow-sm xl:block">
      <section className="flex flex-col gap-7 px-6 ">
        <p className="h3-bold text-dark200_light900">Top Questions</p>
        <Question texted="Would it be appropriate to point out an error in another paper during a referee report?" />
        <Question texted="How can an airconditioning machine exist?" />
        <Question texted="Interrogated every time crossing UK Border as citizen" />
        <Question texted="Low digit addition generator" />
        <Question texted="What is an example of 3 numbers that do not make up a vector?" />
      </section>
      <section className=" mt-7 flex flex-col gap-4 px-6">
        <p className="h3-bold text-dark200_light900">Popular Tags</p>
        <Tag tag="nextjs" num="32" />
      </section>
    </section>
  );
}
