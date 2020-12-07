import React from 'react';

export type LoginForm = {
  user_name: string;
  password: string;
};

type FormVals = LoginForm

const useFormState = <Vals extends FormVals>(initialValues: Vals) => {
  const [formFields, setFormFields] = React.useState(initialValues);

  const changeHandler = (key: keyof Vals) => (
    e: React.BaseSyntheticEvent,
  ) => {
    const { value } = e.target;
    setFormFields((prev) => ({ ...prev, [key]: value }));
  };

  return { formFields, setFormFields, changeHandler };
};

export default useFormState;
