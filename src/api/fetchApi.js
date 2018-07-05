
export const payload = (url, method, caller, body) => {
  return fetch(url, {
    mode: 'cors',
    method: `${method}`,
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`${caller} by response was not OK.`);
    }
  }).then((data) => {
    return data;
  });
};

export const results = (url, method) => {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open(method, url, true);
    request.overrideMimeType("application/json");
    request.onload = function () {
      if (request.status >= 200 && request.status < 400) {
        resolve(JSON.parse(request.response));
      }
    };

    request.send();
  });
};
