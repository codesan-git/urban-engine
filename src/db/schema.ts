import { relations } from "drizzle-orm";
import {
  bigint,
  bigserial,
  boolean,
  char,
  date,
  decimal,
  doublePrecision,
  integer,
  interval,
  json,
  jsonb,
  numeric,
  pgEnum,
  pgTable,
  primaryKey,
  real,
  serial,
  smallserial,
  text,
  time,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: text("full_name"),
  phone: varchar("phone", { length: 256 }),
  address: varchar("address", { length: 256 }),
  score: integer("score"),
});

export const userRelations = relations(users, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [users.id],
    references: [profiles.userId],
  }),
  posts: many(posts),
}));

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  text: varchar("text", { length: 256 }),
  authorId: integer("author_id")
    .notNull()
    .references(() => users.id),
});

export const postRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

export const profiles = pgTable("profiles", {
  id: serial("id").primaryKey(),
  bio: varchar("bio", { length: 256 }),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
});

// export const moodEnum = pgEnum("mood", ["sad", "ok", "happy"]);
// export const testTable = pgTable("testTable", {
//   id: bigserial("id", { mode: "bigint" }).primaryKey(),
//   qty: bigint("qty", { mode: "bigint" }),
//   price: numeric("price", { precision: 7, scale: 2 }), // 12345.67
//   score: doublePrecision("score"),
//   delivered: boolean("delivered"),
//   // description: text("description"),
//   description: varchar("description", { length: 256 }),
//   name: char("name", { length: 10 }), // "chair     "
//   data: jsonb("data"),
//   // startAt: time("startAt", { withTimezone: false }).defaultNow(),
//   date: interval("date"),
//   mood: moodEnum("mood").default("ok"),
// });
