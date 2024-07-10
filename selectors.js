const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here 
    const seeded = document.getElementsByClassName("seed")
    
    // 2. Get all seedless fruit elements
    // Your code here 
    // const seedless = document.querySelector(".seedless") 
    // OR
    const seedless = document.getElementsByClassName("seedless")

    // 3. Get first seedless fruit element
    // Your code here 
    const firstSeedless = document.querySelector(".seedless")

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here 
    const you = document.getElementsByTagName("span")


    // 5. Get all children of element "wrapper"
    // Your code here 
    // const wrapperChildren = document.querySelectorAll("#wrapper")[0].children 
    // OR
    const wrapperChildren = document.getElementById("wrapper").children
    // 6. Get all odd number list items in the list
    // Your code here 
    // const odd = document.getElementsByClassName("odd");
    const odd = document.querySelectorAll("#two > ol > li:nth-child(odd)");

    // 7. Get all even number list items in the list
    // Your code here 
    const even = document.querySelectorAll("#two > ol > li:nth-child(even)");

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here 
    // const tech = document.querySelectorAll("#three > p > a:nth-child(1)")
    const tech = document.querySelectorAll("#three a:note([class])")


    // 9. Get "Amazon" list element
    // Your code here 
    const amazon = document.getElementsByClassName("shopping")

    // 10. Get all unicorn list elements (not the image element)
    // Your code here 
    // const unicorn = document.querySelectorAll("#three > ul > li")
    // OR
    const unicorn = document.querySelector("#three > ul").children

    debugger
}

window.onload = select;