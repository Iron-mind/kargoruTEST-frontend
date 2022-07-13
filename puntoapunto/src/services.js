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
export async function  postQuotation(body) {
    console.log('enviando',body);
    const response = await post(apiLink + "cotizacion", body).then((res) => res.json());
    if(response.hasOwnProperty('msg')){
        alert("Error al pedir la cotización "+response.msg);
    }
    return response
  }