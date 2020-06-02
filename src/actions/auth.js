
export const authentication = (accessToken, expirationTime, tokenType, isLogged) => ({
    type: 'AUTHENTICATION',
    payload: {
        accessToken,
        expirationTime,
        tokenType,
        isLogged
    }
});