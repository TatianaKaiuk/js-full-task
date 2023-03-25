const baseUrl = `https://6416cdc647092b8b613500f9.mockapi.io/api/v1/data`;

export const createData = (data) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });

export const getData = () =>
  fetch(baseUrl).then((resoponse) => resoponse.json());
