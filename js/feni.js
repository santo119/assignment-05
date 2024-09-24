
// feni donate section

document.getElementById('feniDonate-btn').addEventListener('click', function(){
    const feniDonateAmount = getInputValue('feni-input')
    const feniTotalAmount =  getInnerText('balance-total')
    console.log(feniDonateAmount)

    if(feniDonateAmount > feniTotalAmount){
        return alert('you do not have enough balance')
    }
    if(feniDonateAmount <= 0){
        return alert('negative number not allow')
    }
    if(isNaN(feniDonateAmount)){
        return alert('your donate amount is Invalid')

    }
    const previousFeniAmount = getInnerText('feni-inputAmount')
    const feninewBalanceTotal = previousFeniAmount + feniDonateAmount
    document.getElementById('feni-inputAmount').innerText = feninewBalanceTotal

    const feniDonateTotal = getInnerText('balance-total')
    const feniTotalDonate = feniTotalAmount - feninewBalanceTotal
    document.getElementById('balance-total').innerText = feniTotalDonate

     // modals
     document.getElementById('my_modal_1').showModal()
   
     //    history
    
      const p = document.createElement('p')
      p.style.borderRadius = '7px'
      p.style.paddingLeft = '20px'
      p.style.paddingTop = '10px'
      p.style.boxShadow = '2xl'
      p.style.fontSize = '3xl'
      p.style.background = '#D8D2C2'
      p.style.gap = '3rem'
      p.style.margin = '10px'
      p.style.padding = '20px'
  
      p.innerText = ` ${feniDonateAmount} Taka Donate for Flood Relief in Feni,Bangladesh
      Donate date is: ${new Date().toLocaleDateString()}
  
      `
      document.getElementById('transaction-container').appendChild(p)

   
})