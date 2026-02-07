export const signup = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find((u) => u.email === email);
    if (exists) return false;

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", email);
    return true;
};

export const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const valid = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!valid) return false;

    localStorage.setItem("currentUser", email);
    return true;
};

export const logout = () => {
    localStorage.removeItem("currentUser");
};

export const getCurrentUser = () => {
    return localStorage.getItem("currentUser");
};