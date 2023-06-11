import React, { ChangeEvent } from "react";

interface Props {
  label: string;
  value: string | number;
  onChange: (
    event: ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => void;
  type?: string;
  options?: Array<any>;
  keys?: {
    text: string;
    value: string;
  };
  placeholder?: string;
  required?: boolean;
  unit?: string;
  name: string;
}

export default function Input({
  label,
  value,
  onChange,
  type = "text",
  options,
  keys,
  placeholder,
  required = true,
  unit,
  name,
}: Props) {
  return (
    <div className="w-full">
      <p className="text-white text-base font-normal">{label}</p>

      {type === "textarea" ? (
        <>
          <textarea
            value={value}
            onChange={onChange}
            className="bg-[#181F30] border border-[#5B6178] rounded-md outline-none text-[#E9EAF6] px-3 py-2 mt-2 w-full text-base"
            placeholder={placeholder}
            maxLength={200}
            required={required}
            name={name}
          />
          <p className="text-sm text-[#43495E]">
            {value.toString().length}/200 Characters
          </p>
        </>
      ) : type === "select" && keys ? (
        <select
          value={value}
          required={required}
          onChange={onChange}
          name={name}
          className="bg-[#181F30] border border-[#5B6178] rounded-md outline-none text-[#E9EAF6] px-3 py-2 mt-2 w-full text-base"
        >
          <option disabled>Select {label}</option>
          {options?.map((option: any, key) => (
            <option value={option[keys.value]}>{option[keys.text]}</option>
          ))}
        </select>
      ) : (
        <div className="bg-[#181F30] border border-[#5B6178] px-3 rounded-md flex items-center gap-1 mt-2">
          <input
            type={type}
            value={value}
            onChange={onChange}
            required={required}
            name={name}
            className="bg-transparent outline-none text-[#E9EAF6] py-2 w-full text-base"
          />
          {unit && (
            <span className="text-[#E9EAF6] text-sm font-light">{unit}</span>
          )}
        </div>
      )}
    </div>
  );
}
