import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '4rem',
      paddingTop: '2rem',
      [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(3)
      }
    },
    container: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: "2rem",
        }
    }
  }));


export default function ContestRules() {
    const classes = useStyles();
    
    return (
            <Paper elevation={5} className={classes.container}>
                <CardMedia
                    component="img"
                    alt="cover"
                    image={require("../images/constestBanner.jpg")}
                />
                <Container className={classes.root} maxWidth={false}>
                <Typography variant="h4" fontWeight="700" gutterBottom component="div">Thể lệ cuộc thi </Typography>
                    <Typography variant="h6" gutterBottom component="h6">1.    Đối tượng tham gia cuộc thi </Typography>
                    <p>Nữ công dân Việt Nam tuổi từ 16 đến 25 (tính theo năm sinh ghi trong giấy khai sinh).</p>
                    <Typography variant="h6" gutterBottom component="h6">2.    Điều kiện dự thi</Typography>
                    <p>Nữ công dân Việt Nam tuổi từ 16 đến 25 có đủ các điều kiện sau, có quyền đăng ký tham dự cuộc thi:</p>
                    <ul>
                        <li>Có đạo đức tốt;</li>
                        <li>Có vẻ đẹp tự nhiên;</li>
                        <li>Không có tiền án, tiền sự, không trong thời gian bị truy cứu trách nhiệm hình sự;</li>
                        <li>Chưa lập gia đình (được hiểu là: Chưa tổ chức đám cưới, chưa đăng ký kết hôn lần nào và chưa sống chung với ai như vợ chồng);</li>
                        <li>Chưa sinh con;</li>
                        <li>Trình độ văn hóa: Tốt nghiệp Trung học phổ thông trở lên (tính đến thời điểm Vòng Chung kết chính thức bắt đầu);</li>
                        <li>Chiều cao 1m63 trở lên, chưa từng qua giải phẫu thẩm mỹ, chưa từng qua chuyển đổi giới tính.</li>
                    </ul>
                    <p>Thí sinh đã đạt danh hiệu Hoa Hậu, Á Hậu, Hoa Khôi, Á Khôi, Người Đẹp (Nhất, Nhì, Ba) tại các cuộc thi sắc đẹp cấp tỉnh, thành, ngành diễn ra trong năm 2019 hoặc 2020 sẽ được đặc cách vào vòng thi Chung khảo khu vực phía Bắc hoặc phía Nam, nếu như thí sinh đó phù hợp các quy định ở điều kiện dự thi và hoàn thiện hồ sơ theo đúng quy định tại Thể lệ này.</p>
                    <Typography variant="h6" gutterBottom component="h6">3.    Địa điểm thời gian thi</Typography>
                    <ul>
                        <li>Vòng Sơ Khảo Phía Nam: ngày 08/8/2020, tại TP. Hồ Chí Minh</li>
                        <li>Vòng Chung Khảo Phía Nam: Từ ngày 13/8/2020 – 22/8/2020, tại thành phố Hồ Chí Minh</li>
                        <li>Vòng Sơ khảo Phía Bắc: Ngày 30/8/2020 tại Hà Nội.</li>
                        <li>Vòng Chung Khảo Phía Bắc: Từ ngày 03/9/2020 – 12/9/2020, tại Hà Nội.</li>
                        <li>Vòng Chung kết toàn quốc từ 24/9 đến 23/10/2020 tại Quảng Ninh và Thành phố Hồ Chí Minh.</li>
                        <li>Đêm Chung kết 20g thứ 6 ngày 23/10/2020 tại thành phố Hồ Chí Minh</li>
                    </ul>
                    <Typography variant="h6" gutterBottom component="h6">4.    Nội dung thi</Typography>
                    <ul>
                        <li>Thi trang phục áo dài Việt Nam.</li>
                        <li>Thi trang phục áo tắm.</li>
                        <li>Thi trang phục dạ hội.</li>
                        <li>Thi ứng xử (áp dụng cho các thí sinh lọt vào Top 5).</li>
                    </ul>
                    <p>Ngoài ra, BTC còn tổ chức các cuộc thi Người đẹp Nhân Ái, Người đẹp Biển, Người đẹp Tài năng, Người đẹp Truyền thông, Người đẹp Thời trang, Người đẹp Du lịch , Người đẹp Thể thao, Người có Gương mặt khả ái, Người đẹp Áo dài, Người có Làn da đẹp nhất và sát hạch thông qua các hoạt động đồng hành, dã ngoại, các hoạt động xã hội khác.</p>
                    <Typography variant="h6" gutterBottom component="h6">5.    Giải thưởng và danh hiệu</Typography>
                    <ul>
                        <li>Hoa hậu Việt Nam 2020: Giải thưởng chính thức gồm vương miện Hoa hậu Việt Nam và 350.000.000 đồng. (Ba trăm năm mươi triệu đồng)</li>
                        <li>Á hậu 1 cuộc thi Hoa hậu Việt Nam 2020: Giải thưởng chính thức 250.000.000 đồng. (Hai trăm năm mươi triệu đồng)</li>
                        <li>Á hậu 2 cuộc thi Hoa hậu Việt Nam 2020: Giải thưởng chính thức 200.000.000 đồng. (Hai trăm triệu đồng)</li>
                    </ul>
                    <p> Cuộc thi cũng chọn ra những thí sinh xuất sắc để trao các danh hiệu: “Người đẹp Truyền thông”, “Người đẹp Tài năng”, “Người đẹp Biển”, “Người có Gương mặt khả ái”, “Người đẹp Áo dài”, “Người có Làn da đẹp nhất”, “Người đẹp Thời trang”, “Người đẹp Thể thao”, “Người đẹp Du lịch”…</p>
                    <p>Mỗi giải thưởng trị giá 50.000.000 đồng. (Năm mươi triệu đồng).</p>
                    <p>Riêng giải thưởng “Người đẹp Nhân ái” và "Người đẹp Biển", ngoài phần thưởng trị giá 50.000.000 đồng (Năm mươi triệu đồng), thí sinh đạt giải “Người đẹp Nhân ái” được đặc cách vào TOP 5 thi ứng xử, thí sinh đạt giải “Người đẹp Biển" đặc cách vào TOP 10.</p>
                    <Typography variant="h6" gutterBottom component="h6">6.    Địa điểm đăng ký dự thi</Typography>
                    <p>Thí sinh nộp đơn đăng ký dự thi (theo mẫu chung của Ban tổ chức) trực tiếp hoặc qua đường bưu điện tại:</p>
                    <ul>
                        <li>Tiểu ban thí sinh cuộc thi Hoa hậu Việt Nam 2020 tại Tòa soạn báo Tiền Phong, số 15 Hồ Xuân Hương, quận Hai Bà Trưng, TP Hà Nội.</li>
                        <li>Tiểu ban thí sinh cuộc thi Hoa hậu Việt Nam 2020 tại Ban đại diện báo Tiền Phong tại Tp Hồ Chí Minh – Số 384 Nam Kỳ Khởi Nghĩa, Q3, Tp Hồ Chí Minh.</li>
                        <li>Ban đại diện Báo Tiền Phong tại Tây Nguyên – Số 26 Trần Nhật Duật, TP Buôn Ma Thuột, Đắc Lắc. ĐT: 02500 3950029.</li>
                        <li>Ban đại diện Báo Tiền Phong tại Miền Trung – Số 19 Ngô Gia Tự, TP Đà Nẵng. ĐT: 02511 3828039.</li>
                        <li>Ban đại diện Báo Tiền Phong tại Nghệ An – Số 21, Hồ Xuân Hương, TP Vinh, Nghệ An. ĐT: 02388602345.</li>
                        <li>Văn phòng Cty Sen Vàng: 6D Trường Sa, Phường 17, Quận Bình Thạnh, TP. HCM.</li>
                        <li>Mẫu đơn nhận tại các địa điểm trên hoặc tải và in từ báo điện tử Tiền Phong <a href='https://www.tienphong.vn/'>https://www.tienphong.vn/</a>, hoặc trang web của BTC: <a href='https://tienphong.vn/the-le-cuoc-thi-hoa-hau-viet-nam-2020-post1243533.tpo'>www.hoahau.tienphong.vn</a>, <a href='http://hhvn.com.vn'>hhvn.com.vn</a></li>
                    </ul>
                    <Typography variant="h6" gutterBottom component="h6">7.    Thời gian đăng ký dự thi</Typography>
                    <p>Thời gian đăng ký đối với khu vực phía Nam đến hết ngày 07/8/2020, đối với khu vực phía Bắc đến hết ngày 29/8/2020.</p>
                    <Typography variant="h6" gutterBottom component="h6">8.    Hồ sơ đăng ký dự thi</Typography>
                    <ul>
                        <li>Đơn đăng ký dự thi (theo mẫu của BTC)</li>
                        <li>Sơ yếu lý lịch (được chính quyền địa phương hoặc cơ quan, tổ chức nơi thí sinh đang học tập và công tác xác nhận trước ngày nộp đăng ký dự thi không quá 15 ngày).</li>
                        <li>Bằng tốt nghiệp trung học phổ thông hoặc giấy xác nhận tốt nghiệp trung học phổ thông (giấy xác nhận chỉ có giá trị trong 1 tháng kể từ ngày cấp, sau đó phải nộp Bằng tốt nghiệp) – của nhà trường nơi thí sinh đã tốt nghiệp phổ thông trung học (bản sao có công chứng).</li>
                        <li>03 tấm ảnh mầu cỡ 13x18 cm (chụp chân dung, mặc áo tắm và toàn thân).</li>
                        <li>Các giấy tờ khác theo quy định của thể lệ cuộc thi: Chứng minh nhân dân, Hộ khẩu (bản sao có công chứng).</li>
                        <li>Chứng nhận danh hiệu Hoa hậu, Á hậu, Hoa khôi, Á khôi tại các cuộc thi sắc đẹp cấp tỉnh, thành, ngành diễn ra trong năm 2019 hoặc 2020 mà thí sinh đã đoạt giải...(bản sao có công chứng.)</li>
                    </ul>
                    <p>Lưu ý: Hồ sơ nếu gửi qua đường bưu điện, phong bì phải dán tem và đề rõ “Hồ sơ đăng ký dự thi Hoa hậu Việt Nam 2020”.</p>
                    <p>Chi tiết về cuộc thi sẽ được cập nhật liên tục trên trang: <span><a href='https://www.tienphong.vn/'>https://www.tienphong.vn/</a></span> và fanpage: <span><a href='https://www.facebook.com/MissVietnam.TP/'>https://www.facebook.com/MissVietnam.TP/</a></span></p>
                </Container>
            </Paper>
    )
}

