import styles from '../../styles/UserPosts.module.css'
import GridIcon from '../Icons/GridIcon';
import ListIcon from '../Icons/ListIcon';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAndStoreUserPhotos} from '../../pages/api/users'
import List from './List';

const UserPosts = ({username}) => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.user.userPhotos);
  useEffect(()=>{dispatch(fetchAndStoreUserPhotos(username))},[])
  useEffect(() => {if(photos?.length>0)console.log(photos, photos[0]?.urls?.small)}, [photos])
  const [grid, setGrid] = useState(true);
  const handleList = () => {console.log("hi")
                            setGrid(false)}
  const handleGrid = () => {setGrid(true)}
  
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <div onClick={handleGrid}><GridIcon/></div>
        <div onClick={handleList}><ListIcon/> </div>
      </div>
      {grid && <div className={styles.grid}>
        {photos?.length>0 && photos?.map((post) => (
          <div key={post.id} className={styles.post}>
            <img className={styles.postImage} src={post?.urls?.regular} alt={`Post ${post.id}`} />
          </div>
        ))}
      </div>}
      {!grid && <List/>}
    </div>
  );
};

export default UserPosts;
