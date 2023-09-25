import React from 'react';

interface SelectProps {
  id: string;
  options: string[];
  defaultOption: string;
  selectedOption: string;
  label: string;
  labelSize?: number;
  onOptionChange: (selectedValue: string) => void;
}

function Select({id, label, labelSize=3, options, defaultOption, selectedOption, onOptionChange }: SelectProps) {
    const labelClass = `col-sm-${labelSize} col-form-label`
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div className='d-flex my-2 mb-3'>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        className='col-sm form-select'
        id={id}
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">{defaultOption}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
