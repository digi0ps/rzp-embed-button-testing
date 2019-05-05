# Razorpay Payment Pages Embed Button

## Variables
    - rzp_payment_slug (the last part of 'https://rzp.io/l/OhbYJCZ' or can be the URL too)
    - text ('Pay Now')
    - size ('small' | 'medium' | 'large')
    - color ('FF430F')

## Approaches
### iFrame approach:
    - Create a div with all the needed information as data attribute
    - Razorpay javascript on page:
        - Queries all rzp button divs 
        - Uses the dataset info to attach an iframe to an embed page

### ShadowDom approach:
    - Creates a similar div with the dataset attributes
    - Razorpay javascript on page:
        - Queries all rzp button divs
        - Attaches a closed Shadow DOM and creates a rzp button inside