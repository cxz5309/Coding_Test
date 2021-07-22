package MS09;

import java.util.Scanner;

public class StudentScore {
	// 10반
	// 20명
	// 6과목
	// 국어, 영어, 수학, 사회, 과학, 자바
	static int[][][] classStudentScore = new int[10][20][6];
	// 합계, 평균
	static double[][][] classStudentData = new double[10][20][2];
	// 반등수, 전교등수
	static int[][][] classStudentRank = new int[10][20][2];
	
	// 과목별 반등수, 전교등수
	static int[][][][] subjectStudentRank = new int[10][20][6][2];
	
	
	// 학생이름
	static String[][] classStudentName = new String[10][20];
	
	// 학생수
	static int[] classCount = new int[10];
	// 반별 총점
	static int[][] classTotalScore = new int[10][6+1];
	// 반별 평균
	static double[][] classTotalAverage = new double[10][6+1];

	// 반 입력여부
	static boolean[] classYn = new boolean[10];
	// 학생 입력여부
	static boolean[][] studentYn = new boolean[10][20];
	
	// 과목
	static String[] subjects = {"국어","영어","수학","사회","과학","자바"};
	static Scanner sc = new Scanner(System.in);
	
	/**
	 * 숫자만 입력
	 * @return
	 */
	public static int inputNo() {
		int inputNo = 0;
		System.out.print(">> 입력 : ");
		while(!sc.hasNextInt()) {
			System.err.println("숫자만 입력할 수 있습니다.");
			sc.next();
			System.out.print(">> 입력 : ");
		}
		inputNo = sc.nextInt();
		return inputNo;
	}
	
	/**
	 * (start~end) 사이의 숫자만 입력
	 * @return
	 */
	public static int inputNo(int start, int end) {
		Integer inputNo = null;
		System.out.print(">> 입력 : ");
		while(!sc.hasNextInt() ||  ( (inputNo = Integer.parseInt( sc.next() ) ) < start ) || (inputNo > end)  )  {
			System.err.println("(" + start + "~" + end + ") 사이의 숫자만 입력할 수 있습니다.");
			if( inputNo == null )
				sc.next();
			inputNo = null;
			System.out.print(">> 입력 : ");
		}
		if( inputNo >= start && inputNo <= end ) return inputNo;
		inputNo = sc.nextInt();
		return inputNo;
	}
	
	
	/**
	 * (start~end) 사이의 숫자만 입력 + msg
	 * @return
	 */
	public static int inputNo(int start, int end, String msg) {
		Integer inputNo = null;
		System.out.print(msg);
		while(!sc.hasNextInt() ||  ( (inputNo = Integer.parseInt( sc.next() ) ) < start ) || (inputNo > end)  )  {
			System.err.println("(" + start + "~" + end + ") 사이의 숫자만 입력할 수 있습니다.");
			if( inputNo == null )
				sc.next();
			inputNo = null;
			System.out.print(msg);  
		}
		if( inputNo >= start && inputNo <= end ) return inputNo;
		inputNo = sc.nextInt();
		return inputNo;
	}
	
	/**
	 * 메뉴
	 * @return
	 */
	public static int menu() {
		System.out.println("========= 성적 관리 프로그램 =========");
		System.out.println("1. 성적 입력");
		System.out.println("2. 전체 조회");
		System.out.println("3. 반별 조회");
		System.out.println("4. 과목별 조회");
		System.out.println("5. 학생 조회");
		System.out.println("0. 종료");
		System.out.println("==================================");
		
		return inputNo(0, 5);
	}
	
	/**
	 * 1. 성적 입력
	 */
	public static void input() {
		System.out.println("========= 1. 성적 입력 =========");
		System.out.println(">> 반 번호(1~10) ");
		int classNo = inputNo(1, 10);
		int studentNo = 0;
		
		System.out.println("(1) 일괄 입력");
		System.out.println("(2) 개별 입력");
		int inputMenu = inputNo(1, 2);
		
		switch (inputMenu) {
				case 1:
						inputAll(classNo);
						break;
				case 2: 
						System.out.print(">> 학생 번호(1~20) : ");
						studentNo = sc.nextInt();
						inputStudent(classNo, studentNo);
				default:
						break;
		}
		
	}
	
