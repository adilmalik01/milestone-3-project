const ProductDetails = (param:any) => {

    console.log(param);


    return (<>

        <div>
            <h1>Hello {param.params.id}</h1>
        </div>
    </>);
}

export default ProductDetails;