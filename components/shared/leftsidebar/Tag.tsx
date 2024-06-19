import React from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface TagProps {
  tag: string;
  num?: number; // Num treba da bude tipa number, ne string
}

const Tag: React.FC<TagProps> = ({ tag, num }) => {
  return (
    <Link href={`/tags/${encodeURIComponent(tag)}`} passHref>
      <a className="flex justify-between gap-2">
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 inline-flex items-center rounded-md border border-none border-transparent bg-slate-900 px-4 py-2 text-xs font-semibold uppercase shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300">
          {tag}
        </Badge>
        <p className="small-medium text-dark500_light700">{num}</p>
      </a>
    </Link>
  );
};

export default Tag;
