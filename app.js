function boxGenerator() {
   var count = 0;
   const $numId = document.getElementById('number');
   var num = $numId.value;
   var color = document.getElementById('color').value;
   for (let i = 0; i < num; i++) {
      var btn = document.createElement("button");
      btn.id = "btn"
      btn.innerHTML = "Button" + (count + 1);
      btn.style = "background-color:" + color + ";"
      document.body.appendChild(btn);
      count++;
   }
   $numId.value = null;
}