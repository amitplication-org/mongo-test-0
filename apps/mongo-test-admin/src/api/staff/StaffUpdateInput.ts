import { InputJsonValue } from "../../types";

export type StaffUpdateInput = {
  instagramUrl?: string | null;
  linkedInUrl?: string | null;
  resumeUrl?: string | null;
  twitterUrl?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
