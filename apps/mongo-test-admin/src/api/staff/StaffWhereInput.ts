import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StaffWhereInput = {
  id?: StringFilter;
  instagramUrl?: StringNullableFilter;
  linkedInUrl?: StringNullableFilter;
  resumeUrl?: StringNullableFilter;
  twitterUrl?: StringNullableFilter;
};
