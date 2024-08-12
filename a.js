//전역함수
var tagid;
var tagpw;
var divx;

//지역함수
function login() {

    tagid = document.getElementById("id");
    tagpw = document.getElementById("pw");
    divx = document.getElementById("x");
    console.log(id);
    console.log(pw);
    
    var pw = tagpw.value;
    var id = tagid.value;

    
    if (id == "cat" && pw == "1234") { //cat+1234외에는 올바르지않은입력
    
        divx.innerHTML = id+ "회원님 반갑습니다.";
        alert("로그인 성공") //올바른 입력시 뜨는 창
    } else { //올바르지 않은 입력창을 불러올시
    
        alert("로그인 실패"); //로그인 실패로 끝
    }
    
    
}    


