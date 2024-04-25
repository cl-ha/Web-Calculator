//Hàm hiện giá trị các số/phép tính lên màn hình
function appendToDisplay(input)
{
  document.getElementById('display').value += input;
}

//Hàm xóa tất cả giá trị đang có trên màn hình
function clearDisplay() 
{
  document.getElementById('display').value = '';
}

//Hàm tính toán
function calculate()
{
  var result = eval(document.getElementById('display').value);
  document.getElementById('display').value = result;
}
