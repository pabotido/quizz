# Trắc nghiệm từ file Word

Ứng dụng web dùng để tạo bài trắc nghiệm từ file Word định dạng `.docx`. Người dùng chọn file câu hỏi, tải quiz lên trình duyệt và làm bài trực tiếp trên trang web.

## Mục Đích Dự Án

Dự án này được xây dựng để phục vụ học tập, ôn tập và thực hành kiến thức lập trình web cơ bản với HTML, CSS và JavaScript.

**Dự án này dành cho học tập, không làm vì mục đích thương mại.**

## Tính Năng

- Tải câu hỏi trắc nghiệm từ file Word `.docx`.
- Đọc nội dung file Word trực tiếp trên trình duyệt bằng Mammoth.js.
- Tự động phân tích câu hỏi và đáp án theo format có sẵn.
- Hiển thị từng câu hỏi một.
- Chỉ hiển thị nội dung đầu bài, không hiển thị tiền tố như `Câu 1:`.
- Xáo trộn thứ tự câu hỏi khi bắt đầu quiz.
- Xáo trộn thứ tự đáp án trong mỗi câu hỏi.
- Khi chọn đúng, nút đã chọn chuyển màu xanh và tự chuyển sang câu tiếp theo.
- Khi chọn sai, nút đã chọn chuyển màu đỏ và hiển thị thêm ô đáp án đúng bên dưới.
- Mỗi câu hỏi chỉ được chọn đáp án một lần.
- Sau khi chọn đáp án, các đáp án của câu đó bị khóa.
- Có thể bấm `Tiếp theo` để chuyển câu ngay.
- Có thể quay lại câu trước bằng nút `Trước`.
- Khi bấm `Kết thúc`, ứng dụng hỏi xác nhận trước khi nộp bài.
- Khi kết thúc, hiển thị tổng điểm và danh sách chi tiết các câu đã trả lời.
- Trong danh sách kết quả, câu sai sẽ hiển thị lựa chọn của người dùng và đáp án đúng.
- Có nút hướng dẫn format file Word trên giao diện.
- Giao diện responsive, dùng được trên máy tính và điện thoại.
- Thiết kế gọn, chuyên nghiệp, không bo góc quá `2px`.

## Công Nghệ

- HTML5
- CSS3
- JavaScript thuần
- Mammoth.js để đọc nội dung file `.docx`

## Cấu Trúc Dự Án

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

## Vai Trò Từng File Và Thư Mục

### `index.html`

File giao diện chính của ứng dụng. File này chứa cấu trúc HTML, liên kết tới CSS, JavaScript và thư viện Mammoth.js.

### `assets/css/style.css`

File chứa toàn bộ style của ứng dụng:

- Bố cục tổng thể.
- Màu sắc và font chữ.
- Giao diện nút bấm.
- Giao diện câu hỏi và đáp án.
- Trạng thái đúng/sai.
- Ô hiển thị đáp án đúng khi trả lời sai.
- Danh sách kết quả sau khi hoàn thành quiz.
- Responsive cho điện thoại.

### `assets/js/script.js`

File chứa toàn bộ logic xử lý quiz:

- Đọc file `.docx`.
- Tách câu hỏi và đáp án.
- Xác định đáp án đúng.
- Hiển thị câu hỏi.
- Xử lý chọn đáp án.
- Tính điểm.
- Tự chuyển câu khi trả lời đúng.
- Hiển thị đáp án đúng khi trả lời sai.
- Hiển thị tổng kết chi tiết sau khi làm xong.
- Bật/tắt khung hướng dẫn format Word.

### `samples/question.docx`

File Word mẫu để tham khảo format câu hỏi.

### `README.md`

File tài liệu mô tả dự án, cách dùng, format câu hỏi và cấu trúc thư mục.

## Cách Sử Dụng

