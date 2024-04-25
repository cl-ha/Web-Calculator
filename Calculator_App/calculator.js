//Hàm hiện giá trị các số/phép tính lên màn hình
function appendToDisplay(input)
{
  if (flag)
  {
    document.getElementById('display').value = input;
    flag = false; //đặt lại trạng thái cho biến cờ hiệu (chưa tính toán)
  }
  else
    document.getElementById('display').value += input;
}

//Hàm xóa tất cả giá trị đang có trên màn hình
function clearDisplay() 
{
  document.getElementById('display').value = '';
}

//Hàm tính giá trị phần trăm
function calPercentage()
{
  document.getElementById('display').value = parseFloat(document.getElementById('display').value) / 100;
  flag = true;
}

//Hàm tính số đối
function toggleSign()
{
  document.getElementById('display').value = document.getElementById('display').value * -1;
}

//Hàm tính toán
var flag = false; //chưa tính toán
function calculate()
{  
  try
  {
    var result = eval(document.getElementById('display').value); 
    document.getElementById('display').value = result;
    flag = true; //đã tính toán
  }
  catch(error)
  {
    document.getElementById('display').value = "Error";
  }
}
