const getAcademyByIdApi = (academyId) => {
  const url = `http://localhost/MartialArts/api/academy/${academyId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Academy by id response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const getAcademyApi = () => {
  const url = 'http://localhost/MartialArts/api/academy';
  return fetch(url, {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Academy response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const putAcademyApi = (academy) => {
  const url = `http://localhost/MartialArts/api/academy/${academy.academyId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'PUT',
    body: JSON.stringify(academy),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Academy response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const deleteAcademyApi = (academyId) => {
  const url = `http://localhost/MartialArts/api/Academy/${academyId}`;
  return fetch(url, {
    mode: 'cors',
    method: 'DELETE',
    body: JSON.stringify(academyId),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Academy response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

const postAcademyApi = (academy) => {
  const url = 'http://localhost/MartialArts/api/academy';
  return fetch(url, {
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(academy),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Academy response was not OK.');
    }
  }).then((data) => {
    return data;
  });
};

