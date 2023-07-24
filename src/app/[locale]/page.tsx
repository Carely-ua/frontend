import { gql } from '@apollo/client';
import { Typography } from '@/ui-kit';
import { getClient } from '@/utils';
import { NavigationSections } from './home-components';

const GET_CLINICS = gql`
  query GetClinics($filters: ClinicFilterInputType!) {
    getClinics(filters: $filters) {
      id
      name
    }
  }
`;

const Home = async () => {
  const { data } = await getClient().query({ query: GET_CLINICS, variables: { filters: {} } });
  console.log('data', data);

  return (
    <>
      <Typography color="primary" component="h1">
        Home page
      </Typography>
      <Typography component="h2">Home page</Typography>
      <Typography component="h3">Home page</Typography>
      <Typography component="h4">Home page</Typography>
      <Typography component="h4" weight="bold">
        Home page
      </Typography>
      <Typography component="p">Home page</Typography>
      <NavigationSections />
    </>
  );
};

export default Home;
