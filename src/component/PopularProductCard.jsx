import { products } from "../constant"

const PopularProductCard = () => {
    return (
    <div className="relative flex">
        {products.map((product, index) => (
          <div
            key={product}
            className="min-w-[250px]"
            data-aos="fade-up" 
            data-aos-delay={index * 150}
          >
            <img
              src={product.imgURL}
              alt={product.name}
              width={200}
              className="object-contain h-60 bg-white rounded-lg
              border-2"
            />
            <h3 className="text-xl font-semibold text-gray-900 mt-4">
                {product.name}
            </h3>
            <p className="info-text font-bold mt-2">{product.price}</p>
          </div>
        ))} 
    </div>
    )
  }
  
  export default PopularProductCard