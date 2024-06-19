import React from "react";
import { Badge } from "@/components/ui/badge";
export default function Taged({
  tag,
  selected,
}: {
  tag: string;
  selected: boolean;
}) {
  return (
    <Badge
      className={`${selected ? "!bg-yellow-50 !text-orange-500 dark:!bg-gray-800 dark:!text-orange-500 " : ""} subtle-medium background-light800_dark300 text-light400_light500 items-center rounded-md border border-none border-transparent bg-slate-900 px-6 py-2 !text-sm   font-semibold shadow transition-colors hover:bg-slate-900/80 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/80 dark:focus:ring-slate-300`}
    >
      {tag}
    </Badge>
  );
}
