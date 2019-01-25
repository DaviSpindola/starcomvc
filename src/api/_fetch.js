const _fetch = url =>
  fetch(url)
    .then(data => data.json())
    .then(data => data)
    .catch(console.log);

export default _fetch;
