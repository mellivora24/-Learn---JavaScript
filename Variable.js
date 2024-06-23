// Tên biến phải tuân theo quy tắc đặt tên biến
// Trong JavaScript, có 3 cách khai báo biến như sau:

        var variable = value;
        let variable = value;
        const variable = value;

/* Trong đó:
    - var thường được khai báo cho các biến toàn cục, được hoisting + khởi tạo.
    - let thường được khai báo cho các biến phạm vi khối {}, được hoisting nhưng không khởi tạo (gây ra lỗi truy cập biến).
    - const thường dùng để khai báo hằng, có phạm vi khối và được hoisting nhưng không khởi tạo như "let".
*/
/* 
Khái niệm về hoisting trong JS:
    Trong JS, hoisting là cách trình thông dịch đưa các khai báo biến lên đầu phạm vi của khối (khai báo trước mặc dù trong mã là khai báo sau). Điều này cũng đúng với khai báo hàm.

    Ví dụ:
        console.log(x);
        var x = 5;
        console.log(x);
    Kết quả:
        undefine
        5
    Giải thích: biến x được truy cập khi chưa khai báo => trình biên dịch sẽ hoisting biến x (đưa khai báo x lên đầu), do đó biến x có giá trị là undefine vào lần truy cập ban đầu.

=> Lưu ý: Hoisting có thể gây ra bug không mong muốn với cách khai báo "var"
*/