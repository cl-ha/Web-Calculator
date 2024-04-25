const display = document.getElementById("display");
//Hàm xóa màn hình
function clearDisplay()
{
  display.value = "";
}

// //Hàm tính số đối
// function toggleSign()
// {

// }

// //Hàm tính phần trăm
// function calPercentage()
// {

// }

//Hàm xuất hiện số trên màn hình khi bấm button 
function appendToDisplay(input)
{
  display.value += input;
}

//Hàm tính toán
function calculate()
{
  try{
    display.value = eval(display.value);
  }
  catch(error){
    display.value ="Error!";
  }  
}