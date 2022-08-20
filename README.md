# password-generator

---

The goal of this assignment was to create the JavaScript code for a random password generator on a web browswer based off on the criteria selected by a user. Click to access my portfolio project webpage [here](https://github.com/caitoreilly/password-generator.git).

## Description

---

When the user clicks on the generate password button, multiple prompts pop up for the user to decide if they would like lowercase letter, uppercase letters, numbers, and/or special characters in their password. Then the user is asked to decide how many characters they would like in their password, with at least 8 characters and no more than 128 characters. Once this input is provided, a random password with all of the aforementioned criteria the user chose is generated and displayed in the box on the screen. I create arrays for each of these criteria and a generatePassword function with if statements & alerts to run through what the user selects and then if they selected it, I added a concat to run through all possible characters for that type of character. Then I added a for loop with Math.random to randomly run through all of the selected criteria characters. I also included a function for the password length with a while loop to get the actual password length once a user inputs how many characters they want it to be. I included NaN to make sure the user types a number and a not a letter.

### Technologies

---

My project was created with:

- CSS
- HTML
- JavaScript

#### Screenshot

---

This image represents a random password generated after putting in the criteria of lowercase letters, uppercase letters, numbers, special characters, and a length of 15 characters total.

![Password Generator](/assets/password-generator.png)

##### Sources

---

I used the following site to help me with [NaN](https://www.codegrepper.com/code-examples/javascript/javascript+nan+if+statement).

This site was built using [GitHub Pages](https://pages.github.com/).
