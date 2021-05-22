#include <string>
#include <vector>
#include <iostream>
#include <regex>

using namespace std;

long long convertTwo(int num) {
    long long result = 0;
    for (long long i = 1; num > 0; i *= 10) {
        long long binary = num % 2;
        result += binary * i;
        num /= 2;
    }
    return result;
}

vector<string> solution(int n, vector<int> arr1, vector<int> arr2) {
    vector<string> answer;
    string bitString;
    int bitLen;
    for (int i = 0; i < n; i++) {
        bitString = to_string(convertTwo(arr1[i] | arr2[i]));
        //cout << bitString;

        while (bitString.length() < n) {
            bitString.insert(0, "0");
        }
        //cout << bitString;

        bitString = regex_replace(bitString, regex("1"), "#");
        bitString = regex_replace(bitString, regex("0"), " ");
        answer.push_back(bitString);
        //cout << endl;
    }
    return answer;
}

int main() {
    long long x = 100000000000000;
    long long y = 10000000000000;
    cout << convertTwo(9999) << endl;
    cout << x + y;
}