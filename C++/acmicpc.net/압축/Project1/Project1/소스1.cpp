#include <string>
#include <vector>
#include <iostream>
#include <map>

using namespace std;

vector<int> solution(string msg) {
    vector<int> answer;
    int msgLen = msg.length();

    map<string, int> dictionary;
    string ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    int dicLast = 1;

    //���ڸ� Ű��, ���ڸ� ������ �Ͽ� ���� �˻� �ӵ� ���
    for (int i = 1; i < ABC.length() + 1; i++) {
        dictionary.insert(pair<string, int>(ABC.substr(i - 1, 1), i));
        dicLast++;
    }

    int i = 0;

    map<string, int>::iterator iter;

    while (i < msgLen) {
        int subLen = 1;
        int prev = 0;
        int dicNum = -1;
        while (true) {
            //�������� ã��
            string msgSlice = msg.substr(i, subLen++);
            //cout << msgSlice << endl;
            if (dictionary.find(msgSlice) != dictionary.end()) {
                dicNum = dictionary[msgSlice];
                if (i + subLen > msgLen) {
                    break;
                }
            }
            else //������ ���� �ؽ�Ʈ�� ���
            {
                prev = -1;
                dictionary.insert(pair<string, int>(msgSlice, dicLast));
                //cout << "set " << msgSlice << " " << (dicLast) << endl;
                dicLast++;
                break;
            }
        }
        //cout << dicNum << endl;
        answer.push_back(dicNum);
        i += subLen - 1 + prev;

        subLen = 1;
    }
    /*
    for(iter = dictionary.begin(); iter != dictionary.end(); iter++){
        cout << "[" << iter->first << ", " << iter->second << "]" << " " ;
    }
    */
    return answer;
}