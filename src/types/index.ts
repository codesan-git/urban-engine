import { users } from "@/db/schema";
import { InferModel } from "drizzle-orm";
export * from './apiTypes'
export type User = InferModel<typeof users, "select">;

