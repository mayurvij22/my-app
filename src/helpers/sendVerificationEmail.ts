import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: String
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
      from: "you@example.com",
      to: email,
      subject: "Verfiivation code ",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: false, message: "Pass" };
  } catch (emailError) {
    console.error("Error Sending Problem");

    return { success: false, message: "failed" };
  }
}
