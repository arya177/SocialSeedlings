import styles from '../../styles/UserInfo.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {useState, useEffect, use} from 'react'
import {fetchUserByUsername} from '../../pages/api/users'

const UserInfo = ({username}) => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);

  useEffect(() => {dispatch(fetchUserByUsername(username))}, [])
  useEffect(() => {console.log(userInfo)}, [userInfo])
  return (
    <div >
      {userInfo!=null && <div className={styles.container}>
        <div className={styles.profile}>
            <img className={styles.profileImage} src={userInfo?.profile_image?.large} alt='photo' />
        </div>
        <div className={styles.profileInfo}>
            <div className={styles.horizontal}>
                <div className={styles.profileName}>{userInfo?.username}</div>
                {/* <button className={styles.userAction} >Edit Profile</button> */}
            </div>
            <div className={styles.userInfo}>
                <div className={styles.userStats}>
                    <div>{userInfo?.total_photos}</div>
                    <div>posts</div>
                </div>
                <div className={styles.userStats}>
                    <div>{userInfo?.followers_count}</div>
                    <div>followers</div>
                </div>
                <div className={styles.userStats}>
                    <div>{userInfo?.following_count}</div>
                    <div>following</div>
                </div>
                
            </div>
            <div className={styles.bio}>{userInfo?.bio}</div>

        </div>
      </div>}
    </div>
  );
};

export default UserInfo;
