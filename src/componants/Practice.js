const Practice = (props) => {
    const t = [1, -1, 3]
       
    t.push(5)
    console.log(t.length)
    console.log(t[1])

    t.forEach(value => {
        console.log(value)
    })

    const t2 = t.concat(5)
    console.log(t2)
    t2.forEach(value => {
        console.log(value)
    })

    const m2 = t.map(value => '<li>' + value + '</li>')
    console.log(m2)

    const object1 = {
        name: 'Arto Hellas',
        age: 35,
        education: 'PHD'
    }
    console.log(object1.name)
    console.log(object1['age'])

     object1.address = 'Helsinki'
     console.log(object1['address'])
    
     const products = {
        title: 'duck hat',
        cost: '35 euros',
        catagory: 'hats'
    }

    products.image = "product.jpg"
    console.log(products)
    console.log(JSON.stringify(products))
    
    const age = 26
    const beverage = age >= 21 ? 'beer': 'juice';
    console.log(beverage)

    let grade = 77
    let status = grade >= 40 ? 'Pass': 'Fail';
    console.log(status)
    console.log(grade >= 40 ? 'Pass': 'Fail')


     return(
    <>
    </>
   )
}


export default Practice;