
public class Solution {

    private static final int minLength = 8;
    private static final int charTypesRequired = 4;//lower case, upper case, digit, special "!@#$%^&*()-+".
    //The input is guaranteed to consist only of charTypesRequired.

    public boolean strongPasswordCheckerII(String password) {
        if (password.length() < minLength) {
            return false;
        }
        boolean[] requiredCharacters = new boolean[charTypesRequired];
        checkForRequiredCharacter(password.charAt(0), requiredCharacters);

        for (int i = 1; i < password.length(); ++i) {
            if (password.charAt(i - 1) == password.charAt(i)) {
                return false;
            }
            checkForRequiredCharacter(password.charAt(i), requiredCharacters);
        }
        return containsRequiredCharacters(requiredCharacters);
    }

    private void checkForRequiredCharacter(char character, boolean[] requiredCharacters) {
        int index = 0;
        if (Character.isLowerCase(character)) {
            requiredCharacters[index] = true;
            return;
        }
        ++index;
        if (Character.isUpperCase(character)) {
            requiredCharacters[index] = true;
            return;
        }
        ++index;
        if (Character.isDigit(character)) {
            requiredCharacters[index] = true;
            return;
        }
        ++index;
        requiredCharacters[index] = true;
    }

    private boolean containsRequiredCharacters(boolean[] requiredCharacters) {
        for (boolean criterion : requiredCharacters) {
            if (!criterion) {
                return false;
            }
        }
        return true;
    }
}
