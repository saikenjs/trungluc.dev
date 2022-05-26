import { Link } from '@remix-run/react';

export default function Home() {
  return (
    <>
      <h1>Saiken Space</h1>
      <Link className='text-blue-400' to='/blog'>
        Blog
      </Link>
    </>
  );
}
