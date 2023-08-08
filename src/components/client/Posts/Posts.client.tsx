'use client';

import { getPostsQueryFn } from '@/queryFns/postsQueryFns';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Post as PostType } from '@/types';
import { Post } from './Post.client';

export const Posts = () => {
  const { data: posts, status, error } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPostsQueryFn,
  });

  if (status === "loading") return <h1>Loading...</h1>
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>
  if (!posts) return <div>Not found</div>;

  return (
    <div className='divide-y'>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};