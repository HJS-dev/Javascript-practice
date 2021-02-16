document.getElementById('loan-form').addEventListener('submit', calculateResults)


function calculateResults(e) {
    console.log('calculating....')
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')

    const principal = parseFloat(amount.value)
    const calculatedInterest = praseFloat(interest.value) / 100 / 12
    const calculatedPayment = parseFloat(years.value) * 12

    const x = Math.pow()






    e.preventDefault()
}