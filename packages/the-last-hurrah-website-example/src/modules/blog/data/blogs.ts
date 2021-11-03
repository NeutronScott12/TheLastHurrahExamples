import { lorem } from './lorem-ipsum'

type Blogs = { id: number; title: string; slug: string; content: string }

export const blogs: Blogs[] = [
    {
        id: 1,
        title: 'First Blog',
        slug: 'first-blog',
        content: lorem,
    },
    {
        id: 2,
        title: 'Second Blog',
        slug: 'second-blog',
        content: lorem,
    },
]
