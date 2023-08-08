import { db } from "@/db";
import { users } from "@/db/schema";

export default async function getUsers() {
    const getUsers = await db.select().from(users);

    const usersMap = getUsers.map((data)=>({
        ...data
    }))
  return usersMap
}
