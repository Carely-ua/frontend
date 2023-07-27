import { Typography } from '@/ui-kit';
import { NavigationSections } from './home-components';

const Home = async () => {
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
