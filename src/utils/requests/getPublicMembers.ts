const getPublicMembers = ({
  organizationLogin,
}: {
  organizationLogin: string;
}) =>
  fetch(`https://api.github.com/orgs/${organizationLogin}/public_members`).then(
    (res) => res.json(),
  );

export default getPublicMembers;
