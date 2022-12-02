filter.price === ''
? e
: filter.price === 'mt500'
? e.prices < 500
: filter.price === 'btw400499'
? e.prices >= 400 && e.prices <= 499
: filter.price === 'btw300399'
? e.prices >=300 && e.prices <=399
: filter.price === 'btw200299'
? e.prices >=200 && e.prices <=299
: filter.price === 'bew100199'
? e.prices >= 100 && e.prices <= 199
: filter.price === 'lt99'
? e.prices < 99
: filter.price

   const [load, setLoad] = useState(true)
   const [index, setIndex] = useState(0)
   slice(0, perLoad)

     useEffect(() => {
         window.addEventListener("scroll", () => {
             if (window.scrollY + window.innerHeight >= listRef.current.clientHeight + listRef.current.offSetTop+200){
                 console.log("bottom reach")
                 setLoad(true)
             }
         })
     }, [listRef])

     console.log("DATA2", data)


 <select className="city">
     <option hidden>Sort by Category (A-Z)</option>
     <option>Popularity</option>
     <option onChange={descending}>High to Low</option>
     <option onChange={ascending}>Low to High</option>
     <option>Recommended</option>
 </select>



 Product.find({price, category, shipping}) // the arg is an object


Product.find({searchArray: [{price}, {category}, {shipping}]}) // the arg is an object containing an array of objects


Product.find(Object.assign({}, ...searchArray))