const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD', 
  style: 'currency',
  minimumFractionDigits: 0,
})

const PAYMENT_FORMATTER = new Intl.NumberFormat('en-US', {
  currency: 'USD', 
  style: 'currency',
  minimumFractionDigits: 1,
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}

export function totalPayment(number: number) {
  return PAYMENT_FORMATTER.format(number)
}