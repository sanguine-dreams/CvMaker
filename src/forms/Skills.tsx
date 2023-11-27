import React from "react";
import InputField from "../components/InputField";

function Skills({ index }: { index: number }) {
  return (
    <>
      <InputField name={`skills.${index}`} label="Skill" type="text" />

    </>
  );
}

export default Skills;
