import { useState } from 'react';
import { Button } from 'antd';
import Display from './Display';
import Keypad from './Keypad';
import CurrencySelector from './CurrencySelector';
import PaymentSelect from './PaymentSelect';
import { useCalculator } from '../../hooks/useCalculator';
import { useFormNavigation } from '../../hooks/useFormNavigation';
import '../../styles/Calculator.css';
import { CreditCardOutlined } from '@ant-design/icons';
import payIcone from '../../assets/icone/pay.png'


function Calculator() {
  const [currency, setCurrency] = useState('LKR');
  const {
    display,
    history,
    historyIndex,
    handleNumber,
    handleOperation,
    calculate,
    clear,
    goBack,
    goForward,
    canGoBack,
    canGoForward
  } = useCalculator();

  const {
    showPaymentSelected,
    formData,
    handleFormSubmit,
    handleFormChange,
    toggleForm
  } = useFormNavigation();

  return (
    <div className="calculator-container">
      <div className="calculator ">
        <CurrencySelector currency={currency} onChange={setCurrency} readOnly={showPaymentSelected} />
        <Display value={display} currency={currency} />
        {showPaymentSelected ? (
          <PaymentSelect
            formData={formData}
            onSubmit={handleFormSubmit}
            onChange={handleFormChange}
            onBack={toggleForm}
          />
        ) : (
          <>
            <Keypad
              onNumber={handleNumber}
              onOperation={handleOperation}
              onCalculate={calculate}
              onClear={clear}
            />

            <div className="next-button-container ">
              <Button
                className="next-button bg-button"
                onClick={toggleForm}
              >
                Proceed To Pay 
                <img src={payIcone} alt="pay" width={45}/>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Calculator;