import OrganizationType from '@/src/types/organization';

type Props = {
  organization: OrganizationType;
};

const SingleOrganization = ({ organization }: Props) => {
  return <div>{organization.login}</div>;
};

export default SingleOrganization;
