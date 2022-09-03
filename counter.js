
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    var sectionTest = document.createElement('section');
    sectionTest.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    var divTest = document.getElementById("main-div")
    divTest.appendChild(sectionTest);
    document.getElementById("myForm").style.display = "none";
  }