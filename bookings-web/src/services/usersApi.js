export const NewUser = async ({ userName, email, password }) => {
  const response = await fetch(`${process.env.BASE_URL}/users/create`, {
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
