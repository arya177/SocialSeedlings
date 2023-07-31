import Head from 'next/head';
import styles from '../../styles/UserAvatar.module.css';
import { useRouter } from 'next/router';

const UserAvatar = ({photo, userProfileImageUrl}) => {
  const router = useRouter();
  const handleUserClick = () => {
    console.log("hi")
    router.push(`/users/${photo?.user?.username}`);
  }
  return (
    <div>
        <div className={styles.profile} onClick={handleUserClick}>
            <img className={styles.profileImage} src={userProfileImageUrl} alt='photo' />
            <div className={styles.profileName}>{photo?.user?.username}</div>
        </div>
    </div>
  );
};

export default UserAvatar;