1. Mở file `index.html` bằng trình duyệt.
2. Bấm `Choose File` hoặc `Chọn tệp`.
3. Chọn file Word định dạng `.docx`.
4. Bấm `Tải quiz`.
5. Chọn một đáp án cho từng câu.
6. Sau khi chọn đáp án, quiz tự chuyển sang câu tiếp theo sau 10 giây.
7. Nếu chọn sai, xem ô đáp án đúng bên dưới trước khi quiz chuyển câu.
8. Bấm `Kết thúc`, xác nhận nộp bài, rồi xem điểm và danh sách câu đã trả lời.

## Format File Word

File Word cần được viết theo một trong hai cách sau.

### Cách 1: Đánh Dấu Đáp Án Đúng Bằng Dấu `*`

```text
Câu 1: UML là gì?
A. Ngôn ngữ mô hình hóa thống nhất *
B. Hệ điều hành
C. Ngôn ngữ lập trình
D. Framework
```

Trong cách này, đáp án đúng là dòng có dấu `*`.

### Cách 2: Ghi Đáp Án Đúng Bằng Dòng Riêng

```text
Câu 2: HTML dùng để làm gì?
A. Tạo cấu trúc trang web
B. Thiết kế cơ sở dữ liệu
C. Chạy hệ điều hành
D. Nén file
Đáp án: A
```

Trong cách này, đáp án đúng được ghi ở dòng `Đáp án: A`.

## Quy Tắc Viết Câu Hỏi

- Mỗi câu hỏi bắt đầu bằng `Câu 1:`, `Câu 2:` hoặc `1.`, `2.`.
- Mỗi đáp án bắt đầu bằng `A.`, `B.`, `C.`, `D.`.
- Mỗi câu nên có 4 đáp án.
- Mỗi câu nên có đúng một đáp án đúng.
- File phải là `.docx`, không phải `.doc` hoặc `.pdf`.
- Không nên để format quá phức tạp trong file Word.

## Luồng Hoạt Động

1. Người dùng chọn file `.docx`.
2. Ứng dụng đọc nội dung file bằng Mammoth.js.
3. JavaScript chuyển nội dung thành danh sách câu hỏi.
4. Câu hỏi và đáp án được xáo trộn.
5. Người dùng chọn đáp án.
6. Nút đã chọn đổi màu xanh hoặc đỏ.
7. Các đáp án bị khóa sau khi chọn.
8. Sau khi trả lời, quiz tự chuyển sang câu tiếp theo sau 10 giây.
9. Nếu trả lời sai, quiz hiển thị ô đáp án đúng trong thời gian chờ chuyển câu.
10. Khi kết thúc, ứng dụng hiển thị tổng điểm và danh sách chi tiết từng câu.

## Lưu Ý

- Ứng dụng chạy trực tiếp trên trình duyệt, không cần server riêng.
- File Word được xử lý ở phía trình duyệt.
- Dự án hiện chỉ hỗ trợ dạng câu hỏi trắc nghiệm A, B, C, D.
- Nếu format file Word không đúng, ứng dụng có thể không đọc được câu hỏi.
- Nếu câu hỏi không có đáp án đúng, hệ thống có thể không tính điểm chính xác cho câu đó.

## Giới Hạn Hiện Tại

- Chưa có lưu lịch sử làm bài.
- Chưa có chức năng xuất kết quả.
- Chưa có bộ đếm thời gian hiển thị trên giao diện.
- Chưa hỗ trợ câu hỏi nhiều đáp án đúng.
- Chưa hỗ trợ đăng nhập hoặc quản lý người dùng.

## Có Thể Phát Triển Thêm

- Thêm bộ đếm thời gian hiển thị trên màn hình.
- Cho phép chọn số lượng câu hỏi.
- Cho phép bật/tắt xáo trộn câu hỏi và đáp án.
- Lưu kết quả làm bài vào trình duyệt.
- Hỗ trợ nhiều định dạng câu hỏi hơn.

## Ghi Chú Sử Dụng

Dự án này chỉ được dùng cho mục đích học tập, tham khảo và thực hành. Không sử dụng dự án này cho mục đích thương mại nếu chưa có sự cho phép của tác giả hoặc người sở hữu mã nguồn.
