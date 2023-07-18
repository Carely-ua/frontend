import { Button, Typography } from '@/ui-kit';

const Home = () => {
  const hello = 'fsdfds';
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
    </>
  );
};

export default Home;
