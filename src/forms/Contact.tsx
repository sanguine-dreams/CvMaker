
import InputField from "../components/InputField";


function Contact() {
  return (
    <>
      <InputField name="name" label="Full Name" type="text" />

      <InputField name="email" label="E-mail" type="email" />
      <InputField name="phone" label="Phone Number" type="text" />
    </>
  );
}

export default Contact;
