import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <label className="block relative md:w-2/6 my-3 md:my-0">
      {/* for debounce */}
      <input
        type="search"
        name="search"
        className="w-full text-black relative py-2 px-4 outline-none block focus:outline-transparent shadow-md cursor-pointer rounded-2xl border-none"
        placeholder="Search transaction"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </label>
  );
};

export default GlobalFilter;
