function showResult(){
  const backgroundColorE1 = document.getElementById('background-color');
  const borderRadiusE1 = document.getElementById('border-radius');
  const borderWidthE1 = document.getElementById('border-width');
  
  const resultE1 = document.getElementById('result');

  resultE1.style.backgroundColor = backgroundColorE1.value;
  resultE1.style.borderRadius = borderRadiusE1.value;
  resultE1.style.borderWidth = borderWidthE1.value
}