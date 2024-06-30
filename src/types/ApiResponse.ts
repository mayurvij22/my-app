import { Message } from "./../model/User";

export interface ApiResponse {
  success: boolean;
  message: string;
  isAccesptingMessaage?: boolean;

  messages?: Array<Message>;
}
