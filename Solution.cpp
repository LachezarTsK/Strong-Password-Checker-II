
#include <bitset>
#include <string>
using namespace std;

class Solution {
    
    inline static const int minLength = 8;
    inline static const int charTypesRequired = 4; //lower case, upper case, digit, special "!@#$%^&*()-+".
    //The input is guaranteed to consist only of charTypesRequired.

public:
    bool strongPasswordCheckerII(string password) {
        if (password.length() < minLength) {
            return false;
        }
        bitset<charTypesRequired> requiredCharacters{};
        checkForRequiredCharacter(password[0], requiredCharacters);

        for (int i = 1; i < password.length(); ++i) {
            if (password[i - 1] == password[i]) {
                return false;
            }
            checkForRequiredCharacter(password[i], requiredCharacters);
        }
        return requiredCharacters.count() == charTypesRequired;
    }

private:
    void checkForRequiredCharacter(char character, bitset<charTypesRequired>& requiredCharacters) {
        int index = 0;
        if (islower(character)) {
            requiredCharacters[index] = 1;
            return;
        }
        ++index;
        if (isupper(character)) {
            requiredCharacters[index] = 1;
            return;
        }
        ++index;
        if (isdigit(character)) {
            requiredCharacters[index] = 1;
            return;
        }
        ++index;
        requiredCharacters[index] = 1;
    }
};
