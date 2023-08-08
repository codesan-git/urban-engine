import { users } from "@/db/schema";
import { InferModel } from "drizzle-orm";
export * from './apiTypes'

export type SafeUser = InferModel<typeof users, "select">;
// export type SafeUser = Omit<typeof users, "select">;
