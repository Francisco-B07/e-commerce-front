const BASE_URL = "https://e-commerce-back-inky.vercel.app/api";

export async function fetchAPI(input: RequestInfo, options: any) {
  const url = BASE_URL + input;
  const token = getSavedToken();

  const newOptions: any = options || {};
  newOptions.headers ||= {};

  if (token) {
    newOptions.headers.authorization = "Bearer " + token;
  }

  newOptions.headers["content-type"] = "application/json";

  if (newOptions.body) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  const res = await fetch(url, newOptions);

  if (res.status >= 200 && res.status < 300) {
    return res.json();
  } else {
    throw { message: "Hubo un error", status: res.status };
  }
}

export async function editUser(
  name: string,
  address: string,
  telefono: string
) {
  return fetchAPI("/me", {
    method: "PATCH",
    body: {
      name,
      address,
      telefono,
    },
  });
}
export async function sendCode(email: string) {
  return fetchAPI("/auth", {
    method: "POST",
    body: {
      email,
    },
  });
}

export async function getToken(email: string, code: string) {
  const data = await fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code: parseInt(code),
    },
  });
  console.log({ token: data.token });

  saveToken(data.token);
  return true;
}

export function saveToken(token: string) {
  localStorage.setItem("auth_token", token);
}
export function getSavedToken() {
  return localStorage.getItem("auth_token");
}
export function removeToken() {
  return localStorage.removeItem("auth_token");
}
