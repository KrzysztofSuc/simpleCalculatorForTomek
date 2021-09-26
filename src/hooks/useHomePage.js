import { useCallback, useState } from "react";

export const useHomePage = () => {
  const genderOptions = [
    { label: "Mężczyzna", value: 1 },
    { label: "Kobieta", value: 2 },
  ];

  const activityLevelOptions = [
    { label: 1, value: 1 },
    { label: 1.2, value: "1.6" },
    { label: 1.4, value: "1.8" },
    { label: 1.6, value: "2" },
  ];

  const goalOptions = [
    { label: "Chcę schudnąć", value: -0.2 },
    { label: "Chcę zrobić masę", value: 0 },
  ];

  const [age, setAge] = useState(20);
  const [weight, setWeight] = useState(50);
  const [tall, setTall] = useState(150);
  const [result, setResult] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleOnChange = (formState) => {
    setAge(formState.values?.age ? formState.values.age : age);
    setWeight(formState.values?.weight ? formState.values.weight : weight);
    setTall(formState.values?.tall ? formState.values.tall : tall);
  };

  const handleSubmit = useCallback((formState) => {
    if (
      formState &&
      formState.gender &&
      formState.activity_level &&
      formState.goal
    ) {
      let result1 = null;
      let result2 = null;
      let result3 = null;
      if (formState.gender == 2) {
        setIsError(false);
        result1 = 66.5 + 9.6 * weight + 1.85 * tall - 4.7 * age;
        result2 = result1 * formState.activity_level;
        result3 = result2 * formState.goal + result2;
        setResult(Math.round(result3));
      } else {
        setIsError(false);
        result1 = 66.5 + 13.7 * weight + 5 * tall - 6.8 * age;
        result2 = result1 * formState.activity_level;
        result3 = result2 * formState.goal + result2;
        setResult(Math.round(result3));
      }
    } else setIsError(true);
  });

  return {
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
  };
};
