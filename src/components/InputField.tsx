import React from "react";
import { useField } from "formik";
import Input from "antd/es/input/Input";
import { Flex } from "antd";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

function InputField({...props }: InputFieldProps) {
  const [field, meta] = useField({ ...props});

  return (
    <Flex vertical>
        <label>{props.label}</label>
        <Input {...field} name={props.name} aria-label={props.label} type={props.type} size="large" style={{width: '100%'}}/>
  
      {meta.touched && meta.error ? (
        <p className="error" style={{color: 'red'}}>{meta.error}</p>
      ) : null}
    </Flex>
  );
}

export default InputField;
