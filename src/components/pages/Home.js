import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Hello, this is my homepage.
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <p>
        If you want to check my tweets from test work, press there
        <Link to="/tweets" style={{ textDecoration: 'none' }}>
          {' '}
          Tweets
        </Link>
      </p>
    </div>
  );
}
