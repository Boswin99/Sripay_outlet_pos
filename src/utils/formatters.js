export function formatCurrency(value, currency) {
  const numValue = parseFloat(value);
  return currency === 'USD' 
    ? `$${numValue.toFixed(2)}` 
    : `Rs ${numValue.toFixed(2)}`;
}