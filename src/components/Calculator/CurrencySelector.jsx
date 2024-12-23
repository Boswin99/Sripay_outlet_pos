import { Select } from 'antd';
import '../../styles/CurrencySelector.css';

function CurrencySelector({ currency, onChange, readOnly }) {
  return (
    <div className="currency-selector text-start">
      <Select
        disabled={readOnly}
        value={currency}
        onChange={onChange}
        options={[
          { value: 'LKR', label: 'LKR' },
          { value: 'USD', label: 'USD' }
        ]}
      />
    </div>
  );
}

export default CurrencySelector;