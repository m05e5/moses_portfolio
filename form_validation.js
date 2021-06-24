function isUpper(str) {
    return !/[a-z]/.test(str) && /[A-Z]/.test(str);
}