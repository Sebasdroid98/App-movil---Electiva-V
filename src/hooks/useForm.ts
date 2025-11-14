import { useState } from 'react';

export function useForm(initialValues: any) {
  const [values, setValues] = useState(initialValues);

  function handleChange(name: string, value: string) {
    setValues({ ...values, [name]: value });
  }

  return { values, handleChange };
}