	/**
	 * 1. 성적 입력
	 * 	(1) 일괄 입력
	 */
	public static void inputAll(int classNo) {
		System.out.println("========= 1-(1). 일괄 입력 =========");
		System.out.println(">> 학생 수 ");
		int studentCount = inputNo(1,20);
		classCount[classNo-1] = studentCount;
		
		for (int i = 0; i < studentCount; i++) {
			System.out.println("[" + (i+1) + "]번 학생");
			
			// 이름
			System.out.print(">> 이름 : ");
			classStudentName[classNo-1][i] = sc.next();
			// 성적
			System.out.println(">> 성적 :");
			subjects();
			for (int j = 0; j < classStudentScore[classNo][i].length; j++) {
				classStudentScore[classNo-1][i][j] = inputNo(0, 100, ">> " + subjects[j]+ " : ");
			}
			
			// 총점, 평균 계산
			calcSumAverage(classNo, i+1);
		}
		
		// 반 입력여부
		classYn[classNo-1] = true;
		
		// 학생 입력여부
		for (int i = 0; i < studentCount; i++) {
			studentYn[classNo-1][i] = true;
		}
		
		// 등수 계산
		calcRank(classNo);
		
		// 반별 합계/평균 계산
		calcClassTotal(classNo);
		
		System.out.println(classNo + " 반 " + studentCount + " 명의 학생 성적 입력완료!");
	}
	
	/**
	 * 1. 성적 입력
	 * 	(2) 개별 입력
	 */
	public static void inputStudent(int classNo, int studentNo) {
		System.out.println("========= 1-(2). 개별 입력 =========");
		// 이름
		System.out.print(">> 이름 : ");
		classStudentName[classNo-1][studentNo-1] = sc.next();
		sc.nextLine();
		
		// 성적
		System.out.println(">> 성적 :");
		subjects();
		
		for (int i = 0; i < classStudentScore[classNo-1][studentNo-1].length; i++) {
			classStudentScore[classNo-1][studentNo-1][i] = inputNo(0, 100, ">> " + subjects[i]+ " : ");
		}
		
		// 반 입력여부
		classYn[classNo-1] = true;
		
		// 학생 입력여부
		studentYn[classNo-1][studentNo-1] = true;
		
		// 총점, 평균 계산
		calcSumAverage(classNo, studentNo);
		
		// 등수 계산
		calcRank(classNo);
		
		// 반별 합계/평균 계산
		calcClassTotal(classNo);
		
		System.out.println(classNo + " 반 " + studentNo + " 번 학생의 성적 입력완료!");
	}
	
	

	/**
	 * 2. 전체 조회
	 */
	public static void listAll() {
		
		// TO-DO
		
	}
	
	/**
	 * 3. 반별 조회
	 */
	public static void classList() {
		
		// TO-DO
		
	}
	

	/**
	 * 4. 과목별 조회
	 */
	public static void subjectList() {
		
		// TO-DO
	}
	
	/**
	 * 4.과목별 조회
	 * 	(1) 전체 조회
	 * @param subjectNo
	 */
	public static void subjectListAll(int subjectNo) {

		// TO-DO
	}

	/**
	 * 4. 과목별 조회
	 *  (2) 반별 조회
	 * @param classNo
	 * @param subjectNo
	 */
	public static void subjectList(int subjectNo) {

		// TO-DO
	}
	
	/**
	 * 5. 학생 조회
	 */
	public static void searchStudent() {
		
		// TO-DO

	}
	
	
	/**
	 * 과목 출력
	 */
	public static void subjects() {
		for (int i = 0; i < subjects.length; i++) {
			System.out.print(subjects[i] + " ");
		}
		System.out.println();
	}
	
