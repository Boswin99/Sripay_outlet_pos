import { useState } from 'react';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [newNumber, setNewNumber] = useState(true);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleNumber = (num) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperation = (op) => {
    setPrevValue(parseFloat(display));
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (prevValue === null || operation === null) return;
    
    const current = parseFloat(display);
    let result;
    
    switch (operation) {
      case '+':
        result = prevValue + current;
        break;
      case '-':
        result = prevValue - current;
        break;
      case '*':
        result = prevValue * current;
        break;
      case '/':
        result = prevValue / current;
        break;
      default:
        return;
    }
    
    const newResult = result.toString();
    setDisplay(newResult);
    setPrevValue(null);
    setOperation(null);
    setNewNumber(true);
    
    // Add to history
    const newHistory = [...history.slice(0, historyIndex + 1), newResult];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const clear = () => {
    setDisplay('0');
    setPrevValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setDisplay(history[historyIndex - 1]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setDisplay(history[historyIndex + 1]);
    }
  };

  return {
    display,
    history,
    historyIndex,
    handleNumber,
    handleOperation,
    calculate,
    clear,
    goBack,
    goForward,
    canGoBack: historyIndex > 0,
    canGoForward: historyIndex < history.length - 1
  };
}