export function formatCurrency(priceCents){
  return (Math.round(priceCents)/100).toFixed(2);
  //8.05 doesnt round o 8.00 but to 8.01 so math round

}
export default formatCurrency;