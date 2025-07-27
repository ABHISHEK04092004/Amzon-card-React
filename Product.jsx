import "./Product.css";
import Price from "./Price";


function Product({title,idx}){
let oldPrices=["12,495","11,990","1,599","599"];
let newPrices=["8,999","9,199","899","278"];
let description=[["8,000 DPI","5 Programming buttons"],
["intutive surface","designed for iPad Pro"],
["designed for ipad pro","intutive surface"],
["wireless","optical orientation "],
];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
    </div>
  );
}

export default Product;










// import  "./Product.css";


// function Product({title,price}){

//   let isDiscount=price>30000;
//   let styles={backgroundColor:isDiscount ? "yellow":""};
//   // const list=features.map((feature)=><li>{feature}</li>);
//   return(
//     <div className="Product" style={styles}>
//       <h1>{title}</h1>
//       <h5>Price:{price}</h5>
//       {/* {price>30000?<p>Discount of 5%</p>:null} */}
//       {isDiscount &&<p>Discount of 5%</p>}
//     </div>
//   );
// }

// export default Product;