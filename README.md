# DOCX Quiz

Ứng dụng web tạo bài trắc nghiệm từ file Word `.docx`. Người dùng chỉ cần chọn file câu hỏi, tải quiz lên trình duyệt và làm bài trực tiếp, không cần cài đặt server hay backend.

> Dự án phục vụ học tập, ôn tập và thực hành HTML, CSS, JavaScript.

## Tính năng

- Đọc câu hỏi từ file Word `.docx` bằng Mammoth.js.
- Tự động phân tích câu hỏi và đáp án theo format có sẵn.
- Hỗ trợ đánh dấu đáp án đúng bằng dấu `*` hoặc dòng `Đáp án: A`.
- Xáo trộn thứ tự câu hỏi khi bắt đầu bài làm.
- Xáo trộn thứ tự đáp án trong từng câu hỏi.
- Hiển thị từng câu hỏi một, dễ theo dõi khi ôn tập.
- Khóa đáp án sau khi người dùng đã chọn.
- Hiển thị màu xanh khi trả lời đúng, màu đỏ khi trả lời sai.
- Hiển thị đáp án đúng nếu người dùng chọn sai.
- Tự chuyển sang câu tiếp theo sau khi trả lời.
- Có nút `Trước`, `Tiếp theo` và `Kết thúc`.
- Xác nhận trước khi kết thúc bài làm.
- Hiển thị điểm số và danh sách kết quả chi tiết sau khi nộp bài.
- Có hướng dẫn format file Word ngay trên giao diện.
- Giao diện responsive, dùng được trên máy tính và điện thoại.

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript thuần
- Mammoth.js

## Cấu trúc thư mục

```text
quizz/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── samples/
    └── question.docx
```

## Cách chạy

1. Mở file `index.html` bằng trình duyệt.
2. Bấm `Choose File` hoặc `Chọn tệp`.
3. Chọn file Word định dạng `.docx`.
4. Bấm `Tải quiz`.
5. Chọn đáp án cho từng câu hỏi.
6. Bấm `Kết thúc` để nộp bài và xem kết quả.

Ứng dụng chạy trực tiếp trên trình duyệt. File Word được xử lý ở phía client, không cần upload lên server.

## Format file Word

File Word cần viết theo một trong hai cách dưới đây.

### Cách 1: Đánh dấu đáp án đúng bằng dấu `*`

```text
Câu 1: UML là gì?
A. Ngôn ngữ mô hình hóa thống nhất *
B. Hệ điều hành
C. Ngôn ngữ lập trình
D. Framework
```

Dòng có dấu `*` sẽ được xem là đáp án đúng.

### Cách 2: Ghi đáp án đúng bằng dòng riêng

```text
Câu 2: HTML dùng để làm gì?
A. Tạo cấu trúc trang web
B. Thiết kế cơ sở dữ liệu
C. Chạy hệ điều hành
D. Nén file
Đáp án: A
```

Ứng dụng sẽ lấy chữ cái trong dòng `Đáp án: A` để xác định lựa chọn đúng.

## Quy tắc viết câu hỏi

- Mỗi câu hỏi bắt đầu bằng `Câu 1:`, `Câu 2:` hoặc `1.`, `2.`.
- Mỗi đáp án bắt đầu bằng `A.`, `B.`, `C.`, `D.`.
- Mỗi câu nên có 4 đáp án.
- Mỗi câu chỉ nên có một đáp án đúng.
- File phải là `.docx`, không phải `.doc` hoặc `.pdf`.
- Nên dùng định dạng Word đơn giản để ứng dụng đọc chính xác.

## Luồng hoạt động

1. Người dùng chọn file `.docx`.
2. Mammoth.js đọc nội dung văn bản từ file Word.
3. JavaScript tách nội dung thành danh sách câu hỏi và đáp án.
4. Ứng dụng xáo trộn câu hỏi và đáp án.
5. Người dùng trả lời từng câu.
6. Ứng dụng chấm đúng/sai và khóa câu đã trả lời.
7. Khi kết thúc, ứng dụng hiển thị tổng điểm và chi tiết từng câu.

## Vai trò các file chính

### `index.html`

Chứa giao diện chính của ứng dụng, liên kết tới CSS, JavaScript và thư viện Mammoth.js.

### `assets/css/style.css`

Chứa toàn bộ phần giao diện: bố cục, màu sắc, nút bấm, trạng thái đúng/sai, kết quả và responsive.

### `assets/js/script.js`

Xử lý logic chính: đọc file `.docx`, phân tích câu hỏi, xáo trộn, hiển thị quiz, chấm điểm và render kết quả.

### `samples/question.docx`

File Word mẫu để tham khảo format câu hỏi.

## Giới hạn hiện tại

- Chưa lưu lịch sử làm bài.
- Chưa có bộ đếm thời gian hiển thị trên giao diện.
- Chưa hỗ trợ câu hỏi có nhiều đáp án đúng.
- Chưa hỗ trợ đăng nhập hoặc quản lý người dùng.
- Chưa có chức năng xuất kết quả.

## Gợi ý phát triển thêm

- Thêm bộ đếm thời gian.
- Cho phép chọn số lượng câu hỏi.
- Cho phép bật/tắt xáo trộn câu hỏi và đáp án.
- Lưu kết quả vào trình duyệt bằng `localStorage`.
- Xuất kết quả ra file.
- Hỗ trợ nhiều định dạng câu hỏi hơn.

## Ghi chú

Dự án này dành cho mục đích học tập, tham khảo và thực hành. Nếu dùng lại hoặc phát triển tiếp, hãy ghi rõ nguồn và kiểm tra quyền sử dụng mã nguồn theo nhu cầu của bạn.
