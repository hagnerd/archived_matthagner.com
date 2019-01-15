import React from 'react'
import { useTrail, config } from 'react-spring/hooks'

import BlogPostCard from './blog-post-card'

function BlogList({ posts }) {
  const props = useTrail(posts.length, {
    native: true,
    config: config.stiff,
    delay: 200,
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
  })

  return posts.map(({ post }, index) => (
    <BlogPostCard key={post.fields.slug} style={props[index]} post={post} />
  ))
}

export default BlogList
