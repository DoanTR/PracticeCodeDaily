/*
source: https://codelearn.io/challenge/thu-thach-19-tim-thuat-toan-toi-uu-thu-tai-lap-trinh-vien/4578391

Một số được gọi là số tăng giảm nếu các chữ số trong số này tạo thành một dãy số giảm dần (số đứng sau luôn nhỏ hơn hoặc bằng số đứng trước) hoặc dãy số tăng dần (số đứng sau luôn lớn hơn hoặc bằng số đứng trước). Ví dụ:

Các số tăng giảm: 7, 22, 6522, 4667, 9651, 7899, ...
Các số không phải là số tăng giảm: 121, 486, 9878, ...
Cho trước số nguyên n, bạn hãy viết hàm trả về số tăng giảm nhỏ nhất mà lớn hơn hoặc bằng n.

Ví dụ:

Với n = 8 thì output là findNumber(n) = 8.
Với n = 565 thì output là findNumber(n) = 566.
Đầu vào/Đầu ra

[Giới hạn thời gian chạy]: 0.2 giây với C++, 1.2 giây với Java và C#, 1.6s với Python, GO và Js
[Đầu vào] Integer n
1 <= n <= 1000000000
[Đầu ra] Integer

*/
function findNumber(n){
n = [...n + ''];
    const l = n.length;

    if (l == 1)
        return Number(n);

    let giam;
    let index = l;
    for (let i = 0; i < l - 1; i++) {
        if (n[i] > n[i + 1]) {
            giam = true;
            index = i + 1;
            break;
        }
        if (n[i] < n[i + 1]) {
            giam = false;
            index = i + 1;
            break;
        }
    }

    for (index; index < l; index++) {
        if (n[index] <= n[index - 1] && !giam) {
            n[index] = n[index - 1];
            //n.fill(0, index + 1, l)
            n.fill(n[index - 1], index)
            break;
        }

        if (n[index] > n[index - 1] && giam) {
            n[index - 1] = +n[index - 1] + 1;
            n.fill(0, index)
            break;
        }
        if (n[index] == n[index - 1] && giam) {
            for (index + 1; index < l; index++) {
                if (n[index] > n[index - 1]) {
                    break;
                }
            }
            if (index == l) { break; }
            while (n[index - 1] == n[index - 2]) {
                index--;
            }
            n[index - 1] = +n[index - 1] + 1;
            n.fill(0, index)
            break;
        }
    }

    return Number(n.join(""));
}