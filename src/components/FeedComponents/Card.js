import React from 'react'
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';

const Card = ({photo,userProfileImageUrl}) => {
    const router  = useRouter()
    const [isLiked, setIsLiked] = useState(false);
    const handleLikeClick = () => {
      setIsLiked(!isLiked);
    };
    useEffect(()=>{
        console.log(photo, userProfileImageUrl)
        console.log(photo?.user.username, photo?.user.name, photo?.likes, photo?.description)},[])
    const [isCommented, setIsCommented] = useState(false);
    const handleCommentClick = () => {
        setIsCommented(!isCommented);
    };


    const handleProfileClick = () => {
        router.push(`/users/${photo.user.username}`)
    }

    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', border: '1px solid lightgrey', padding: '2rem', borderRadius: '1rem'}}>
                <div style={{display:'flex', alignItems: 'center'}}>
                    <div onClick={handleProfileClick}>
                        <img style={{width: '3.5rem', height:'3.5rem', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'}} src={userProfileImageUrl} alt='photo' />
                    </div>
                    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0.75rem'}}>
                        <p style={{fontSize: '15px', color: 'grey', lineHeight:'1', margin: '3px', padding: '0'}}>{photo?.user?.username}</p>
                        <p style={{fontSize: '20px', lineHeight:'1', margin: '3px', padding: '0'}}>{photo?.user?.name}</p>
                       
                    </div>
                </div>
                <div style={{marginTop: '1rem'}}>
                    {photo?.description}
                </div>
                <div style={{marginTop: '1rem', width: '100%'}}>
                    <img style={{width: 'inherit', height:'30rem', borderRadius: '1.5rem', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'}} src={photo?.urls?.regular} alt='photo' />
                </div>
                <div style={{display: 'flex', alignItems: 'center', padding: '3px'}}>
                    <div style={{cursor: 'pointer', marginTop: '2%', marginLeft: '1%'}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{width: '30px', height: '30px', fill: '#ccc', transition: 'fill 0.2s ease'}}
                            // className={`${styles.hicon} ${isLiked ? styles.liked : ''}`}
                        >
                            <path d="M12 21.35l-1.45-1.32C5.4 16.1 2 12.4 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.9-3.4 7.6-8.55 11.54L12 21.35z" />
                        </svg>
                    </div>
                    <div style={{cursor: 'pointer'}}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            style={{width: '28px', height: '28px', fill: '#ccc', transition: 'fill 0.2s ease', marginTop: '7px', marginLeft: '5px'}}
                            // className={`${styles.cicon} ${isCommented ? styles.commented : ''}`}
                        >
                            <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6l2 3 2-3h6c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                        </svg>
                    </div>
                </div>
                <div style={{width: '100%', height: '0', border: '1px solid lightgrey'}}></div>
                <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <input 
                    type="comment"
                    placeholder="Comment"
                    style={{padding: '0.5rem',
                        margin: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        width: 'inherit',
                        height: 'fit-content'}}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
              
                />
                <button style={{padding: '0.5rem 1rem',
                    margin: '1rem',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'}} type="submit">
                    Send
                </button>

                </div>
            </div>
        </>
    );
}
export default Card;