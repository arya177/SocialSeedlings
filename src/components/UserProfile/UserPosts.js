import styles from '../../styles/UserPosts.module.css'
import GridIcon from '../Icons/GridIcon';
import ListIcon from '../Icons/ListIcon';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAndStoreUserPhotos} from '../../pages/api/users'

const UserPosts = ({username}) => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.user.userPhotos);
  useEffect(()=>{dispatch(fetchAndStoreUserPhotos(username))},[])
  useEffect(() => {if(photos?.length>0)console.log(photos, photos[0]?.urls?.small)}, [photos])
  
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <GridIcon/>
        <ListIcon/> 
      </div>
      <div className={styles.grid}>
        {photos?.length>0 && photos?.map((post) => (
          <div key={post.id} className={styles.post}>
            <img className={styles.postImage} src={post?.urls?.regular} alt={`Post ${post.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
