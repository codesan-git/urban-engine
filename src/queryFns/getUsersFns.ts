import { db } from "@/db";
import { users } from "@/db/schema";
const getUsers = async () => await db.select().from(users);
export const getUsersQueryFn = () => getUsers();