import { useState } from 'react';

const useKeyValue = () => {
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const keyValue = event.target.value;
    const arrayKeyValue = keyValue.split(':');
    const [searchedKey, searchedValue] = arrayKeyValue;

    setKey(searchedKey);
    setValue(searchedValue);
  };
  return {
    key,
    value,
    handleChange,
    handleSubmit
  };
};
export default useKeyValue;
