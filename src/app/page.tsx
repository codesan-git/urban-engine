import getUsers from '@/action/getUsers';

import Link from 'next/link';

export default async function Home() {
  const getUser = await getUsers()
  return <div>
    <div>
      {getUser.map((data)=> (
        <div key={data.id}>
          <p>{data.id}</p>
          <p>{data.fullName}</p>
          <p>{data.score}</p>
        </div>
      ))}
    </div>
    <Link href='posts'>Posts</Link>
  </div>
}
