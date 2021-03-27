import React from 'react'

const ProductDisplay = ({result}) => {
    return (
        <div className="row border text-center p-2">
            <div className="d-none" key={result.id}>{result.id}</div>
            <div className="col-1"><a href="# " ><i className="fa fa-edit"></i></a></div>
            <div className="col-3 text-left">{result.p_name}</div>
            <div className="col-1">{result.p_state}</div>
            <div className="col-2">{result.p_category}</div>
            <div className="col-1">{result.p_price}</div>
            <div className="col-1">{result.p_priceDown}</div>
            <div className="col-3 text-left">{result.shortDescription}</div>
        </div>
    );
}
 
export default ProductDisplay;