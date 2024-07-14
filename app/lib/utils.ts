const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD', 
  style: 'currency',
})

const PAYMENT_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD', 
  style: 'currency',
  minimumFractionDigits: 1,
})

export function formatCurrency(amount: number, defaultValue=40) {
  if (amount === undefined || amount === null) {
    amount = defaultValue;
}
  return CURRENCY_FORMATTER.format(amount);
}

export function totalPayment(number: number) {
  return PAYMENT_FORMATTER.format(number)
}