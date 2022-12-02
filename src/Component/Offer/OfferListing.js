import React, { useCallback, useEffect, useState } from "react";
import './offerListing.css';
import CheckBox from "./subCategory";
import InfiniteLists from "./InfiniteLists";

import PageviewIcon from '@mui/icons-material/Pageview';

// import ProductsData from "./ProductsData";
import productData from "./ProductsData";
import category from "./Category";
import prices from "./Prices";

const OfferListing = () => {

    const productList = productData.getAllProducts()
    const [products, setProducts] = useState(productList);
    // const [category, setCategory] = useState([]);
    // const [productPrices, setProductPrices] = useState([]);

    // console.warn("warn", products)
    // @ts-ignore
    // const [isLoading, setIsLoading] = useState(false);
    const [inputProducts, setInputProducts] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [sortData, setSortData] = useState('DEFAULT')

    const InputHandler = (e) => {
        e.preventDefault();
        // const query = e.target.value
        setInputProducts(e.target.value)
        // var lowerCase = e.target.value.toLowerCase();
        // setInputProducts(lowerCase);
        if (e.target.value === "") {
            setProducts(productList);
            return;
          }
          const filteredValues = products.filter(
            (item) =>
            Object.values(item.Product_Name).join('').toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
          );
          setProducts(filteredValues);
          
        };
      
        // APIData.filter((item) => {
        // return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        // })
    // const fetchProducts = async () => {
    // setIsLoading(true);
    // try {
    // const data = await fetch('https://minodeapi.herokuapp.com/productData');
    // const priceData = await fetch('https://minodeapi.herokuapp.com/price');
    // const categoryData = await fetch('https://minodeapi.herokuapp.com/productLists');

    // const product = await data.json();
    // const productPrice = await priceData.json();
    // const category = await categoryData.json();
    // console.warn("product", product)
    // console.warn("productPrice", productPrice)
    // console.warn("category", category)
    // 
    // setProducts(product);
    // setProductPrices(productPrice);
    // setCategory(category);
    // 
    //   setFilters(products.data);
    // setIsLoading(false);
    // } catch (err) {
    // setIsLoading(false);
    // }
    // }
    // useEffect(() => {
    // fetchProducts();
    // fetchCategory();
    // fetchProductData();
    // }, [])

    const initFilter = {
        category: [],
        price: []
    }
    const [filter, setFilter] = useState(initFilter)
    // console.warn("filter", filter);
    // const clearFilter = () => setFilter(initFilter);

    const filterSelect = (type, checked, item) => {
        if (checked) {
            switch (type) {
                case "CATEGORY":
                    // @ts-ignore
                    setFilter({ ...filter, category: [...filter.category, item.categories] })
                    break;
                case "PRICE":
                    // @ts-ignore
                    setFilter({ ...filter, price: [...filter.price, item.prices] })
                    break;
                default:
            }
        }
        else {
            switch (type) {
                case "CATEGORY":
                    const newCategory = filter.category.filter(e => e !== item.categories)
                    // @ts-ignore
                    setFilter({ ...filter, category: newCategory })
                    break;
                case "PRICE":
                    const newPrice = filter.price.filter(e => e !== item.prices)
                    // @ts-ignore
                    setFilter({ ...filter, price: newPrice })
                    break;
                default:
            }
        }
    }


    const clearFilter = () => setFilter(initFilter);

    const updateProducts = useCallback(
        () => {
            let temp = productList;
            if (filter.category.length > 0) {
                // @ts-ignore
                temp = temp.filter((e) => filter.category.includes(e.categories))
            }
            if (filter.price.length > 0) {
                // @ts-ignore
                // temp = temp.filter((e) => filter.price.includes(e.prices))
                temp = temp.filter((e) => {
                    const check = e.prices.find((prices) => filter.price.includes(prices))
                    return check !== undefined;
                })
            }
            setProducts(temp)
        },
        [filter, productList],
    )

    useEffect(() => {
        updateProducts();
    }, [updateProducts])

    // descending & ascending
    const sortsData = {
        DEFAULT: { method: (a, b) => a.Product_id - b.Product_id },
        ascending: { method: (a, b) => a.New_Price < b.New_Price ? -1 : 1 },
        descending: { method: (a, b) => a.New_Price > b.New_Price ? -1 : 1 }
    }
    // const descending = () => {
    // let sortedData = products.sort((a, b) => a.New_Price > b.New_Price ? -1 : 1)
    // setProducts(sortedData)
    // console.warn('sort1', sortedData)
    // return
    // }
    // const ascending = () => {
    // let sortData = products.sort((a, b) => b.New_Price < a.New_Price ? 1 : -1)
    // setProducts(sortData)
    // console.warn('sort2', sortData)
    // return
    // }
    // useEffect(() => {
    // ascending()
    // descending()
    // }, [])

    return (
        <>
            <div className="filshowdiv">
                <div className="filter">
                    <h2 className="h2">Filter</h2>

                    <div className="hr"></div>
                    &emsp;

                    <div className="Sub_category">
                        <h3>Sub Category</h3>
                        {category.map((item, index) => {
                            const { Category_Name } = item;
                            return (
                                <div key={index} className='category__checkbox'>
                                    <CheckBox
                                        label={Category_Name}
                                        onChange={(input) => filterSelect("CATEGORY", input.checked, item)}
                                        // @ts-ignore
                                        checked={filter.category.includes(item.categories)}
                                    />

                                </div>
                            )
                        })}

                    </div>

                    <div className="hr3"></div>
                    &emsp;
                    <div className="Price">
                        <h3>Price</h3>
                        {prices.map((item, index) => {
                            const { Price } = item;
                            return (
                                <div key={index} className='price__checkbox'>
                                    <CheckBox
                                        label={Price}
                                        onChange={(input) => filterSelect("PRICE", input.checked, item)}
                                        // @ts-ignore
                                        checked={filter.price.includes(item.prices)}

                                    />

                                </div>
                            )
                        })}

                    </div>
                    <div className="hr"></div>
                    <br />

                    <div className="btn___clear">
                        <button onClick={clearFilter}>Clear Checked</button>
                    </div>

                </div>
                <div className="showProduct">
                    <div className="header___care">
                        <div className="home____input">
                            <label>
                                <input type='text' value={inputProducts} placeholder="Get Your Products" onChange={InputHandler} />
                                <button type="submit"><PageviewIcon className="search___icon" /></button>
                            </label>
                        </div>
                        <div className="home___care">
                            <p>Home Care</p>
                        </div>
                        <div className="sort">
                            {/* <h4 className="span1">Sort By:</h4> */}
                            <select className="city" defaultValue={'DEFAULT'} onChange={(e) => setSortData(e.target.value)}>
                                <option hidden value='DEFAULT'>Sort by Price (A-Z)</option>
                                <option value='DEFAULT'>Popularity</option>
                                <option value='descending'>High to Low</option>
                                <option value='ascending'>Low to High</option>
                                {/* <option>Recommended</option> */}
                            </select>
                        </div>
                    </div>

                    <InfiniteLists data={products} sortsData={sortsData} sortData={sortData} />
                </div>
            </div>
        </>

    )
}

export default OfferListing;