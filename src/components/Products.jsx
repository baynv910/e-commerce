import React, { Component } from 'react'
import instance from '../firebase/instance'
import ProductAdd from './products/ProductAdd'
import ProductList from './products/ProductList'

class Products extends Component {
    
    state = { 
        p_name              : "",
        p_state             : "",
        shortDescription    : "",
        p_category          : "",
        p_price             : "",
        p_priceDown         : "",
        products             : []
    }

    componentDidMount () {
        instance.get("/products.json").then((response) => {
            const fecthedData = []
            for (let key in response.data) {
                fecthedData.push({...response.data[key], id: key})
            }

            this.setState({
                products: fecthedData
            })
        })
    }

    handleChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    handlePost = e => {
        e.preventDefault()

        const Data = {
            p_name              : this.state.p_name,
            p_state             : this.state.p_state,
            shortDescription    : this.state.shortDescription,
            p_category          : this.state.p_category,
            p_price             : this.state.p_price,
            p_priceDown         : this.state.p_priceDown
        }

        console.log(Data);

        instance.post("/products.json", Data).then((response) => {
            
            const products = [...this.state.products, {...Data, id: response.data.p_name}]

            this.setState({
                p_name              : "",
                p_state             : "",
                shortDescription    : "",
                p_category          : "",
                p_price             : "",
                p_priceDown         : "",
                products            : products
            })
        })
    }

    render() {
        const {p_name, p_state, shortDescription, p_category, p_price, p_priceDown, products} = this.state
        return (
            <div>
                <ProductAdd
                        handleChange={this.handleChange}
                        handlePost = {this.handlePost}
                        p_name={p_name} p_state={p_state} shortDescription={shortDescription}
                        p_category={p_category} p_price={p_price} p_priceDown={p_priceDown} />
                
                <p className="text-center">Đã có: {products.length} records.</p>
                
                <ProductList results={products}/>
            </div>
        )
    }
}

export default Products