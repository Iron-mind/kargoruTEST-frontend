let apiLink = "http://localhost:3001/api/";

export async function post(url = "", data = {}) {
  const response = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
export async function postQuotation(body) {
  const response = await post(apiLink + "cotizacion", body).then((res) =>
    res.json()
  );
  if (response.hasOwnProperty("msg")) {
    alert("Error al pedir la cotización " + response.msg);
  }
  return response;
}

export function validate(input) {
  let errors = {};
  for (var iterable in input) {
    if (!input[iterable] && iterable !== "puntos" && iterable !== "fragil") {
      errors[iterable] = " (*)";
    }
  }
  if (input.puntos) {
    errors.puntos = [validate(input.puntos[0]), validate(input.puntos[1])];
  }

  return errors;
}

export function countErrors(errors) {
  if (errors.hasOwnProperty('puntos')) {
    return Object.keys(errors).length - 1 + countErrors(errors.puntos[0])+countErrors(errors.puntos[1]);
  }

  return Object.keys(errors).length;
}
