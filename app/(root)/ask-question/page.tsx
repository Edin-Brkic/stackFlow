import Question from "@/components/forms/Question";
import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getUserById } from "@/lib/actions/user.action";

export default async function AskQuestion() {
  const { userId } = auth();
  console.log(userId);
  // if (!userId) redirect("/sign-in");
  const mongoUser = await getUserById({ userId });
  const mongoUserId = mongoUser._id.toString();

  console.log(mongoUserId);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light-900">Ask a question</h1>
      <div className="mt-9">
        <Question mongoUserId={mongoUserId} />
      </div>
    </div>
  );
}
