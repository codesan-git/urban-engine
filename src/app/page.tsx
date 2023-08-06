import { db } from "@/db";
import { users } from "@/db/schema";
import Link from 'next/link';

// export default async function Home() {
//   const result = await db.select().from(users);
//   return <div>
//     {JSON.stringify(result)}
//   </div>;
// }

export default function Home() {
  return <Link href='posts'>Posts</Link>;
}