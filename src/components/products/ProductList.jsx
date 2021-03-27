import React from 'react'
import ProductDisplay from './ProductDisplay';

const ProductList = ({results}) => {
    return (
        <div className="results-list p-3 pb-5">
            <div className="row text-center text-light bg-primary p-2">
                <div className="col-1">Cập nhật</div>
                <div className="col-3">Tên SP</div>
                <div className="col-1">Trạng thái</div>
                <div className="col-2">Phân loại</div>
                <div className="col-1">Giá gốc</div>
                <div className="col-1">Giá KM</div>
                <div className="col-3">Mô tả</div>
            </div>
            {results.map((result) => 
                <ProductDisplay result={result} key={result.id}/>
            )}
        </div>
    );
}
 
export default ProductList;