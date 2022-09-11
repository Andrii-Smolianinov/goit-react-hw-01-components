import PropTypes from 'prop-types';
import { FriendsWrapper } from './StylesFriendsList';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsWrapper>
      <ul className="friend-list">
        {friends.map(item => (
          <li className="item" key={item.id}>
            <span className="online"></span> 
            {/* <span className={item.isOnline ? FriendsWrapper.online : FriendsWrapper.offline}></span>              */}
            <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
            <p className="name">{item.name}</p>
          </li>
        ))}
      </ul>
    </FriendsWrapper>
  );
};

// FriendList.propTypes = {
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
//   id: PropTypes.number.isRequired,
// };
FriendsList.propTypes = {
  arrayWithShape: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
