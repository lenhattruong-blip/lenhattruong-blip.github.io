'use strict';
const vi = {
  skip:'Đến nội dung chính', portfolio:'HỒ SƠ KỸ THUẬT', navProjects:'Dự án', navBackground:'Học vấn',
  available:'TÌM KIẾM CƠ HỘI THỰC TẬP', intern:'— Thực tập sinh',
  intro:'Sinh viên năm cuối HUFLIT, chuyên ngành Kỹ thuật vi mạch. Mình tập trung vào phần cứng nhúng, tích hợp cảm biến và kiểm thử dựa trên dữ liệu.',
  location:'TP. Hồ Chí Minh, Việt Nam', download:'Tải CV tiếng Anh', focusLabel:'ĐỊNH HƯỚNG',
  focus:'Kết nối phần cứng.\nTạo giá trị bằng firmware.', openingLabel:'PHẦN CỨNG / FIRMWARE / KIỂM THỬ',
  headline:'Từ sơ đồ mạch\nđến dữ liệu cảm biến.', openingText:'Các dự án với STM32, ESP32 và hệ thống số — trình bày rõ phần mình phụ trách, cách triển khai và bằng chứng kỹ thuật.',
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
  firmware:'Xem firmware', digitalDesign:'THIẾT KẾ SỐ · ĐANG THỰC HIỆN', riscTitle:'CPU RISC-V single-cycle',
  riscText:'Dự án Verilog RV32IM hỗ trợ 48 lệnh. Phần mình làm: viết testbench, mô phỏng và phân tích waveform để tìm lỗi bằng Vivado. Chưa triển khai FPGA và chưa có kết quả timing/resource.',
  computerVision:'THỊ GIÁC MÁY TÍNH · ĐỒ ÁN MÔN HỌC', yoloTitle:'Nhận diện biển báo giao thông Việt Nam',
  yoloText:'Gộp hai dataset tương thích thành hơn 10.000 ảnh, dùng Python kiểm thử weight YOLO26 do thành viên khác huấn luyện. Quan sát khoảng 30 FPS trên GPU laptop; triển khai Raspberry Pi 5 mới ở kế hoạch, chưa hoàn thành.',
  background:'Học vấn & công cụ', education:'HỌC VẤN', school:'Trường Đại học Ngoại ngữ – Tin học TP. Hồ Chí Minh',
  major:'Chuyên ngành: Kỹ thuật vi mạch', coursework:'Môn học liên quan',
  courses:'Hệ thống nhúng · Lập trình nhúng · Vi xử lý – Vi điều khiển · Thiết kế luận lý số · Internet vạn vật · Hệ thống thông minh',
  languages:'Ngôn ngữ lập trình', embedded:'Hệ thống nhúng & kết nối', tools:'Công cụ thiết kế & phát triển', data:'Dữ liệu & thị giác máy tính',
  nextStep:'BƯỚC TIẾP THEO', contactTitle:'Cùng tạo ra sản phẩm hữu ích.',
  contactText:'Mình đang tìm cơ hội thực tập Embedded Systems để đóng góp vào việc tích hợp phần cứng–firmware và tiếp tục phát triển năng lực kỹ thuật.',
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
  document.title = language === 'en' ? 'Le Nhat Truong | Embedded Systems' : 'Le Nhat Truong | Hệ thống nhúng';
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
