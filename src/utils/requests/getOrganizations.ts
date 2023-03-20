const getOrganizations = ({
  perPage = 6,
  since = 4242,
}: {
  perPage?: number;
  since?: number;
}) =>
  fetch(
    `https://api.github.com/organizations?per_page=${perPage}&since=${since}`,
  ).then((res) => res.json());

export default getOrganizations;
