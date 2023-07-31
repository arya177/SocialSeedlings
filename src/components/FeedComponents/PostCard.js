import Head from 'next/head';
import {useState,useEffect} from 'react'
import styles from '../../styles/PostCard.module.css'

const PostCard = ({photo,userProfileImageUrl}) => {
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };
    useEffect(()=>{
        console.log(photo, userProfileImageUrl)
        console.log(photo.user.username, photo.user.name, photo.likes, photo.description)},[])
    const [isCommented, setIsCommented] = useState(false);
    const handleCommentClick = () => {
        setIsCommented(!isCommented);
    };
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.profile}>
                <img className={styles.profileImage} src={userProfileImageUrl} alt='photo' />
                <div className={styles.profileName}>{photo?.user?.username}</div>
            </div>
        </div>
        <div className={styles.right}>
            <div className={styles.user}>
                <p>{photo?.user?.username}</p>
                <p>{photo?.user?.name}</p>
            </div>
            <div className={styles.line}></div>
            <div className={styles.post}>
                <img className={styles.postImage}  src={photo?.urls?.regular} alt='photo' />
            </div>
            <div style={{display: 'flex', alignItems: 'center', padding: '3px'}}>
                <div className={styles.heartIcon} onClick={handleLikeClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`${styles.hicon} ${isLiked ? styles.liked : ''}`}
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 16.1 2 12.4 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.9-3.4 7.6-8.55 11.54L12 21.35z" />
                    </svg>
                </div>
                <div className={styles.commentIcon} onClick={handleCommentClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className={`${styles.cicon} ${isCommented ? styles.commented : ''}`}
                    >
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6l2 3 2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                    </svg>
                </div>
            </div>
            <div className={styles.postLike}><p>{photo?.likes}</p></div>
            <div className={styles.description}><p>{photo?.description}</p></div>

            
        </div>
    </div>
  );
};

export default PostCard;
