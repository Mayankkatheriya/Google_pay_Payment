# Google_pay_Payment
# Hosted Link: [→Click Me←](https://mayankkatheriya.github.io/Google_pay_Payment/)

## UI:
![image](https://github.com/Mayankkatheriya/Google_pay_Payment/assets/128832286/09ca489b-b082-47b0-ae4a-263083f80958)
![image](https://github.com/Mayankkatheriya/Google_pay_Payment/assets/128832286/656124c0-182a-4163-abc9-5069ab0ff879)
![image](https://github.com/Mayankkatheriya/Google_pay_Payment/assets/128832286/a8bb41c2-2241-4b33-bd87-205f956806b5)
![image](https://github.com/Mayankkatheriya/Google_pay_Payment/assets/128832286/eaa55f36-a416-436d-a3a3-bbd074b2dd6a)

---

## Explanation:

I've created a web page that features a simple payment processing application. Here's a summary of what my code does:

HTML Code:

1. I've defined the basic structure of my webpage, including metadata, title, external CSS styles, and JavaScript scripts.
2. There's a container that holds the content, and it's styled with CSS to have rounded corners and a background image.
3. The page has two main sections: "start" and "payment," initially displaying "start."
4. "start" section contains an image and a "Pay Now" button.
5. "payment" section contains a navigation bar, a form for payment input, a loader for simulating payment processing, and a result section for displaying payment status.
6. The footer provides credit to the author.

CSS Code:

1. I've defined styles for the entire page, setting background images and fonts.
2. I've styled various elements, such as buttons, containers, and input fields.
3. I've applied styles to elements for responsiveness, including different styles for smaller screens.

JavaScript Code:

1. I've defined variables to access various HTML elements in my page, such as buttons and form inputs.
2. I have a function called paymentProcess that simulates a payment process:  
  * It hides the form and navigation, shows a loader.
  * After a random delay, it resolves or rejects a promise to simulate a successful or failed payment.
  * Based on the promise result, it updates the result section with a success or failure message and details.
3. I've added event listeners:
  * The form submits trigger a payment process based on the input values.
  * The "Pay Now" button hides the "start" section and shows the "payment" section.
  * The "Back" button navigates back to the "start" section.

In summary, I've created a simple web page for processing payments. When a user enters their name and payment amount and clicks "Pay," my code simulates a payment process and displays the result. It includes nice styling and transitions for a user-friendly experience.
