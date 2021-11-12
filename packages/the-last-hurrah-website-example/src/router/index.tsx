import { useRoutes } from 'react-router'
import { useAuthState } from '../helpers/LoginContext'
import { IState } from '../helpers/reducer'
import { LoginContainer } from '../modules/authentication/login'
import { BlogContainer } from '../modules/blog/containers/BlogContainer'
import { BlogsContainer } from '../modules/blog/containers/BlogsContainer'
import { HomeContainer } from '../modules/home/containers/HomeContainer'

export const SiteRouter = () => {
    const userDetails = useAuthState() as IState

    const routes = useRoutes([
        {
            path: '/',
            element: <HomeContainer />,
        },
        {
            path: '/login',
            element: userDetails.logged_in ? (
                <BlogsContainer />
            ) : (
                <LoginContainer />
            ),
        },
        {
            path: 'blogs',
            element: userDetails.logged_in ? (
                <BlogsContainer />
            ) : (
                <LoginContainer />
            ),
        },
        {
            path: '/blogs/:slug',
            element: userDetails.logged_in ? (
                <BlogContainer />
            ) : (
                <LoginContainer />
            ),
        },
    ])

    return routes
}
