
/**
 * @param {string} password
 * @return {boolean}
 */
var strongPasswordCheckerII = function (password) {
    const minLength = 8;
    const charTypesRequired = 4;//lower case, upper case, digit, special "!@#$%^&*()-+".
    //The input is guaranteed to consist only of charTypesRequired.

    if (password.length < minLength) {
        return false;
    }
    const requiredCharacters = new Array(charTypesRequired).fill(false);
    checkForRequiredCharacter(password.charAt(0), requiredCharacters);

    for (let i = 1; i < password.length; ++i) {
        if (password.charAt(i - 1) === password.charAt(i)) {
            return false;
        }
        checkForRequiredCharacter(password.charAt(i), requiredCharacters);
    }
    return containsRequiredCharacters(requiredCharacters);
};

/**
 * @param {string} character
 * @param {boolean[]} requiredCharacters
 * @return {void}
 */
function checkForRequiredCharacter(character, requiredCharacters) {
    let index = 0;
    if (/[a-z]/.test(character)) {
        requiredCharacters[index] = true;
        return;
    }
    ++index;
    if (/[A-Z]/.test(character)) {
        requiredCharacters[index] = true;
        return;
    }
    ++index;
    if (/\d/.test(character)) {
        requiredCharacters[index] = true;
        return;
    }
    ++index;
    requiredCharacters[index] = true;
}

/**
 * @param {boolean[]} requiredCharacters
 * @return {boolean}
 */
function containsRequiredCharacters(requiredCharacters) {
    for (let criterion of requiredCharacters) {
        if (!criterion) {
            return false;
        }
    }
    return true;
}
