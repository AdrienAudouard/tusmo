import { HiSelector } from 'react-icons/hi';
import './Select.scss';

function Select() {
  return (
    <div className="select">
      <select name="cars" id="cars">
        <option value="azerty">Azerty</option>
        <option value="qwerty">Qwerty</option>
      </select>
      <HiSelector size={16} color="#000" />
    </div>
  );
}

export default Select;
