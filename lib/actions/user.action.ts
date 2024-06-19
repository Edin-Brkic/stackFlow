"use server";

import { connectToDatabase } from "../mongoose";
import User, { UserDocument } from "@/database/user.model";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    const updatedUser = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User not found");
    }

    revalidatePath(path);
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    const { clerkId } = params;

    // Find and delete the user
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // Delete questions associated with the user
    await Question.deleteMany({ author: user._id });

    // Delete answers (if applicable)
    const deletedUser = await User.findByIdAndDelete(user._id);

    if (!deletedUser) {
      throw new Error("Failed to delete user");
    }

    return deletedUser;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

/*
"use server";

import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {}
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
  } catch (error) {}
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();
    //  delete all user data
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    const userQuestions = await Question.find({ author: user._id }).distinct(
      "._id"
    );
    await Question.deleteMany({ author: User._id });
    //  delete answers
    const deletedUser = await User.findByIdAndDelete(user._id);
    return deletedUser;
  } catch (error) {}
}
*/
