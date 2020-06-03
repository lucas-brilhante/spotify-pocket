export const setUserInfo = (email, name, image) =>({
    type: 'SET_USER_INFO',
    payload: {
        email,
        name,
        status: 'sucess',
        thumb: image,
    }
})