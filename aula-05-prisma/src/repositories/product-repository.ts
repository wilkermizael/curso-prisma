import prisma from "../database/database";
import { Products } from "@prisma/client";


async function getProducts() {
  const products = await prisma.products.findMany()
  return products 
}

async function getProduct(id: number) {
  const ProductsId = await prisma.products.findFirst({
    where:{id}
  })
  return ProductsId
}
type CreateProduct= Omit<Products, "id">
async function createProduct(products:CreateProduct) {
  const {label, price, description,eatable } = products
  await prisma.products.create({
    data:{
      label,price,description,expirationDate:new Date(),eatable
    }
  })
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;