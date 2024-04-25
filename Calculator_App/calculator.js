//Hàm hiện giá trị các số/phép tính lên màn hình
function appendToDisplay(input) 
{
  var display = document.getElementById('display');  
  // Kiểm tra nếu đã tính toán kết quả trước đó và người dùng nhập vào một dấu phép tính
  if (flag && '+-*/'.includes(input)) 
  {
    // Thêm dấu phép tính mới vào màn hình
    display.value += input;
    // Đặt lại cờ đã tính toán
    flag = false;
  } 
  else 
  {
    // Nếu không, thực hiện thêm số hoặc dấu phép tính vào màn hình như bình thường
    display.value += input;
  }
}

//Hàm xóa tất cả giá trị đang có trên màn hình
function clearDisplay() 
{
  document.getElementById('display').value = '';
}

//Hàm tính giá trị phần trăm
function calPercentage()
{
  var display = document.getElementById('display');
  display.value = parseFloat(display.value) / 100;
  flag = true;
}

//Hàm tính số đối
function toggleSign()
{
  var display = document.getElementById('display');
  display.value = display.value * -1;
}

//Hàm tính toán
var flag = false; //chưa tính toán
var check = false; 
var preValue;

function calculate()
{  
  try
  {
    var display = document.getElementById('display');
    var result = eval(display.value); 
    display.value = result;
    flag = true; //đã tính toán
  }
  catch(error)
  {
    display.value = "Error";
  }
}
