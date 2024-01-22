import PropTypes from 'prop-types';
import styles from './Friends.module.css';
const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends_list}>
      {friends.map(friend => {
        const dotColor = friend.isOnline ? 'green' : 'red';
        const emoji = friend.isOnline ? '😊' : '😞';

        return (
          <li className={styles.friend} key={friend.id}>
            <span
              className={styles.status}
              style={{ backgroundColor: dotColor }}
            >
              {emoji}
            </span>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.array,
};
export default FriendList;
