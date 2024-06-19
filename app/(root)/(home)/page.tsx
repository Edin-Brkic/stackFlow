import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import LocalSearch from "../../../components/shared/localSearch/LocalSearch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Taged from "@/components/shared/components/Taged";
import Question from "@/components/shared/questions/Question";
import Image from "next/image";
import { getQuestions } from "@/lib/actions/question.action";

export default async function Home() {
  const result = await getQuestions({});

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:!block max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <div className="max-w-44 rounded-xl px-4 max-md:px-0 max-sm:!mt-6 max-sm:!p-0 md:hidden">
          <Select>
            <SelectTrigger className="paragraph-regular no-focus placeholder text-dark400_light700 min-h-[56px] w-full">
              <SelectValue placeholder="Select a filter" />
            </SelectTrigger>
            <SelectContent className="paragraph-regular text-dark400_light700">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="recommended">Recommended</SelectItem>
              <SelectItem value="frequent">Frequent</SelectItem>
              <SelectItem value="unanswered">Unanswered</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="mt-10 hidden items-center gap-3 md:flex">
        <Taged tag="Newest" selected={true} />
        <Taged tag="Recommended" selected={false} />
        <Taged tag="Frequent" selected={false} />
        <Taged tag="Unanswered" selected={false} />
      </div>
      <div className="mt-10 flex flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((question) => (
            <Question key={question._id} question={question} />
          ))
        ) : (
          <div className="flex   flex-col items-center justify-center gap-7">
            <Image
              src="/assets/images/dark-illustration.png"
              alt="picture"
              height={250}
              width={250}
              className="hidden dark:block"
            />
            <Image
              src="/assets/images/light-illustration.png"
              alt="picture"
              height={250}
              width={250}
              className="dark:hidden"
            />
            <p className="text-dark100_light900 h2-bold">
              There’s no question to show
            </p>
            <p className="text-dark300_light700 h-4 max-w-96">
              Be the first to break the silence! 🚀 Ask a Question and kickstart
              the discussion. our query could be the next big thing others learn
              from. Get involved! 💡
            </p>
            <Button className="primary-gradient mt-16 min-h-[46px] px-4 py-3 !text-light-900">
              Ask Question
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
