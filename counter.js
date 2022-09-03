
function openForm() {
    console.log("Aaa");
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    let section = document.createElement('section');
    section.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
    let div = document.getElementById("main-div")
    div.append(section);
  }