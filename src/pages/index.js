// pages/index.tsx

import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  // Use useEffect to redirect to the login page when the component mounts
  useEffect(() => {
    router.push('/login');
  }, [router]);

  return null; // Return null or a loading spinner while redirecting
};

export default IndexPage;
