const list_advise_BK = [
Các tips giúp bạn đỡ cực hơn trong học kì đầu ở bku:
Không có gì chỉ là muốn truyền lại chút kinh nghiệm tích góp được sau 1 năm học ở trường này thui mong là giúp được 1 phần nào đó cho các bạn
- Cách nhanh nhất để nhận ra 1 gv dạy kỹ (các gv khác vẫn tốt nha không bêu xấu ai đâu) chính là tra tên giảng viên đó có trên bìa giáo trình hay không
- Đi học mà thấy gv đó dạy không hợp với mình thì cứ đi hỏi thăm xin mấy giờ của lớp khác mà dô học chui thấy ai dạy hợp mình thì cứ thế mà đi học thôi còn BTL với BT nhóm thì vẫn phải làm ở lớp trong tkb nha mấy ba.
- Chỗ photo có 2 chỗ: kế bên thư viện H1, tầng 1 H6
- Thư viện H1 có bán cả mấy đề thi các năm trước, có thể tới đó mua rồi về cày khi không tìm được tài liệu để ôn thi
- Học thí nghiệm thì nên chủ động xíu đừng có ngồi lì ra đó, ít bữa thi còn nhớ mà làm
- Học thí nghiệm nhớ chuẩn bị bài nha bây ơi bây
- Học hay không cũng ráng kiếm bàn gần gần bảng xíu nha, thi thoảng sợ thầy cũng nhìn nhìn trên bảng rồi nghe thầy giảng đồ chớ ngồi mấy bàn phía xa là 100% không học.
- Chăm theo dõi các anh dạy thêm (BTGH, CNCP, LQD…) mấy anh hay sửa bài quiz rồi đăng trên page với lại hay sửa đề ôn mấy hôm gần thi đó.
- Clb CTCT vài tuần gần thi sẽ tổ chức mấy buổi ôn tập free cho các bạn đó
- Thấy đứa nào học khá giỏi là phải sáp lại làm thân liền ít bữa rủ nó đi cf hỏi bài hay xin vào nhóm btl để được người giỏi gánh (hơi thực dụng nhưng mà biết sao giờ mình không có gì để người ta lợi dụng cả)
- Trên trường nhiều mèo lắm ai hảo tâm thì cho tụi nó ăn với nha
Chỉ nhớ được nhiêu đó thui mong các bạn học tập hiệu quả trong năm nay (mặc dù mình không được vậy)
,];

const vocabularyList = document.getElementById("advise_BK");
japaneseVocabulary.forEach(word => {
    const listItem = document.createElement("li");
    listItem.textContent = word;
    vocabularyList.appendChild(listItem);
});