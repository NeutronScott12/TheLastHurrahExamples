import React from 'react'
import { ListItem, ListItemButton } from '@mui/material'
import { Box } from '@mui/system'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'

export const BlogsContainer = () => {
    return (
        <div>
            <h2>Blogs Container</h2>
            <Box>
                {blogs.map((data) => {
                    return (
                        <ListItem key={data.id} disablePadding>
                            <Link to={`/blogs/${data.slug}`}>
                                <ListItemButton>{data.title}</ListItemButton>
                            </Link>
                        </ListItem>
                    )
                })}
            </Box>
        </div>
    )
}
