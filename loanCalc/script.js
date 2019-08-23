let form= document.querySelector('form')
form.addEventListener('submit', function ogTask(e){
	
	document.querySelector('.loading').style.display='block'

	document.querySelector('#results').style.display='none'
	setTimeout(calcLoan, 2000)
	e.preventDefault()
})

function calcLoan(){
	let lAmount= document.querySelector('#amount')
	let interest=document.querySelector('#interest')
	let ytRepay=document.querySelector('#years')
	let mPayment= document.querySelector('#monthlyPayment')
	let tPayment=document.querySelector('#totalPayment')
	let tInterest=document.querySelector('#totalInterest')

	let principal= parseFloat(lAmount.value)
	let rate= parseFloat(interest.value)/100/12
	let noPayment= parseFloat(ytRepay.value)*12

	const x=Math.pow((1+rate), noPayment)
	const monthly= (principal*x*rate)/(x-1)

	if(isFinite(monthly)){
		mPayment.value=monthly.toFixed(2)
		tPayment.value=(monthly*noPayment).toFixed(2)
		tInterest.value=((monthly*noPayment)-principal).toFixed(2)
		document.querySelector('.loading').style.display='none'

		document.querySelector('#results').style.display='block'
	}else{
		showError('Fill all required spaces')
	}

	function showError(e){
		let card=document.querySelector('.card')
		let heading= document.querySelector('.heading')

		errorDiv= document.createElement('div')
		errorDiv.className= 'alert alert-danger'
		errorDiv.appendChild(document.createTextNode(e))

		card.insertBefore(errorDiv, heading)
		
		document.querySelector('.loading').style.display='none'

		document.querySelector('#results').style.display='none'

		setTimeout(clearError, 3000)
	}

	function clearError(){
		document.querySelector('.alert').remove()
	}

	
}