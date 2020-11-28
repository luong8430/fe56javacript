console.log("hello everyone");
// Biến
// String 
var username = "hello word";
var address = "112 Cao Thang";
// Number 
var age = 18;
// Boolean 
var status = true;
// Null 
var numberStudent = null;
// undefined 
var people;
var firstName = "Tran";
var last_Name = "Luong";

// console.log("ten la:" + username);
// // console.log("Dia chi" + address);
// console.log("ten là:" + username, "dia chi:" + address);


// Hoisting 
console.log("fullname: " + fullName); 
var fullName = "Nguyen Van A";


isLogin = true;
console.log("isLogin: ", isLogin);
// chưa khái báo biến

// console.log(student);
const PI = 3.14;
// PI = 3.15;

// Câu lệnh điều kiện 
// == so sánh giá trị
// === só sánh giá trị và kiểu dữ liệu


if(1 === "1"){
    console.log("DK dung");

}else{
    console.log("DK SAI");
}

// DK ? "Dung" : "sai"
1 === "1" ? console.log("DK dung") : console.log("dk sai");  
var btA = true;
var btB = false;
console.log("ket qua &&:", btA && btB );
console.log("ket qua ||:", btA || btB);
console.log("Phu dinh btA:", !btA);
switch (0) {
    case 0:
        console.log("đây là số 0");
        break;
    case 1:
        console.log("đây là số 1");
        break;
    case 2:
        console.log("đây là số 2");
        break;

    default:
        console.log("không xác định");
        break;
}

var list = ["Luong" , "Loc" , "Long", "Nam"];
// Vòng lặp
for(var i=0; i<list.length; i++){
    console.log(list[i]);

}


var number_1 = 10;
var number_2 = 5;
var number_3 = 20;
var number_4 = 7;


var total = number_1 + number_2;
console.log("tong la:", total);
var total2 = number_3 + number_4;
console.log("tong la:", total2);

// hàm 
    // - hàm ko  có tham số 
    // -hàm có tham số
    // -hàm không có giá trị trả về
    // -hàm có giá trị trả về
// function tinhTong(){
//     var sum = number_1 + number_2;
//     console.log("sum là:", sum);
// }

// tinhTong();
// function tinhTong34(){
//     var sum = number_3 + number_4;
//     console.log("sum la:", sum)
// }
// tinhTong34();
function tinhTong(a, b){
    var sum = a + b;
    return sum;
}
// tinhTong(number_1, number_2);
// tinhTong(number_3, number_4)
// tinhTong(50, 50);
// var total2 = tinhTong(50, 50);
console.log("tong la: ", tinhTong(50, 50) + 100)
/**
 * (Bài tập) Tính điểm trung bình: Toán, Lý Hóa
 * dtb = (Toan + Ly + Hoa)/3
 * xếp  loại: 
 * + 9 < dtb < 10 => xuất sắc
 * + 8< dtb < 9 =>  gioi
 * + 7 < dtb < 8 => khá
 * + 5< dtb < 6 => tb
 *  => tinh dtb(); xepLoai()
 * 
 */


function tinhDtb(toan, ly, hoa){
    return (toan + ly + hoa) / 3;   
}
function xepLoai(dtb){
    if(9 <= dtb && dtb <= 10){
        loai = "Xuat sắc";
    } else if( 8<= dtb && dtb <=9){
        loai = "Gioi";
    } else if( 7<= dtb && dtb <8){
        loai = "kha";

    } else  if( 5 <= dtb && dtb <7){ 
        loai = "Trung bình";

    } else{
        loai = "yeu";
    }
    console.log("Loại là: ", loai )
}
var dtb = tinhDtb(8, 9, 8);
xepLoai(dtb);

/**
 * Dom
 */
var txtInput = document.getElementById("txtInput");
console.log(txtInput.value);

var _pText = document.getElementById("pText");
console.log(_pText.innerHTML);

/**
 * EVENT
 */
// function eventClick(){
//     var txtValue = document.getElementById("txt.Input").value;
//     console.log(txtValue);
// }

// Cach 2
// document.getElementById("btnClick").onclick = function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// }
// cach 3 - callback function
// document.getElementById("btnClick").addEventListener("click", function(){
//     var txtValue = document.getElementById("txtInput").value;
//     console.log(txtValue);
// })
 function demoClick(){
    var txtValue = document.getElementById("txtInput").value;
    console.log(txtValue);
 }
 document.getElementById("btnClick").addEventListener("click", demoClick);

document.getElementById("btnNhanEmDi").addEventListener("click", function(){
    document.getElementById("divContent").innerHTML = "Thay đổi rồi  nhé";
    document.getElementById("divContent").style.backgroundColor = "red";
    document.getElementById("divContent").style.color = "white";
    document.getElementById("divContent").style.fontSize = "32px"
})

document.getElementById("btnHide").addEventListener("click", function(){
    document.getElementById("divContent").style.display = "none";

})
document.getElementById("btnShow").addEventListener("click", function(){
    document.getElementById("divContent").style.display = "block";
})
document.getElementById("btnDisable").addEventListener("click", function(){
    document.getElementById("btnNhanEmDi").disabled = true;
})
document.getElementById("btnEnable").addEventListener("click", function(){
    document.getElementById("btnNhanEmDi").disabled = false;
    // document.getElementById("btnNhanEmDi")
})
document.getElementById("btnBulbOn").addEventListener("click", function(){
    document.getElementById("imgBulb").src = "./imgs/pic_bulbon.gif"
})
document.getElementById("btnBulbOff").addEventListener("click", function(){
    document.getElementById("imgBulb").src = "./imgs/pic_bulboff.gif";
})
document.getElementById("btnLogIn").addEventListener("click", function(){
  var username = document.getElementById("textUserName").value;
  var password = document.getElementById("textPassWord").value;
  if(username === "cybersoft" && password === "cybersoft"){
      console.log("log in thanh cong");
    //   changeColor("logIn thanh cong", "green");
    changeColor2("Login thanh cong", "alert alert-success");

     
  }
  else{
      console.log("log in that bai")
    //   changeColor("login that bai", "red")
    changeColor2("Login That bai", "alert alert-danger")
  }

})
function changeColor(mess, bg){
    document.getElementById("txtThongBao").innerHTML = mess;
      document.getElementById("txtThongBao").style.display ="block";
      document.getElementById("txtThongBao").style.backgroundColor = bg;
      document.getElementById("txtThongBao").style.color = "white";

}
function changeColor2(mess, classes){
    document.getElementById("txtThongBao").innerHTML = mess;
    document.getElementById("txtThongBao").className = classes;
}
/**
 * DomTagName
 */
var tagName = document.getElementsByTagName("button")[0];
console.log(tagName);
/**
 * DomClassName
 */
var _className = document.getElementsByClassName("btn")[0];
console.log(_className);
/**
 * Dom querySelecter
 */
document.getElementById("btnTinhTienTip").addEventListener("click", function(){
    var txtTongTien = document.getElementById("txtTongTien").value;
    var txtPhanTramTip = document.getElementById("slPhanTramTip").value;
    var txtSoNguoi = document.getElementById("txtSoNguoi").value;
    console.log(txtTongTien,txtPhanTramTip, txtSoNguoi);
    var total3 = (txtTongTien * txtPhanTramTip) /100 /txtSoNguoi;
    document.getElementById("txtThongBaoTienTip").innerHTML = total3 + "$ mỗi nguòi";
    document.getElementById("txtThongBaoTienTip").className = "alert alert-ranger";
    document.getElementById("txtThongBaoTienTip").className = "d-bloc   k"

})