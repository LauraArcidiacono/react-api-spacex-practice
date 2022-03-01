import { useState } from 'react';

const useKeyValue = () => {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSelect = (event) => {
    setKey(event.target.value);
  };

  return {
    key,
    value,
    handleChange,
    handleSelect,
    handleSubmit
  };
};
export default useKeyValue;
