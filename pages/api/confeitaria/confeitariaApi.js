export const getProducts = async (limit = 1154, offset = 0) => {
  try {
    let url = `https://api.spoonacular.com/food/products?limit=${limit}&offset=${offset}&appid=${process.env.SPOON_KEY}`
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.log('error: ', err)
  }
}

export const getProductsData = async (url) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (err) {
    console.log('error: ', err)
  }
}
