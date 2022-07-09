import React, { useState } from "react";

type Props = {
  placeholder: string;
};

const TextInput = ({ placeholder }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex w-full justify-center">
      <input
        type="text"
        placeholder={placeholder}
        className="input sm:text-xl text-lg w-[95%] py-2 px-5 rounded-xl bg-opacity-60"
        onChange={(e) => setSearchValue(e.target.value)}
        onBlur={(e) => {}}
      />
    </div>
  );
};

export default TextInput;
