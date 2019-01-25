const _fetch = url =>
  fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(error => error);

export default _fetch;
