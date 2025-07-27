import Product from "./Product.jsx";

function ProductTab(){
let styles={
    display:"flex",
    flexWrap: "wrap",
    justifyContent:"center",
    alignItems:"center"
  };
  return(
    <div style={styles}>
    
    <Product title="Logitech MX Master" idx={0}/>
    <Product title="Aplle Pencil (2nd gen)" idx={1}/>
    <Product title="Zebronics Zeb-Transformer" idx={2}/>
    <Product title="Petronics Tond 23" idx={3}/>
    
</div>
  );
}

export default ProductTab;








// import Product  from "./Product.jsx";


// function ProductTab(){
//   // let options=["hi-tech","durable","fast"];.
//   // let options=["hi-tech","durable","fast"];
//   return (
//     <>
//     <Product title="phone" price={10000} />
//     <Product title="pen" price={10} />
//     <Product title="laptop" price={100000} /> 
//    </>

//   );
// }

// export default ProductTab;