import React from "react";
import InputField from "../components/InputField";

function Work({ index }: { index: number }) {
  return (
    <>
      <InputField name={`work[${index}].jobTitle`} label="Job Title" type="text" />
      <InputField name={`work[${index}].jobCity`} label="City" type="text" />
      <InputField name={`work[${index}].employer`} label="Employer" type="text" />
    </>
  );
}

export default Work;
