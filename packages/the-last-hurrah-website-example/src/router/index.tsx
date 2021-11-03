import { useRoutes } from 'react-router'
import { LoginContainer } from '../modules/authentication/login'
import { BlogContainer } from '../modules/blog/containers/BlogContainer'
import { BlogsContainer } from '../modules/blog/containers/BlogsContainer'
import { HomeContainer } from '../modules/home/containers/HomeContainer'

export const SiteRouter = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <HomeContainer />,
        },
        {
            path: '/login',
            element: <LoginContainer />,
        },
        {
            path: 'blogs',
            element: <BlogsContainer />,
        },
        {
            path: '/blogs/:slug',
            element: <BlogContainer />,
        },
    ])

    return routes
}
