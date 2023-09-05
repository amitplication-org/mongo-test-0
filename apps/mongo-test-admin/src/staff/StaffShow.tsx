import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const StaffShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="InstagramUrl" source="instagramUrl" />
        <TextField label="LinkedInUrl" source="linkedInUrl" />
        <TextField label="ResumeUrl" source="resumeUrl" />
        <TextField label="TwitterUrl" source="twitterUrl" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
      </SimpleShowLayout>
    </Show>
  );
};
