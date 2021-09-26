import React, { useMemo } from "react";
import { Form } from "informed";
import { useHomePage } from "../../hooks/useHomePage";
import TextInput from "../TextInput";
import defaultClasses from "./homePage.css";

const HomePage = () => {
  const hookProps = useHomePage();
  const {
    genderOptions,
    activityLevelOptions,
    goalOptions,
    handleOnChange,
    handleSubmit,
    age,
    weight,
    tall,
    result,
    isError,
  } = hookProps;

  const resultContent = result ? (
    <div className={defaultClasses.resultWrapper}>
      Twój wynik:
      <p className={defaultClasses.result}>{result} kcal</p>
    </div>
  ) : null;

  const errorContent = useMemo(
    () =>
      isError ? (
        <p className={defaultClasses.error}>Wypełnij wszytkie pola</p>
      ) : null,
    [isError]
  );

  return (
    <section className={defaultClasses.root}>
      <Form
        onChange={(formState) => handleOnChange(formState)}
        onSubmit={handleSubmit}
      >
        <TextInput
          field={"gender"}
          title={"Płeć"}
          type={"select"}
          options={genderOptions}
          isRequired={true}
        />
        <TextInput
          field={"age"}
          title={"Wiek"}
          type={"range"}
          isRequired={true}
          max={100}
          value={age}
        />
        <p>{age}</p>
        <TextInput
          field={"weight"}
          title={"Waga"}
          type={"range"}
          isRequired={true}
          max={200}
          value={weight}
        />
        <p>{weight}</p>
        <TextInput
          field={"tall"}
          title={"Wzrost"}
          type={"range"}
          isRequired={true}
          max={250}
          value={tall}
        />
        <p>{tall}</p>
        <TextInput
          field={"activity_level"}
          title={"Poziom aktywności"}
          type={"select"}
          options={activityLevelOptions}
          isRequired={true}
        />
        <TextInput
          field={"goal"}
          title={"Twój cel"}
          type={"select"}
          options={goalOptions}
          isRequired={true}
        />
        <div className={defaultClasses.buttonWrapper}>
          <button className={defaultClasses.button} type={"submit"}>
            Przelicz
          </button>
        </div>
      </Form>
      {resultContent}
      {errorContent}
    </section>
  );
};

export default HomePage;
