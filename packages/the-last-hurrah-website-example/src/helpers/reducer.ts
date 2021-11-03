interface ICurrentUser {
    username: string
}

const currentUser = localStorage.getItem('currentUser')
    ? localStorage.getItem('currentUser')
    : ''
const getToken = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : ''

let user = currentUser ? JSON.parse(currentUser) : ''

let token = getToken ? JSON.parse(getToken) : ''

export interface IState {
    user: '' | ICurrentUser
    token: string | null
    errorMessage: string | null
    loading: boolean
    logged_in: boolean
}

export const initialState: IState = {
    user,
    token,
    errorMessage: null,
    loading: false,
    logged_in: currentUser ? true : false,
}

export enum ActionType {
    REQUEST_LOGIN = 'REQUEST_LOGIN',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGOUT = 'LOGOUT',
    LOGIN_ERRORS = 'LOGIN_ERRORS',
}

export interface IAuthAction {
    type: ActionType
    payload?: IState
}

export const AuthReducer = (
    initialState: IState,
    action: IAuthAction,
): IState => {
    switch (action.type) {
        case ActionType.REQUEST_LOGIN:
            return {
                ...initialState,
                loading: true,
            }
        case ActionType.LOGIN_SUCCESS:
            return {
                ...initialState,
                user: action.payload ? action.payload.user : '',
                token: action.payload ? action.payload.token : '',
                logged_in: true,
                loading: false,
            }
        case ActionType.LOGOUT:
            return {
                ...initialState,
                user: '',
                token: '',
                logged_in: false,
            }
        case ActionType.LOGIN_ERRORS:
            return {
                ...initialState,
                loading: false,
                errorMessage: action.payload
                    ? action.payload?.errorMessage
                    : '',
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
