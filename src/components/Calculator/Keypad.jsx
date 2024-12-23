import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import '../../styles/Keypad.css';
import { FaBackspace } from "react-icons/fa";
import { CiTextAlignRight } from 'react-icons/ci';


function Keypad({ onNumber, onOperation, onCalculate, onClear }) {
  return (
    <div className="keypad">
      
      <Button onClick={onClear} className="clear"><FaBackspace fontSize={50}/></Button>

      <Button onClick={() => onNumber('7')}>7</Button>
      <Button onClick={() => onNumber('8')}>8</Button>
      <Button onClick={() => onNumber('9')}>9</Button>
      <Button onClick={() => onOperation('/')} className="operator">/</Button>
      
      <Button onClick={() => onNumber('4')}>4</Button>
      <Button onClick={() => onNumber('5')}>5</Button>
      <Button onClick={() => onNumber('6')}>6</Button>
      <Button onClick={() => onOperation('*')} className="operator">×</Button>
      
      <Button onClick={() => onNumber('1')}>1</Button>
      <Button onClick={() => onNumber('2')}>2</Button>
      <Button onClick={() => onNumber('3')}>3</Button>
      <Button onClick={() => onOperation('-')} className="operator">-</Button>
      
      <Button onClick={() => onNumber('0')}>0</Button>
      <Button onClick={() => onNumber('.')}>.</Button>
      <Button onClick={onCalculate} className="equals">=</Button>
      <Button onClick={() => onOperation('+')} className="operator">+</Button>
      
      
    </div>
  );
}

export default Keypad;