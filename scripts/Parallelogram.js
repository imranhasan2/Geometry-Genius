function calculateParallelogramArea(){
const parallelogramBase =document.getElementById('parallelogram-base');
const parallelogramBaseValue = parallelogramBase.value;
const parBase = parseFloat(parallelogramBaseValue);


const parallelogramHeight =document.getElementById('parallelogram-height');
const parallelogramHeightValue =parallelogramHeight.value;
const parHeight = parseFloat(parallelogramHeightValue);


const ParallelogramArea = parBase * parHeight;
console.log(ParallelogramArea);

const ParallelogramDisplay =document.getElementById('Parallelogram-area');
ParallelogramDisplay.innerText =ParallelogramArea;


}