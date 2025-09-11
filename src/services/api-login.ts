const url = "https://api-teste-front-production.up.railway.app";

export async function login(email: string, password: string) {
  const response = await fetch(`${url}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Credenciais inválidas");
   }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data;
}