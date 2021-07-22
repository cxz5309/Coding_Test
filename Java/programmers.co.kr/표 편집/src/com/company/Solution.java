package com.company;

import java.util.LinkedList;

class Solution {
    public static LinkedList<Integer> idList;
    public static LinkedList<Integer> removedList;
    public static int idx;


    public static void query(String st){
        int num = 0;
        switch (st.charAt(0)){
            case 'D':
                num = st.charAt(st.length()-1) - '0';
                idx += num;
                break;
            case 'U':
                num = st.charAt(st.length()-1) - '0';
                idx -= num;
                break;
            case 'C':
                Integer saved = idList.get(idx);
                idList.remove((int)idx);
                removedList.add(saved);
                break;
            case 'Z':
                Integer repair = removedList.pollLast();
                int i=0;
                if(!idList.isEmpty()) {
                    while (idList.get(i) < repair) {
                        i++;
                        if (i >= idList.size())
                            break;
                    }
                }
                idList.add(i, repair);
                if(i<=idx){
                    idx++;
                }
                break;
            default:
                break;
        }

        if(idx == idList.size()){
            idx = idList.size() - 1;
        }
        if(idx < 0 || idList.isEmpty()){
            idx = 0;
        }
    }

    public static String solution(int n, int k, String[] cmd) {
        String answer = "";

        idList = new LinkedList<Integer>();
        removedList = new LinkedList<Integer>();
        for(Integer i = 0;i<n;i++){
            idList.add(i);
        }
        idx = k;

        for(int i=0;i<cmd.length;i++){
            query(cmd[i]);
            System.out.println(idList);
            System.out.println(removedList);
            System.out.println(idx);
        }
        int idListNum = idList.pop();
        for(int i=0;i<n;i++){
            if(i<idListNum){
                answer += "X";
            }
            else{
                if(!idList.isEmpty()){
                    idListNum = idList.pop();
                }
                else{
                    idListNum = n;
                }

                answer += "O";
            }
        }

        return answer;
    }
    public static void main(String[] args) {
        int n = 8;
        int k = 0;
        String[] cmd = {"C","C","C","C","C","C","C", "Z", "Z", "Z", "Z", "U 2", "C"};
        System.out.println(solution(n,k,cmd));
    }
}
