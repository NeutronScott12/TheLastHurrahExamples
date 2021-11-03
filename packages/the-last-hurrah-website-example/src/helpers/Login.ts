import { Dispatch } from 'react'
import { ActionType, IAuthAction } from './reducer'

export const loginUser = async (
    dispatch: Dispatch<IAuthAction>,
    { payload }: IAuthAction,
) => {
    dispatch({ type: ActionType.REQUEST_LOGIN })
    if (payload?.user) {
        dispatch({ type: ActionType.LOGIN_SUCCESS, payload })
        localStorage.setItem('currentUser', JSON.stringify(payload.user))
        localStorage.setItem('token', JSON.stringify(payload.token))
        return payload
    }
}

export const logOut = async (dispatch: Dispatch<IAuthAction>) => {
    dispatch({ type: ActionType.LOGOUT })
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
}
