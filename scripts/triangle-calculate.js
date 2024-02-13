/*
objective:get base,height of a triangle.Calculate the area by using the provided formula. and then display
step-1 > get the base value
added a id in input fill.
step - 3 > use getelement id to get input field
step 4 get value from the input field (value is string now)
step 5 > convert the value is number now.use parsefloat
*/
function calculateTriangleArea(){
    // get triangle base value
   const triangleBase =document.getElementById('triangle-base');
   const triangleBaseValue = triangleBase.value;
   const base = parseFloat(triangleBaseValue)
//    console.log( base)

// get triangle height value
const triangleHeight = document.getElementById('triangle-height')
const triangleValue = triangleHeight.value;
const height = parseFloat(triangleValue);
// console.log(height)

// calculate triangle area

const area = 0.5 * base * height;
console.log('area of triangle',area);


const triangleArea = document.getElementById('triangle-area')
triangleArea.innerText = area;
}

