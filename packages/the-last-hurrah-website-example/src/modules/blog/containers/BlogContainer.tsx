import React from 'react'
import { useParams } from 'react-router-dom'
import { BinaryStashCommentComponent } from '@thelasthurrah/binary-stash-comment-component'

import { blogs } from '../data/blogs'
import { useTheme } from '@mui/material'

interface IParams {
    slug: string
}

export const BlogContainer = () => {
    const { slug } = useParams() as IParams
    const theme = useTheme()

    const data = blogs.find((blog) => blog.slug === slug)
    const application_name = 'First Application'
    const application_id = '5348a2e0-ed40-4491-85dc-4fdeaa4326cf'
    const website_url = window.location.href

    const dark_theme = theme.palette.mode === 'dark' ? true : false

    console.log('DARK_THEME', dark_theme)

    return data ? (
        <div>
            <h2>{data.title}</h2>
            <p>{data.content}</p>

            <BinaryStashCommentComponent
                dark_theme={dark_theme}
                application_name={application_name}
                application_id={application_id}
                title={data.title}
                website_url={website_url}
            />
        </div>
    ) : (
        <div>Loading...</div>
    )
}
