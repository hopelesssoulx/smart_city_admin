const TokenKey = "token";


export function getToken() {
    return localStorage.getItem(TokenKey);
}

export function setToken(token) {
    localStorage.setItem(TokenKey, token);
}

export function rmToken() {
    localStorage.removeItem('token')
}
