import { ChangeEvent } from 'react';
import { HiSelector } from 'react-icons/hi';
import './Select.scss';

type Props = {
  values: string[];
  selected?: string;
  onChange?: (value: string) => void;
};

function Select({ values, selected, onChange }: Props) {
  const onSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div className="select">
      <select name="select" id="select" onChange={onSelect}>
        {
          values.map((value) => (
            <option selected={value === selected} value={value}>
              {value}
            </option>
          ))
        }
      </select>
      <HiSelector size={16} color="#000" />
    </div>
  );
}

export default Select;
