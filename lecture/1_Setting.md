# Setting
* 설치 관리자
  * Linux : apt(apt-get), yum
  * MacOS : Homebrew
  * Windows : Chocolatey
* CLI 환경에서 셋팅
  1. chocolatey 설치 
      * individual > command 명령어를 관리자권한으로 실행한 powershell에서 실행
      * <code>choco -v</code>으로 설치 확인
      * <code>choco install 패키지명 [-y] [--version 버전번호]</code> : 패키지 설치
      * <code>choco upgrade 패키지명</code> : 설치한 패키지 업그레이드
  2. nodejs-lts openjdk11 설치
      * <code>node -v</code>, <code>java --version</code>으로 설치 확인
        <br>> java는 반드시 <code>--version</code>을 사용해야함

## Android Studio
1. .exe 파일로 설치
2. More Action > SDK Manager
    * API Level 확인 > 하위 호환성을 위해 어느정도 버전까지 전부 선택
      * (본 프로젝트에서는 8.0 Oreo까지 선택함)
3. 시스템 변수 지정
    * JAVA_HOME : 자바 경로(C:\Program Files\OpenJDK\openjdk-11.0.16_8)
    * ANDROID_SDK : 안드로이드 경로(C:\Users\gmlcj\AppData\Local\Android\Sdk)
    * 사용자 변수 > PATH에 <code>%JAVA_HOME%\bin</code>, <code>%ANDROID_SDK%\platform-tools</code> 추가
4. virtual manager

### Project 생성
* new project > empty activity 선택 후 생성
* activity_main.xml : 메인 페이지
