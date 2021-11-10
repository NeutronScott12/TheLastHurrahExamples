import React from 'react'

import {
    BinaryStashAuthenticator,
    ILoginResponse,
} from '@thelasthurrah/binary-stash-authentication'
import { loginUser } from '../../../helpers/Login'
import { useAuthDispatch } from '../../../helpers/LoginContext'
import { useNavigate } from 'react-router-dom'

export const LoginContainer = () => {
    const navigate = useNavigate()

    let application_id = '5348a2e0-ed40-4491-85dc-4fdeaa4326cf'
    let application_name = 'First Application'

    const dispatch = useAuthDispatch()

    const login = async (data: ILoginResponse) => {
        //@ts-ignore
        let response = await loginUser(dispatch, {
            payload: {
                token: data.token,
                user: { username: data.user.username },
            },
        })

        if (response?.user) {
            navigate('/blogs')
        }
    }

    return (
        <BinaryStashAuthenticator
            application_id={application_id}
            application_name={application_name}
            logInCallback={login}
        />
    )
}
