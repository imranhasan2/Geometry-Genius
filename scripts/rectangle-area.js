
function calculateRectangleArea(){
    const rectangleWidth = document.getElementById('rectangle-width');
   const rectangleWidthValue = rectangleWidth.value;
   const recWidth =parseFloat(rectangleWidthValue);
 //   console.log(recWidth)
 
 
 const rectangleLength = document.getElementById('rectangle-length')
 const rectangleLengthValue = rectangleLength.value;
 const recLength =parseFloat(rectangleLengthValue);
 // console.log(recLength)
 
 
 const area = recLength * recWidth;
 console.log(area);
 

 const rectangleArea = document.getElementById('rectangle-area');
 rectangleArea.innerText =area;
 
 }