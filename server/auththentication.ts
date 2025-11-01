"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function signUpUser({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) {
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
    },
  });
  try {
    if (data) {
      return {
        success: true,
        message: "User signed up successfully",
      };
    }
    if (!data) {
      return {
        success: false,
        message: "User signed up failed",
      };
    }
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    throw new Error(`User signed up failed: ${err.message}`);
  }
}

export async function signInUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
      //   rememberMe: true,
      //   callbackURL: "https://example.com/callback",
    },
    // This endpoint requires session cookies.
    headers: await headers(),
  });
  try {
    if (data) {
      return {
        success: true,
        message: "User signed in successfully",
      };
    }
    if (!data) {
      return {
        success: false,
        message: "User signed in failed",
      };
    }
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    throw new Error(`User signed in failed: ${err.message}`);
  }
}
