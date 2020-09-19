const host = "http://0.0.0.0:8081/api";

async function postRequest(url, data) {
  const response = fetch(url, {
    method: "POST",
    // credentials: 'same-origin',
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: data,
  }).then((r) => r.json().then((data) => ({ status: r.status, body: data })));
  return response;
}

export async function login(username, password) {
  const response = await postRequest(
    `${host}/login`,
    JSON.stringify({
      username: username,
      password: password,
    })
  )
    .then((data) => {
      if (data.status != 200) return data.body.detail;
      else {
        localStorage.setItem("status", "loggedIn");
        localStorage.setItem("username", data.body.username);
        return null;
      }
    })
    .catch((error) => {
      console.warn("Something went wrong.", error);
    });
  return response;
}

export async function signup(username, email, password, password_confirm) {
  const response = await postRequest(
    `${host}/signup`,
    JSON.stringify({
      username: username,
      email: email,
      password: password,
      password_confirm: password_confirm,
    })
  )
    .then((data) => {
      if (data.status != 200 && data.status != 201) return data.body.detail;
      else {
        return null;
      }
    })
    .catch((error) => {
      console.warn("Something went wrong.", error);
    });
  return response;
}

export async function logout() {
  await postRequest(`${host}/logout`, "{}")
    .then((data) => {
      if (data.status != 200) return data.body.detail;
      else {
        return null;
      }
    })
    .catch((error) => {
      console.warn("Something went wrong.", error);
    });
}
