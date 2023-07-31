import {useState, useEffect} from 'react'
import UserInfo from "@/components/UserProfile/UserInfo";
import UserPosts from "@/components/UserProfile/UserPosts";
import styles from '../../styles/users.module.css';
import Navbar from "@/components/Navbar";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const randomPhotos = useSelector((state) => state.post.randomPhotos);
  const {users} = router.query

  useEffect(() => {console.log(users)},[]);
  
  return (
      <div className={styles.container}>
        <Navbar/>
        <div><UserInfo username={users}/></div>
        <div className={styles.division}></div>
        <div><UserPosts username={users}/></div>
      </div>
    );
  };
  
export default User;
  