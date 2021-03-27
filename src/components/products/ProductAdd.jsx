import React from 'react'
import '../../css/Products.css'

const ProductAdd = ({p_name, p_state, shortDescription, p_category, p_price, p_priceDown, handleChange, handlePost}) => {
    return (
        <div className="product-add p-3">
            <form autoComplete="off" onSubmit={handlePost}>
                <h2 className="text-center impressive-text">Thêm sản phẩm mới</h2>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label className="require-label" htmlFor="">Tên sản phẩm </label>
                        <input onChange={handleChange} value={p_name} className="form-control" autoFocus name="p_name" required placeholder="Nhập tên sản phẩm ..." type="text"/>
                    </div>
                    <div className="col-md-6 form-group">
                        <label htmlFor="">Trạng thái <span className="text-info">(SALE, HOT, NEW)</span></label>
                        <input onChange={handleChange} value={p_state} className="form-control" autoFocus name="p_state" required placeholder="Trạng thái sản phẩm ..." type="text"/>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label className="require-label" htmlFor="">Phân loại </label>
                        <select className="form-control" onChange={handleChange} selectedindex={p_category} name="p_category">
                            <option value="Hải sản tươi sống">Hải sản tươi sống</option>
                            <option value="Hải sản khô">Hải sản khô</option>
                            <option value="Đặc sản khác">Đặc sản khác</option>
                        </select>
                    </div>
                    <div className="col-md-6 row m-0 p-0">
                        <div className="col-6 form-group">
                            <label className="require-label" htmlFor="">Giá SP (VNĐ)</label>
                            <input onChange={handleChange} value={p_price} className="form-control" name="p_price" required placeholder="Giá sản phẩm ..." type="text"/>
                        </div>
                        <div className="col-6 form-group">
                            <label className="require-label" htmlFor="">Giá SP giảm (VNĐ)</label>
                            <input onChange={handleChange} value={p_priceDown} className="form-control" name="p_priceDown" required placeholder="Giá sản phẩm đã giảm ..." type="text"/>
                        </div>
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="require-label" htmlFor="">Mô tả sản phẩm </label>
                    <textarea onChange={handleChange} value={shortDescription} className="form-control"
                    name="shortDescription" required placeholder="Mô tả ngắn về sản phẩm ..."
                    rows="4" style={{'resize' : 'none'}}></textarea>
                </div>

                <div className="form-group">
                    <input type="submit" value="Thêm sản phẩm" className="btn btn-info form-control"/>
                </div>
            </form>
        </div>
    )
}
 
export default ProductAdd