import { useIntl } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const intl = useIntl();

  return (
    <div className={styles.container}>
      <h1>{intl.formatMessage({ id: 'foobar' })}</h1>
      <h1>{intl.formatMessage({ id: 'foo.bar' })}</h1>
    </div>
  );
};

export default HomePage;
