
import InputField from "../components/InputField";


function Edu({ index }: { index: number }) {
  return (
    <>
      <InputField name={`edu[${index}].degree`} label="Degree" type="text" />
      <InputField name={`edu[${index}].eduCity`} label="City" type="text" />
      <InputField name={`edu[${index}].school`} label="School" type="text" />

    </>
  );
}

export default Edu;
