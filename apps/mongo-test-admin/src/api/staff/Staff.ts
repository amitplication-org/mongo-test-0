import { JsonValue } from "type-fest";

export type Staff = {
  createdAt: Date;
  id: string;
  instagramUrl: string | null;
  linkedInUrl: string | null;
  resumeUrl: string | null;
  twitterUrl: string | null;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
