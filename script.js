'use strict';
const vi = {
  skip:'Đến nội dung chính', portfolio:'HỒ SƠ KỸ THUẬT', navProjects:'Dự án', navBackground:'Học vấn',
  available:'TÌM KIẾM CƠ HỘI THỰC TẬP',
  intro:'Sinh viên năm cuối HUFLIT, chuyên ngành Kỹ thuật vi mạch, có kinh nghiệm về phần cứng nhúng, tích hợp cảm biến và thị giác máy tính bằng Python. Mình mong muốn kết hợp các kỹ năng này để phát triển ứng dụng Edge AI.',
  location:'TP. Hồ Chí Minh, Việt Nam', download:'Tải CV tiếng Anh', focusLabel:'ĐỊNH HƯỚNG',
  focus:'Kết hợp phần cứng nhúng\nvới thị giác máy tính.', openingLabel:'PHẦN CỨNG / FIRMWARE / THỊ GIÁC MÁY TÍNH',
  headline:'Từ sơ đồ mạch\nđến dữ liệu cảm biến.', openingText:'Các dự án phần cứng STM32, tích hợp cảm biến ESP32, thiết kế số và thị giác máy tính với YOLO — nền tảng cho định hướng Edge AI của mình, với phần đóng góp và bằng chứng kỹ thuật rõ ràng.',
  gpa:'GPA tích lũy', platforms:'Nền tảng nhúng', present:'Hiện tại', selected:'Dự án nổi bật', evidence:'MÃ NGUỒN & PHẦN CỨNG THỰC TẾ',
  physicalBoard:'BOARD THỰC TẾ · STM32L4P5', thesis:'KHÓA LUẬN TỐT NGHIỆP · NHÓM 2 NGƯỜI', thesisDate:'02 — 08/2026',
  pcbTitle:'Nền tảng STM32L4 tiết kiệm năng lượng dạng mô-đun',
  pcbIntro:'Phần mở rộng STM32L4P5 gồm board nguồn 2 lớp và board MCU 4 lớp tách rời, được thiết kế từ schematic đến PCB bằng Altium.',
  pcbPoint1:'Tự thiết kế hai board mở rộng và kiểm tra phần cứng thực tế; board hoạt động ngay ở lần chế tạo đầu tiên.',
  pcbPoint2:'Bố trí SPI, I2C, UART, SWD, miền nguồn 1,8 V và khối điều khiển nguồn cảm biến.',
  pcbPoint3:'Có ảnh board, bản vẽ các lớp đồng và biểu đồ điện áp/dòng điện đo trên STM32L4P5.',
  pcbDetails:'Chi tiết thiết kế & phép đo',
  pcbNote:'Phép đo phần cứng mở rộng tách biệt với phần mình phân tích dataset từ board tham chiếu STM32L432 của nhóm. Phần đó dùng permutation test và hiệu chỉnh Benjamini–Hochberg, không phải benchmark Buck/LDO trên board mở rộng này. Dataset tham chiếu được giữ kín.',
  plotNote:'Ví dụ phép đo STM32L4P5 ở điều kiện 3,6 V. Đây là dạng sóng quan sát, không phải khẳng định về hiệu suất bộ nguồn hay mức tiết kiệm năng lượng trung bình.',
  viewProject:'Khám phá dự án', gallery:'Xem phần cứng', systemDiagram:'SƠ ĐỒ HỆ THỐNG THAM KHẢO',
  courseProject:'ĐỒ ÁN MÔN HỌC · NHÓM 3 NGƯỜI', greenhouseDate:'12/2025 — 03/2026',
  greenhouseTitle:'Tích hợp cảm biến nhà kính với ESP32-S3',
  greenhouseIntro:'Chuyển phần thu thập dữ liệu của hệ thống nhà kính từ Raspberry Pi 5 sang ESP32-S3 N16R8, hướng tới giảm giá thành, điện năng và độ phức tạp.',
  greenhousePoint1:'Tích hợp cảm biến môi trường, đất và CO₂ qua I2C, UART, RS485 Modbus RTU, sử dụng thư viện có sẵn.',
  greenhousePoint2:'Dùng ba task cảm biến, một task MQTT và mutex bảo vệ dữ liệu dùng chung; gửi dữ liệu JSON lên ứng dụng.',
  greenhousePoint3:'Mình phụ trách đọc cảm biến và tích hợp. Các thành viên khác phụ trách ứng dụng và logic tự động phía ứng dụng.',
  greenhouseDetails:'Cách triển khai & các giới hạn hiện tại',
  greenhouseNote:'Hệ thống đã vận hành thực tế. Code công khai có retry MQTT nhưng chưa được kiểm thử lại trong quá trình chuẩn bị portfolio. Sơ đồ dùng GPIO 15/16 cho CO₂, còn code dùng 4/5; xác minh chứng chỉ TLS và phục hồi Wi-Fi cũng cần hoàn thiện. Các giới hạn đã ghi trong repository. Không khẳng định mức giảm chi phí hay điện năng khi chưa có số đo.',
  firmware:'Xem firmware', digitalDesign:'THIẾT KẾ SỐ · DỰ ÁN NHÓM', riscTitle:'CPU RV32IM — Implementation & Verification trên FPGA',
  riscText:'Triển khai và phân tích waveform của CPU do nhóm phát triển, so sánh chín cấu hình bộ cộng/bộ nhân bằng Vivado. Mình phụ trách báo cáo implementation, phân tích timing/tài nguyên và debug mô phỏng.',
  fpgaVisual:'XSIM · MÔ PHỎNG CHỨC NĂNG', fpgaDate:'02/2025 — HIỆN TẠI',
  fpgaPoint1:'Phân tích báo cáo timing sau place-and-route và tài nguyên, nhắm tới Zynq-7000 xc7z030ffg676-1.',
  fpgaPoint2:'Quan sát chuỗi trạng thái điều khiển BRAM, sự thay đổi PC và hoạt động ALU qua waveform XSim.',
  fpgaPoint3:'Công khai báo cáo chọn lọc và sơ đồ làm bằng chứng; source RTL và testbench của nhóm được giữ kín.',
  fpgaDetails:'Kiến trúc & giới hạn bằng chứng', fpgaResults:'Kết quả implementation',
  fpgaNote:'CPU BRAM dùng bộ điều khiển theo trạng thái và bộ chia nhiều chu kỳ, nên không phải mọi lệnh đều single-cycle. Số liệu timing và tài nguyên thuộc các đợt chạy khác nhau, chưa được chạy lại khi chuẩn bị portfolio. Không khẳng định đã chạy trên board FPGA thật, đạt đầy đủ ISA compliance hay vượt trội về điện năng. Sơ đồ mô tả thiết kế của nhóm, không nhận là thiết kế riêng của mình.',
  computerVision:'THỊ GIÁC MÁY TÍNH · ĐỒ ÁN NHÓM', yoloTitle:'Nhận diện biển báo Việt Nam với YOLO26s',
  yoloText:'Mình phụ trách chính tìm kiếm, phân tích và gộp hai dataset. Cùng Thành phát triển chương trình nhận diện Python và kiểm thử suy luận với weight do thành viên khác huấn luyện.',
  yoloDate:'05 — 08/2026', yoloDataset:'Báo cáo ghi nhận 10.172 ảnh, 17.860 đối tượng được gán nhãn và 66 lớp được cấu hình.',
  yoloMetric:'Kết quả nhóm báo cáo: test mAP@0.5 đạt 0,987 trên 1.018 ảnh kiểm tra. Hai lớp không có mẫu đánh giá.',
  yoloScope:'Portfolio chỉ gồm thông tin dataset và bằng chứng đánh giá; không kèm source, weight hoặc báo cáo đầy đủ.',
  yoloDetails:'Giới hạn đánh giá & triển khai', yoloDataLink:'Tổng quan dataset',
  yoloNote:'Đây là kết quả nhóm báo cáo, chưa được chạy lại độc lập. Đánh giá có mẫu của 64 lớp; khung hình liên quan lọt vào các tập khác nhau vẫn là nguy cơ làm điểm số lạc quan. Test mAP@0.5:0.95 không được lưu. FPS webcam chưa phải benchmark chuẩn hóa, triển khai Raspberry Pi 5 vẫn ở kế hoạch. Ảnh đường phố được giữ lại để xác minh nguồn ảnh trước khi công khai.',
  background:'Học vấn & công cụ', education:'HỌC VẤN', school:'Trường Đại học Ngoại ngữ – Tin học TP. Hồ Chí Minh',
  major:'Chuyên ngành: Kỹ thuật vi mạch', coursework:'Môn học liên quan',
  training:'Đào tạo bổ sung', trainingTitle:'Unlock the Future of Chip Design - Physical Design',
  trainingDetails:'Khóa học trực tuyến nhập môn, giới thiệu và hướng dẫn quy trình thiết kế vật lý vi mạch. Do Trung tâm Đào tạo Khu Công nghệ cao TP.HCM tổ chức, Tresemi thực hiện. Chứng nhận hoàn thành, 15–19/12/2025.',
  courses:'Hệ thống nhúng · Lập trình nhúng · Vi xử lý – Vi điều khiển · Thiết kế luận lý số · Internet vạn vật · Hệ thống thông minh',
  languages:'Ngôn ngữ lập trình', embedded:'Hệ thống nhúng & kết nối', tools:'Công cụ thiết kế & phát triển', data:'Dữ liệu & thị giác máy tính',
  nextStep:'BƯỚC TIẾP THEO', contactTitle:'Cùng tạo ra sản phẩm hữu ích.',
  contactText:'Mình đang tìm cơ hội thực tập Embedded Systems và Edge AI, đóng góp vào tích hợp phần cứng–firmware hoặc ứng dụng thị giác máy tính, đồng thời học cách triển khai và tối ưu mô hình AI trên thiết bị nhúng.',
  getInTouch:'Liên hệ với mình', footer:'Dự án thật. Không ngừng học hỏi.', backTop:'Về đầu trang ↑'
};
const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(nodes.map(node => [node, node.innerHTML]));
const languageButton = document.getElementById('language-toggle');
const themeButton = document.getElementById('theme-toggle');
const media = window.matchMedia('(prefers-color-scheme: dark)');
let language = 'en';
function remember(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
function setLanguage(next) {
  language = next === 'vi' ? 'vi' : 'en';
  document.documentElement.lang = language;
  nodes.forEach(node => {
    if (language === 'en') node.innerHTML = english.get(node);
    else if (Object.hasOwn(vi, node.dataset.i18n)) node.textContent = vi[node.dataset.i18n];
  });
  languageButton.textContent = language === 'en' ? 'VI' : 'EN';
  languageButton.setAttribute('aria-label', language === 'en' ? 'Chuyển sang tiếng Việt' : 'Switch to English');
  languageButton.lang = language === 'en' ? 'vi' : 'en';
  document.title = language === 'en' ? 'Le Nhat Truong | Embedded Systems & Edge AI' : 'Le Nhat Truong | Hệ thống nhúng & Edge AI';
  updateThemeLabel();
}
function isDark() { return document.documentElement.dataset.theme ? document.documentElement.dataset.theme === 'dark' : media.matches; }
function updateThemeLabel() {
  const dark = isDark();
  themeButton.setAttribute('aria-label', language === 'vi' ? (dark ? 'Chuyển giao diện sáng' : 'Chuyển giao diện tối') : (dark ? 'Switch to light theme' : 'Switch to dark theme'));
  themeButton.setAttribute('aria-pressed', String(dark));
}
languageButton.addEventListener('click', () => { setLanguage(language === 'en' ? 'vi' : 'en'); remember('lnt-language', language); });
themeButton.addEventListener('click', () => { const theme = isDark() ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; remember('lnt-theme', theme); updateThemeLabel(); });
media.addEventListener('change', updateThemeLabel);
let initialLanguage = 'en';
try { initialLanguage = localStorage.getItem('lnt-language') || 'en'; } catch (_) {}
setLanguage(initialLanguage);
languageButton.hidden = false;
themeButton.hidden = false;
