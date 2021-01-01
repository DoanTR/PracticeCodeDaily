/*
source: https://codelearn.io/challenge/thu-thach-20-tim-thuat-toan-toi-uu-thu-tai-lap-trinh-vien/5219111

Cho mảng các số nguyên arr, bạn hãy viết hàm trả về ước số lớn nhất mà khác chính nó của từng phần tử trong arr.

Ví dụ

Với arr = [3, 20, 9] thì output là largestDivisors(arr) = [1, 10, 3].
Giải thích: ước số lớn nhất mà khác chính nó của 3, 20, 9 lần lượt là [1, 10, 3].
Với arr = [7, 91, 56] thì output là largestDivisors(arr) = [1, 13, 9].
Đầu vào/Đầu ra
[Giới hạn thời gian chạy]: 1s với C++, 4s với Java và C#, 8s với Python, GO và Js
[Đầu vào] Array of integers arr
1 <= arr.size <= 1000
2 <= arr[i] <= 1012
[Đầu ra] Integer
*/
function largestDivisor(arr){
    let mangKQ = [];
    for (let i of arr) {
        if (i % 2 === 0) {
            mangKQ.push(i / 2);
        }
        else if (i % 3 === 0) {
            mangKQ.push(i / 3);
        }
        else {
            let j = 5;
            while (j * j <= i) {
                if (i % j === 0) {
                    mangKQ.push(i / j);
                    break;
                }
                else if (i % (j + 2) === 0) {
                    mangKQ.push(i / (j + 2));
                    break;
                }
                else { j += 6; }

            }
            if (j * j > i) {
                mangKQ.push(1);
            }
        }
    }
    return mangKQ;    
}