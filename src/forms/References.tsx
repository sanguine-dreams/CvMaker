import InputField from "../components/InputField";
import { Flex } from "antd";

function References({ index }: { index: number }) {
  return (
    <Flex vertical>
      <InputField name={`reference${index}`} label={`Reference #${index+1}`} type="text" />
      <InputField name={`contact${index}`} label={`Reference #${index+1} Contact`} type="text" />

    </Flex>
  );
}

export default References;
