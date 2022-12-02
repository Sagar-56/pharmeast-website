import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CategoryApi = () => {
    const [category, setCategory] = useState([]);
    console.warn("subcategoty", category)
    const fetchCategory = async () => {

        const response = await axios.get("https://minodeapi.herokuapp.com/productLists")
            .catch((err) => {
                console.log("Err", err)
            })
        setCategory(response.data)
    }

    useEffect(() => {
        fetchCategory()
    }, []);
    // console.log("response",this.state.response)

    return (
        <>
            {/* <div> */}
                {/* {category.map((item) => { */}
                    {/* // const {Category_id,Category_Name,State_id}=item; */}
    {/* // console.log("subcategory::", Category_Name) */}

                    {/* // return ( */}
                        {/* // <div key={State_id}> */}
                            {/* <label className="main54" htmlFor="p1"> */}
                                {/* {Category_Name} */}
                            {/* </label> */}
                            {/* <input className="input54" type="checkbox" id="p1" /> */}
                        {/* </div> */}
                    {/* // ) */}

                {/* // })} */}

            {/* </div> */}
        </>
    )
}

export default CategoryApi;