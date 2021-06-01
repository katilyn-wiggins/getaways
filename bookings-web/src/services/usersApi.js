export const NewUser = async ({ userName, email, password }) => {
  console.log(userName, email, password);
  const response = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({
      username: userName,
      email,
      password,
    }),
  });
  console.log('in new user');
  const results = await response.json();
  console.log(results, 'results');
  return results;
};

export const LoginUser = async ({ userName, email, password }) => {
  const response = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/JSON' },
    body: JSON.stringify({
      username: userName,
      email,
      password,
    }),
  });

  const results = await response.json();
  console.log(results, 'results');
  return results;
};

export const LogoutUser = async () => {
  const response = await fetch(`${process.env.BASE_URL}/users/logout`, {
    method: 'GET',
    headers: { 'Content-Type': 'Application/JSON' },
  });

  const results = await response.json();
  console.log(results, 'results');
  return results;
};
