#include <string>
#include <vector>
#include <bitset>
#include <iostream>
#include <regex>

using namespace std;
using std::regex;
using std::regex_replace;

vector<string> solution(int n, vector<int> arr1, vector<int> arr2)
{
    vector<string> answer;
    bitset<8> arr1Bit, arr2Bit;
    string bitString;
    int bitLen;
    for (int i = 0; i < n; i++)
    {
        //bitset사용
        arr1Bit = bitset<8>(arr1[i]);
        arr2Bit = bitset<8>(arr2[i]);

        arr1Bit = arr1Bit | arr2Bit;

        bitString = arr1Bit.to_string();
        bitLen = bitString.length();
        bitString = bitString.substr(bitLen - n, bitLen);

        bitString = regex_replace(bitString, regex("1"), "#");
        bitString = regex_replace(bitString, regex("0"), " ");
        answer.push_back(bitString);
    }
    return answer;
}