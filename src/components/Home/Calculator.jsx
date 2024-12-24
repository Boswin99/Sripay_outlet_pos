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
import PaymentQr from '../Home/PaymentQr'



function Calculator() {
  const [currency, setCurrency] = useState('LKR');
  const [showPaymentSelected, setShowPaymentSelected] = useState(false);
  const [showQr, setShowQr] = useState(false);
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

  // const {
  //   showPaymentSelected,
  //   formData,
  //   handleFormSubmit,
  //   handleFormChange,
  //   toggleForm
  // } = useFormNavigation();

  const handleFormSubmit = (values) => {
    console.log('Form submitted:', display);
    setShowQr(true);
  }

  const payAmountSubmit = () => {
    setShowPaymentSelected(true);

  }
  return (
    <div className="calculator-container">
      <div className="calculator ">
        {!showPaymentSelected && <CurrencySelector currency={currency} onChange={setCurrency} />}
        
        <Display value={display} currency={currency} />
        {showQr ? (
          <PaymentQr payAmount={display}/>
        ) : (
          <>
            {showPaymentSelected ? (
              <PaymentSelect
                formData={display}
                onBack={() => setShowPaymentSelected(false)}
                onSubmit={handleFormSubmit}
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
                    onClick={payAmountSubmit}
                  >
                    Proceed To Pay
                    <img src={payIcone} alt="pay" width={45} />
                  </Button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Calculator;