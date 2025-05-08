import React from "react";

interface FormLabelDateProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormLabelDate: React.FC<FormLabelDateProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium text-gray-700">
        {label}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-blue-400"
      />
    </div>
  );
};

export default FormLabelDate;
