const getOrganizations = () =>
  fetch(`https://api.github.com/organizations?per_page=6&since=4242`).then(
    (res) => res.json(),
  );

export default getOrganizations;