	/**
	 * 조회 탭 출력 (전체) 
	 */
	public static void titleTab() {
		for (int i = 0; i < subjects.length; i++) {
			System.out.print(subjects[i] + "\t");
		}
		System.out.print("총점\t평균\t");
		System.out.print("반등수\t전교등수\t");
	}
	
	
	/**
	 * 조회 탭 출력 (과목)
	 */
	public static void titleTab(int subjectNo) {
		System.out.print(subjects[subjectNo-1] + "\t");
		System.out.print("반등수\t전교등수\t");
	}
	
	
	/**
	 * (학생) 총점, 평균 계산
	 * @param classStudentScore
	 * @param classNo
	 * @param studentNo
	 */
	public static void calcSumAverage(int classNo, int studentNo) {
		int sum = 0;
		double avg = 0.0;
		
		// TO-DO
	}
	
	/**
	 * 등수 계산
	 * @param classNo
	 */
	public static void calcRank(int classNo) {
		
		// 반 등수 계산
		// TO-DO
		// 반 등수 계산 (끝)
		
		// 과목별 반 등수 계산
		// TO-DO
		// 과목별 반 등수 계산 (끝)
		
		
		// 전교 등수 계산
		for (int i = 0; i < classStudentData[classNo-1].length; i++) {
			classStudentRank[classNo-1][i][1] = 1;
		}
		
		// 전교 학생 수
		int allStudentCount = 0;
		for (int i = 0; i < studentYn.length; i++) {
			for (int j = 0; j < studentYn[i].length; j++) {
				if(studentYn[i][j])
					allStudentCount++;
			}
		}
		
		// 전교생 :  
		// [학생수][0] : 총점
		// [학생수][1] : 등수
		int [][] allStudentRank = new int[allStudentCount][2];
		
		for (int i = 0; i < allStudentRank.length; i++) {
			allStudentRank[i][1] = 1;
		}
		
		int k = 0;
		for (int i = 0; i < classStudentData.length; i++) {
			if( !classYn[i] ) continue;
			for (int j = 0; j < classStudentData[i].length; j++) {
				if( !studentYn[i][j] ) continue;
				allStudentRank[k++][0] = (int) classStudentData[i][j][0];
			}
		}
		
		for (int i = 0; i < allStudentRank.length; i++) {
			for (int j = 0; j < allStudentRank.length; j++) {
				if( allStudentRank[i][0] < allStudentRank[j][0] )
					allStudentRank[i][1]++;
			}
		}
		
		k = 0;
		for (int i = 0; i < classStudentRank.length; i++) {
			if( !classYn[i] ) continue;
			for (int j = 0; j < classStudentRank[i].length; j++) {
				if( !studentYn[i][j] ) continue;
				classStudentRank[i][j][1] = allStudentRank[k++][1];
			}
		}
		// 전교 등수 계산 (끝)
		
		
		// 과목별 전교 등수 계산
		for (int x = 0; x < 6; x++) {
			
			// TO-DO
		}
		// 과목별 전교 등수 계산 (끝)
		
	}
	
	/**
	 * (반별) 총점, 평균 계산
	 * @param classNo
	 */
	public static void calcClassTotal(int classNo) {
		for (int i = 0; i < classStudentScore[classNo-1].length; i++) {
			// 과목별 총점
			for (int j = 0; j < classStudentScore[classNo-1][i].length; j++) {
				classTotalScore[classNo-1][j] += classStudentScore[classNo-1][i][j];
			}
		}
		
		// 반 전체 총점
		// TO-DO
		
		// 과목별 평균
		// TO-DO
		
		// 반 전체 평균
		// TO-DO
		
		
	}

	public static void main(String[] args) {
		
		do {
			int menuNo = menu();
			if( menuNo == 0 ) break;
			
			switch (menuNo) {
				case 1:
						input();
						break;
				case 2:
						listAll();
						break;
				case 3:
						classList();
						break;
				case 4:
						subjectList();
						break;
				case 5:
						searchStudent();
						break;
				default:
						break;
			}
			
		} while (true);
		
		System.out.println("프로그램 종료.");
		
	}
}

