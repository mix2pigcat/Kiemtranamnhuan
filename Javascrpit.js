let year=parseInt(prompt('Nhap so nam : '));
if ((year % 4==0 && year % 100!== 0) || year % 400 ==0){
    alert("Nam Nhuan");
}else {
    alert("Nam thuong");
}
