export const signup = () => {
    return $.ajax({
        url: '/api/user',
        method: 'Post'
    })
}

export const login = () => {
    return $.ajax({
        url: '/api/session',
        method: 'POST'
    })
}

export const logout = () => {
    return $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
}