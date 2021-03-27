import React from 'react'
import '../css/Commitment.css'

const Commitment = () => {
    return (
        <div className="commitment">
            <div className="jumbotron row bg-light">
                <h3 className="text-center col-12"><span
                style={{"borderBottom": "2px solid #05f", "padding" : "10px"}}>Cam Kết</span></h3>
                <div className="col-md-3 text-center">
                    <div className="text-primary commitment-label"><i className="fa fa-money"></i></div>
                    <h5>Giá cả cạnh tranh</h5>
                    <div>Hải sản được lấy trực tiếp từ thương lái, với giá gốc</div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="text-primary commitment-label"><i className="fa fa-truck"></i></div>
                    <h5>Giao hàng tận nơi</h5>
                    <div>Miễn phí giao hàng trong ngày đối với các khu vực xung quanh Quận Gò Vấp, Tp. Hồ Chí Minh</div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="text-primary commitment-label"><i className="fa fa-address-book-o"></i></div>
                    <h5>Nguồn hàng tin cậy</h5>
                    <div>Các thương lái là nguồn cung cấp hải sản chính cho Chợ Dương Đông</div>
                </div>

                <div className="col-md-3 text-center">
                    <div className="text-primary commitment-label"><i className="fa fa-diamond"></i></div>
                    <h5>Ngon, tươi, bổ, rẻ</h5>
                    <div>Vận chuyển đường máy bay trong vài giờ! Không ngon miễn phí đổi trả</div>
                </div>
            </div>
        </div>
    )
}

export default Commitment