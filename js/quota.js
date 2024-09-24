
// Quota section

document.getElementById('quota-btn').addEventListener('click', function(){
    
    const quotaAmount = getInputValue('quota-input')
    const quotaTotalBalance = getInnerText('balance-total')

    if(quotaAmount > quotaTotalBalance){
        return alert('you do not have enough balance')
    }
    
    if(quotaAmount <= 0){
        return alert('negative number not allow')
    }
    if(isNaN(quotaAmount)){
        return alert('your donate amount is Invalid')

    }
    const quotaPreviousDonate = getInnerText('quota-text')
    const newQuotaBalance = quotaPreviousDonate + quotaAmount
    document.getElementById('quota-text').innerText = newQuotaBalance

    const totalQuotaAmount = getInnerText('balance-total')
    const totalQuotaDonate = quotaTotalBalance - newQuotaBalance
    document.getElementById('balance-total').innerText = totalQuotaDonate

     // modals
     document.getElementById('my_modal_1').showModal()
     
    //    history
   
    const p = document.createElement('p')
    p.style.borderRadius = '7px'
    p.style.paddingLeft = '20px'
    p.style.paddingTop = '10px'
    p.style.boxShadow = '2xl'
    p.style.fontSize = '3xl'
    p.style.background = '#973131'
    p.style.gap = '3rem'
    p.style.margin = '10px'
    p.style.color = 'white'
    p.style.padding = '20px'

    p.innerText = ` ${quotaAmount} Taka Aid for Injured in the Quota Movement
    Donate date is: ${new Date().toLocaleDateString()}`
    document.getElementById('transaction-container').appendChild(p)
})