import React from "react";
import LeftSidebarTag from "../leftsidebar/Tag"; // Rename the imported Tag component
import Image from "next/image";
import moment from "moment";

function mom(date: string) {
  const currentDate = moment();
  const dateToCompare = moment(date); // moment can handle both formats
  return currentDate.diff(dateToCompare, "days");
}

// Rename the interface to avoid conflict with imported Tag
interface TagData {
  _id: number;
  name: string;
}

// Define the interface for the Author object
interface Author {
  _id: number;
  name: string;
  picture: string;
}

// Define the interface for the main Question object
interface Question {
  _id: number;
  title: string;
  tags: TagData[]; // Use renamed TagData interface here
  author: Author; // Make author mandatory
  votes: number;
  answers: number;
  views: number;
  date: string;
}

// Define the props interface for the React component
interface QuestionProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionProps> = ({ question }) => {
  const { title, author, votes, answers, views, date } = question;
  const tags = question.tags;

  return (
    <div className="dark:dark-gradient text-dark200_light900 rounded-xl px-11 py-9 shadow-md max-sm:!px-1">
      <p className="h3-bold">{title}</p>
      <div className="mb-6 mt-[14px] flex flex-wrap items-start gap-2">
        {tags.map((tag) => (
          <div key={tag._id}>
            <LeftSidebarTag tag={tag.name} /> {/* Use renamed component here */}
          </div>
        ))}
      </div>
      <section className="text-dark400_light700 flex flex-wrap items-center justify-between text-sm max-md:block">
        <div className="flex gap-1">
          <div className="items-center pt-[2px] text-center">
            {author && (
              <Image
                className="rounded-full"
                height={16}
                width={16}
                alt="user-image"
                src={author.picture}
              />
            )}
          </div>
          <span>
            {author && author.name}{" "}
            <span className="text-[0.70rem]">• asked {mom(date)} days ago</span>
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-1">
            <Image
              alt="votes"
              src="/assets/icons/like.svg"
              height={16}
              width={16}
            />
            <span className="text-nowrap text-[0.78rem]">{votes} Votes</span>
          </div>

          <div className="flex gap-1">
            <Image
              alt="answers"
              src="/assets/icons/message.svg"
              height={16}
              width={16}
            />
            <span className="text-nowrap text-[0.78rem]">
              {answers} Answers
            </span>
          </div>

          <div className="flex gap-1">
            <Image
              alt="views"
              src="/assets/icons/eye.svg"
              height={16}
              width={16}
            />
            <span className="text-nowrap text-[0.78rem]">{views} Views</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionCard;
