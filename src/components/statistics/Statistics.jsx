import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.statistics_title}>{title}</h2>
      <ul className={styles.statistics_list}>
        {stats.map(item => {
          return (
            <li className={styles.statistics_item} key={item.id}>
              <span>{item.label}</span>
              <span>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
