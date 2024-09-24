

function getInputValue(id) {
    const inputNumber = parseFloat(document.getElementById(id).value)
    
    return inputNumber

}

function getInnerText(id) {
    const inputText = parseFloat(document.getElementById(id).innerText)
    return inputText
}


function showSectionById(id) {
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}



document.getElementById('donateNoakhali-btn').addEventListener('click', function () {
   
    const donateAmount = getInputValue('input-field')
    const totalAmount = getInnerText('balance-total')

    if(donateAmount > totalAmount){
        return alert('you do not have enough balance')
    }
    

    if(donateAmount <= 0){
        return alert('negative number not allow')
    }
    if(isNaN(donateAmount)){
        return alert('your donate amount is Invalid')

    }
    
    const previousDonateAmount = getInnerText('input-amount')
    const newBalanceTotal = previousDonateAmount + donateAmount
    document.getElementById('input-amount').innerText = newBalanceTotal

    const totalDonateAmount =  getInnerText('balance-total')
    const totalDonate = totalAmount - newBalanceTotal
    document.getElementById('balance-total').innerText = totalDonate
    console.log(newBalanceTotal)

    // modals
    document.getElementById('my_modal_1').showModal()
   
    //    history
   
     const p = document.createElement('p')
     p.style.borderRadius = '7px'
     p.style.paddingLeft = '20px'
     p.style.paddingTop = '10px'
     p.style.boxShadow = '2xl'
     p.style.fontSize = '3xl'
     p.style.background = 'tomato'
     p.style.gap = '3rem'
     p.style.margin = '10px'
     p.style.padding = '20px'
 
     p.innerText = ` ${donateAmount} Taka Donate for Flood at Noakhali, Bangladesh
     Donate date is: ${new Date().toLocaleDateString()}
 
     `
     document.getElementById('transaction-container').appendChild(p)
})








