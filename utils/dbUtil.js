const filterCategory = (arr) => {
    const categoryList = []
    arr.forEach(item => {
        if (categoryList.length === 0) {
            categoryList.push(item)
        } else {
            if (!categoryList.find(el => el.name == item.name)) categoryList.push(item)
        }
    });
    console.log(categoryList)
    return categoryList
}

const countNumInCategory = (arr, categorys) => {

    const count = {}
    categorys.forEach(item => count[item.name] = 0)

    categorys.forEach(category => {
        arr.forEach(item => {
            if (category.name == item.name) { count[category.name] += 1 }
        })
    })
    return count
}

module.exports = { filterCategory, countNumInCategory }