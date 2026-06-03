import { test, expect } from '@playwright/test';

test('Radio and Checkbox', async ({ page }) => {
  await page.goto('https://qaplayground.com/practice/forms');

  // // TC01: Fill all fields with valid data and submit successfully
  await expect(page.getByText('Personal Details')).toBeVisible();
  await page.locator('id=firstName').fill('Karthickkumar');
  await page.locator('id=lastName').fill('Kanagaraj');
  await page.locator('id=email').fill('kkarthickkumar1990@gmail.com');
  await page.locator('id=phone').fill('1234567890');
  await page.locator('id=dob').fill('1990-08-29');
  await expect(page.locator('id=genderGroup')).toBeVisible();
  await page.locator('input[type="radio"][value="male"]').check();
  await page.getByTestId('select-country').click();
  await page.getByLabel('India').getByText('India').click();
  await page.locator('id=city').fill('Chennai');
  await page.locator('id=bio').fill('This is My test bio and I am learning Playwright automation testing.');
  await expect(page.getByText('Interests')).toBeVisible();
  await page.locator('id=interest-selenium').check();
  await page.locator('id=interest-playwright').check();
  await page.locator('id=interest-cypress').check();
  await page.locator('id=interest-appium').check();
  await page.locator('id=interest-jest').check();
  await page.locator('id=password').fill('Chennai');
  await page.locator('id=confirmPassword').fill('Chennai');
  await page.locator('id=terms').check();
  await page.locator('id=submitFormBtn').click();

  // // Verify successful submission
  await expect(page.getByText('Form submitted successfully!')).toBeVisible();
  await expect(page.locator('id=submittedName')).toHaveText('Karthickkumar Kanagaraj');
  await page.getByTestId('reset-form-btn').click();
  await expect(page.getByText('Form Automation Practice')).toBeVisible();

  // //TC02: Verify required field errors appear on empty submit
  // await page.goto('https://qaplayground.com/practice/forms');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=firstNameError')).toHaveText('First name is required.');
  // await expect(page.locator('id=lastNameError')).toHaveText('Last name is required.');
  // await expect(page.locator('id=emailError')).toHaveText('Email is required.');
  // await expect(page.locator('id=phoneError')).toHaveText('Phone number is required.');
  // await expect(page.locator('id=dobError')).toHaveText('Date of birth is required.');
  // await expect(page.locator('id=genderError')).toHaveText('Please select a gender.');
  // await expect(page.locator('id=countryError')).toHaveText('Please select a country.');
  // await expect(page.locator('id=cityError')).toHaveText('City is required.');
  // await expect(page.locator('id=passwordError')).toHaveText('Password is required.');
  // await expect(page.locator('id=confirmPasswordError')).toHaveText('Please confirm your password.');
  // await expect(page.locator('id=termsError')).toHaveText('You must accept the terms.');


  // //TC03: Verify invalid email format shows validation error
  // await page.locator('id=email').fill('Test@example');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=emailError')).toHaveText('Enter a valid email address.');

  // //TC04: Verify invalid phone number format shows error
  // await page.locator('id=phone').fill('123');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.');
  // // TC04.1 Verify non-numeric phone number shows error
  // await page.locator('id=phone').fill('abcde12345');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.');
  // // TC04.2 Verify phone number with special characters shows error
  // await page.locator('id=phone').fill('123-456-7890');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.');
  // // TC04.3 Verify phone number with spaces shows error - 
  // // This test case is commented out because the application currently allows spaces in the phone number, which may be a bug.
  // // await page.locator('id=phone').fill('123 456 7890');
  // // await page.locator('id=submitFormBtn').click();
  // // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.');
  // // TC04.4 Verify phone number with country code shows error
  // await page.locator('id=phone').fill('+911234567890');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.');
  // // TC04.5 Verify phone number with less than 10 digits shows error
  // await page.locator('id=phone').fill('123456789');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.'); 
  // // TC04.6 Verify phone number with more than 10 digits shows error
  // await page.locator('id=phone').fill('12345678901');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=phoneError')).toHaveText('Enter a valid 10-digit phone number.'); 
 
  // // TC05: Verify password minimum length validation
  // await expect(page.getByPlaceholder('Min. 6 characters')).toBeVisible();
  // await page.getByPlaceholder('Min. 6 characters').fill('Pass');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=passwordError')).toHaveText('Password must be at least 6 characters.');

  // // TC06: Verify password mismatch shows confirm password error
  // await page.getByPlaceholder('Min. 6 characters').fill('Password123');
  // await page.getByPlaceholder('Re-enter password').fill('Password456');
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=confirmPasswordError')).toHaveText('Passwords do not match.');

  // // TC07: Verify T&C checkbox required error appears
  // await expect(page.locator('id=terms')).not.toBeChecked();
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=termsError')).toHaveText('You must accept the terms.');

  // // // TC09: Verify reset button clears all fields
  // await page.locator('id=firstName').fill('Muralidharan');
  // await page.locator('id=lastName').fill('Kanagaraj');
  // await page.locator('id=email').fill('kmuralidharan1992@gmail.com');
  // await page.locator('id=phone').fill('1234567890');
  // await page.locator('id=dob').fill('1990-08-29');
  // await expect(page.locator('id=genderGroup')).toBeVisible();
  // await page.locator('input[type="radio"][value="male"]').check();
  // await page.getByTestId('select-country').click();
  // await page.getByLabel('India').getByText('India').click();
  // await page.locator('id=city').fill('Chennai');
  // await page.locator('id=bio').fill('This is My test bio and I am learning Playwright automation testing.');
  // await expect(page.getByText('Interests')).toBeVisible();
  // await page.locator('id=interest-selenium').check();
  // await page.locator('id=interest-playwright').check();
  // await page.locator('id=interest-cypress').check();
  // await page.locator('id=interest-appium').check();
  // await page.locator('id=interest-jest').check();
  // await page.locator('id=password').fill('Chennai');
  // await page.locator('id=confirmPassword').fill('Chennai');
  // await page.locator('id=terms').check();
  // await page.locator('id=resetFormBtn').click();
  // await expect(page.locator('id=firstName')).toHaveValue('');
  // await expect(page.locator('id=lastName')).toHaveValue('');
  // await expect(page.locator('id=email')).toHaveValue('');
  // await expect(page.locator('id=phone')).toHaveValue('');
  // await expect(page.locator('id=dob')).toHaveValue('');

  // await expect(page.locator('input[type="radio"][value="male"]')).not.toBeChecked();
  // // await expect(page.getByTestId('select-country')).toHaveValue('');
  // // await page.locator('id=city').toHaveValue('');
  // await expect(page.locator('id=bio')).toHaveValue('');
  // await expect(page.locator('id=interest-selenium')).not.toBeChecked();
  // await expect(page.locator('id=interest-playwright')).not.toBeChecked();
  // await expect(page.locator('id=interest-cypress')).not.toBeChecked();
  // await expect(page.locator('id=interest-appium')).not.toBeChecked();
  // await expect(page.locator('id=interest-jest')).not.toBeChecked();
  // await expect(page.locator('id=password')).toHaveValue('');
  // await expect(page.locator('id=confirmPassword')).toHaveValue('');
  // await expect(page.locator('id=terms')).not.toBeChecked();

  // // TC10: Verify gender radio button selection
  // await page.locator('input[type="radio"][value="female"]').check();
  // await expect(page.locator('input[type="radio"][value="female"]')).toBeChecked();
  // await expect(page.locator('input[type="radio"][value="male"]')).not.toBeChecked();
  // await expect(page.locator('input[type="radio"][value="other"]')).not.toBeChecked();

  // // TC11: Verify country dropdown selection
  // await page.getByTestId('select-country').click();
  // await page.getByLabel('India').getByText('India').click();
  // // The country control is a custom dropdown (not a native input), so check the
  // // visible trigger text instead of using `toHaveValue` which expects an input.
  // await expect(page.getByTestId('select-country')).toHaveText('India');

  // // TC12: Verify multiple interest checkboxes can be selected
  // await expect(page.locator('[data-testid="interests-group"]')).toBeVisible();
  // await page.locator('id=interest-selenium').check();
  // await page.locator('id=interest-playwright').check();
  // await expect(page.locator('id=interest-selenium')).toBeChecked();
  // await expect(page.locator('id=interest-playwright')).toBeChecked();
  // // Assert both interest checkboxes remain checked simultaneously
  // await expect(page.locator('[data-testid="interests-group"] input:checked')).toHaveCount(2);

  // // TC13: Verify form fields retain values after validation failure
  // await page.locator('id=firstName').fill('Muralidharan');
  // await page.locator('id=lastName').fill('Kanagaraj');
  // await page.locator('id=email').fill('kmuralidharan1992@gmail.com');
  // await page.locator('id=phone').fill('1234567890');
  // await page.locator('id=dob').fill('1990-08-29');
  // await page.locator('input[type="radio"][value="male"]').check();
  // await page.getByTestId('select-country').click();
  // await page.getByLabel('India').getByText('India').click();
  // await page.locator('id=city').fill('Chennai');
  // await page.locator('id=bio').fill('This is My test bio and I am learning Playwright automation testing.');
  // await page.locator('id=interest-selenium').check();
  // await page.locator('id=interest-playwright').check();
  // await page.locator('id=password').fill('Chennai');
  // await page.locator('id=confirmPassword').fill('Chennai');
  // await page.locator('id=terms').uncheck(); // Ensure T&C is unchecked to trigger validation error
  // await page.locator('id=submitFormBtn').click();
  // await expect(page.locator('id=termsError')).toHaveText('You must accept the terms.');

  // // After submission, verify all previously entered values are still present in the form fields
  // await expect(page.locator('id=firstName')).toHaveValue('Muralidharan');
  // await expect(page.locator('id=lastName')).toHaveValue('Kanagaraj');
  // await expect(page.locator('id=email')).toHaveValue('kmuralidharan1992@gmail.com');
  // await expect(page.locator('id=phone')).toHaveValue('1234567890');
  // await expect(page.locator('id=dob')).toHaveValue('1990-08-29');
  // await expect(page.locator('input[type="radio"][value="male"]')).toBeChecked();
  // await expect(page.getByTestId('select-country')).toHaveText('India');
  // await expect(page.locator('id=city')).toHaveValue('Chennai');
  // await expect(page.locator('id=bio')).toHaveValue('This is My test bio and I am learning Playwright automation testing.');
  // await expect(page.locator('id=interest-selenium')).toBeChecked();
  // await expect(page.locator('id=interest-playwright')).toBeChecked();
  // await expect(page.locator('id=password')).toHaveValue('Chennai');
  // await expect(page.locator('id=confirmPassword')).toHaveValue('Chennai');
  // await expect(page.locator('id=terms')).not.toBeChecked(); 



});
