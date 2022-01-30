import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51KLIWhEj0jTzlbScB6mmmnTIksc4qUi2ITDkXEU1J4EVCuyVnM6TKtyQItuIHQJZ7VDwMuEJ620g6JavwCelwgt500KmzVI9Ym'

    const onToken = token => {
        console.log(token)
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/Cuz.svg'
            description={`Your total is ${price}`}
            amount = {priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />

    
    )
}

export default StripeCheckoutButton