const uNameElement = document.getElementById("uName");
const idElement = document.getElementById("id");
const pwdElement = document.getElementById("pwd");
const loginButton = document.getElementById("login-btn");

const userNameElement = document.getElementById("userName");
const userIdElement = document.getElementById("userId");
const userPwdElement = document.getElementById("userPwd");

const userLoginInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
// 로컬 스토리지에 "userInfo" 키로 저장된 데이터를 JSON 형태로 가져와 객체로 반환
// ||{} : 값이 입력되지 않아 null 처리되었을때 오류가 발생하는 것을 방지.

console.log(userLoginInfo); // userInfo 데이터 확인용

// 콘솔창에 확인용 출력!
userNameElement.textContent = `uName : ${userLoginInfo.uName || "None"}`;
userIdElement.textContent = `id : ${userLoginInfo.id || "None"}`;
userPwdElement.textContent = `pwd : ${userLoginInfo.pwd || "None"}`;

loginButton.addEventListener("click", () => {
  ///// 유효성 검사 /////
  const uNameValid = uNameElement.value.trim();
  const idValid = idElement.value.trim();
  const pwdValid = pwdElement.value.trim();

  // 규칙1. username은 공백이 없어야한다.
  if (!uNameValid) {
    alert("Username을 입력해주세요!");
    return;
  }
  // 규칙2. id의 길이는 4~10자
  if (idValid.length < 4 || idValid.length > 10) {
    alert("id는 4~10자 사이의 문자 또는 숫자로 이루어져야 합니다!");
    return;
  }
  // 규칙3. password의 길이는 3~6자
  if (pwdValid.length < 3 || pwdValid.length > 6) {
    alert("password는 3~6자 사이의 숫자로 입력해주세요!");
    return;
  }

  // 성공적으로 회원가입
  alert("사용자 등록이 되었습니다!");

  // Home 화면으로 이동
  alert("홈 화면으로 이동합니다.");
  window.location.href = "../home.html";

  let userInfo = {
    uName: uNameValid, // 사용자 이름 (uNameValid = uNameElement.value)
    id: idValid, // 사용자 ID (idValid = idElement.value)
    pwd: pwdValid, // 사용자 비밀번호(pwdValid = pwdElement.value)
  };
  localStorage.setItem("userInfo", JSON.stringify(userInfo)); // 입력된 값을 (객체) Json 문자열로 변환하여 로컬스토리지에 저장
});
