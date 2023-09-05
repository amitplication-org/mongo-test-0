import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const StaffEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="InstagramUrl" source="instagramUrl" />
        <TextInput label="LinkedInUrl" source="linkedInUrl" />
        <TextInput label="ResumeUrl" source="resumeUrl" />
        <TextInput label="TwitterUrl" source="twitterUrl" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
