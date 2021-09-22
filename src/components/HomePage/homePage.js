import React from "react";
import { Form } from "informed";

import TextInput from "../TextInput";

const HomePage = () => {
  return (
    <section>
      <Form onChange={(formState) => console.log(formState)}>
        <TextInput
          field={"name"}
          fieldType={"text"}
          title={"Nazwa"}
          type={"text"}
          validateOnChange={true}
          isRequired={true}
        />
      </Form>
    </section>
  );
};

export default HomePage;
