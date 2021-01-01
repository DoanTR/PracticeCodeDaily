/*
source: https://codelearn.io/training/detail/5430705

Một số được gọi là T-Primes khi số đó chỉ có đúng 3 ước số. Cho hai số nguyên a và b, hãy tìm tất cả các số T-Primes trong khoảng từ a đến b. Nếu không có số nào thỏa mãn, hãy trả về [-1].

Ví dụ:

Với a = 1, b = 6 thì collect(a,b) = [4].
Giải thích: Số 4 chỉ có 3 ước số là 1,2 và 4.
Với a = 2, b = 3 thì collect(a,b) = [-1].
Đầu vào/Đầu ra:

[Thời gian chạy] 0.5s với C++, 3s với Java và C#, 4s với Python, Go và JavaScript.
[Đầu vào] Long a,b
-10^9 < a ≤ b < 10^9
[Đầu ra] Array of Longs


*/
// định lí Fermat kiểm tra hợp số thì LUÔN ĐÚNG
// giải thuật Right-to-left binary method, để tính b^e mod m;
function modulExpRTL(b, e, m) { 
    let re = 1; // lưu kết quả
    b = b % m; // if b>=m
    while (e > 0) {
        if (e & 1 == 1)// Bitwise AND để  xét tính chẵn lẽ. Ở đây là nếu e lẻ
            re = (re * b) % m;
        e = e >> 1; // right shift operator
        b = (b * b) % m;
    }
    return re;
}
// kiểm tra số nguyên tố
function checkPrime2(n) { // return true nếu n là prime
    // kiểm tra từ 2 < các số có dạng 6k +- 1 < căn bậc 2 của n !!!
    // bước nhảy là 6
    if (n <= 3) {
       
        return true;
    }
    else if (n % 2 === 0 || n % 3 === 0) {
       
        return false;
    }
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) {
           
            return false;
        }
        i += 6;
    }
    
    return true;
}

function collect(a,b){
    let kq=[];// mảng kq lưu kết quả 
    if (b<=0){ // 4 là số T-Primes chẵn duy nhất 
        kq.push(-1);
        return kq;
    } 
    if (a<0){a=0;}     
    if( a+1 <=4 && 4 <b){kq.push(4);}
    if (a%2==0){a++;}
    else{a+=2;}
    for(let i=a;i<b; i+=2){
        
        let tam = Math.sqrt(i);
        if(Number.isInteger(tam)){ 
            if(modulExpRTL(2,tam,tam)==2){ // kiểm tra hợp số theo đli Fermat
                if(checkPrime2(tam)){ // kiểm tra nguyên tố
                    kq.push(i);
                }
            }
        }
    }
    if (kq.length == 0){
        kq.push(-1);
    }
    return kq;
    }
