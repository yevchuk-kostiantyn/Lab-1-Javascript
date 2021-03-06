    function show(container, Message) {
      container.className = 'message';
      var msgElem = document.createElement('span');
      msgElem.className = "output-message";
      msgElem.innerHTML = Message;
      container.appendChild(msgElem);
    }

    function showMessage(container) {
      container.className = '';
      if (container.lastChild.className == "output-message") {
        container.removeChild(container.lastChild);
      }
    }

    function calculate(form) {
      // Calculate Price
      var house = form.elements;

      showMessage(house.area.parentNode);
      if (house.material.value == 'bricks') {
      	show(house.price.parentNode, house.area.value * 1200 + '$')
      	document.getElementById("Build_button").disabled = true;
      }
      else if(house.material.value == 'wood') {
      	show(house.price.parentNode, house.area.value * 1500 + '$')
      	document.getElementById("Build_button").disabled = true;
      }
      else if(house.material.value == 'metal') {
      	show(house.price.parentNode, house.area.value * 1000 + '$')
      	document.getElementById("Build_button").disabled = true;
      }
      else if(house.material.value == 'foam blocks') {
        show(house.price.parentNode, house.area.value * 1300 + '$')
        document.getElementById("Build_button").disabled = true;
      }
      else if(house.material.value == 'wireframes') {
        show(house.price.parentNode, house.area.value * 800 + '$')
        document.getElementById("Build_button").disabled = true;
      }
      
      else {
      	show(house.price.parentNode, 'Sorry, we do not build with this material')
      	document.getElementById("Build_button").disabled = true;
      }
    }    