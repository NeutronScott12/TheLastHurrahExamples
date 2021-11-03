import React from 'react'
import { useParams } from 'react-router-dom'
// import { BinaryStashCommentComponent } from '@thelasthurrah/binary-stash-comment-component'

import { blogs } from '../data/blogs'

interface IParams {
    slug: string
}

export const BlogContainer = () => {
    const { slug } = useParams() as IParams

    const data = blogs.find((blog) => blog.slug === slug)
    // const application_name = 'Second Application'
    // const application_id = '63185b27-f626-40fa-a0ea-ae7eb33f0bdf'
    // const website_url = window.location.href

    console.log(data)
    return data ? (
        <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>

            {/* <BinaryStashCommentComponent
                application_name={application_name}
                application_id={application_id}
                title={data.title}
                website_url={website_url}
            /> */}
        </div>
    ) : (
        <div>Loading...</div>
    )
}
