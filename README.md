#### Your task:

- Build the HTML / Javascript for the form, but __do not__ bother doing any styling or submitting the data anywhere.
- Please __do not__ use JS libraries for form validation. We'd like you to approach this logic using your own custom vanilla JS or JQuery functions.

---

#### The form should be built according to the following client specs:

*General Specs*

- All form fields are required unless specified otherwise, and should have labels and or placeholders.
- The form should contain a submit button, but can also be submitted by pressing the "Enter" key on a keyboard.
- If any of the fields contain errors, the user should receive a detailed error message explaining what they did wrong.
- If all fields pass validation, the user should receive a success message.

*Field Specs*

- __Field #1: Your Name__
  - Value should be longer than 1 character and less than 100 characters
  - Value should not contain any numbers or special characters
  
- __Field #2: Your Email__
  - Value should contain a valid email
  
- __Field #3: Your country__
  - User should be required to pick if they bought the vacuum in the USA or outside of the USA (International).
  
- __Field #4: Your telephone__
  - Value should be a valid telephone number
  - If the user selects "USA" for Field #3, the value should be a valid US 10 digit phone number
  - Alternatively, if the user selects "International" for Field #3, the value should be a valid international phone number.  (Don't be too strict, any international telephone number will do)
  
- __Field #5: Date purchased__
  - Value should contain a valid date (your choice on how to manage date)
  - Keep Field #3 in mind. United States citizens as well as internationals will be filling out the date field
  - Don't forget to validate the date depending on which product is selected (See field #6)
  
- __Field #6: Select Product__
  - Dropdown list should contain the three products (V100, V200, V300)
  
- __Field #7: Serial Number__
  - Serial numbers should be properly formatted according to the following specifications:
  - 16 digits containing only numbers and letters in no specific order
  - Example format: XXXX-XXXX-XXXX-XXXX
  - Dashes ('-') should be added automatically as the user types, or the user can type them in
  - Example: If the user presses the "a" character 16 times in a row, the input should read: AAAA-AAAA-AAAA-AAAA
  
- __Field #8: V300 Extra Options__
  - This field should be hidden, unless the user has selected "V300" in Field #6
  - User should be presented with a selectable list of vacuum attachments, and must select the 3 attachments they chose at time of purchase

- __Field #9: Photo Upload (Optional)__
  - If the user believes their vacuum is damaged, they can upload a picture to file a claim

- __Field #10: Terms & Conditions__
  - Users should be required to acknowledge that they agree to the terms and conditions
  - The value should be selected by default
  
*Vacuum Specs*

- __V100 Vacuum__
  - First available in stores September 1st, 1985
 
- __V200 Vacuum__
  - First available in stores September 1st, 1989
  
- __V300 Vacuum__
  - First available in stores May 1st, 1995
  - User can choose up to 3 attachments from 5 choices (hardwood floor attachment, car attachment, carpet attachment, pet attachment, fine detail attachment)