import Head from 'next/head';
import UserAvatar from './UserAvatar'
// import styles from '../styles/UserAvatar.module.css';

const FeedRightComponent = () => {
  return (
    <div>
      {Array.from({ length: 10 }, (_, index) => (
          <UserAvatar/>
      ))}
    </div>
  );
};

export default FeedRightComponent;
