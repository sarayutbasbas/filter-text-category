
const getCategories = async () => {
  try {
    const res = await fetch('https://api.publicapis.org/categories')
      .then(res => res.json())
      .then((response) => response)
    return res
  } catch (e) {
    console.log(e)
  }
}

export default getCategories
