import { test, expect } from '@playwright/test';

test.skip('API Testing', async ({ request }) => {
  const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Activities/');

  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
});

test('API Testing for users', async ({ request }) => {
  const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Users');

  expect(response.status()).toBe(200);

  const data = await response.json();
  console.log(data);
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
});

test.only('API POST Users', async ({ request }) => {
  const payload = {
    id: 0,
    userName: 'autouser_playwright',
    password: 'Pass@123'
  };

  const postResponse = await request.post('https://fakerestapi.azurewebsites.net/api/v1/Users', {
    data: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  // Accept either 200 or 201 depending on the API implementation
  expect([200, 201]).toContain(postResponse.status());

  const created = await postResponse.json();
  console.log('Created user:', created);
  expect(created.userName).toBe(payload.userName);
});

