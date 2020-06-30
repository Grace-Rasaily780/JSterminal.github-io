var input = document.getElementById('input');
var curloc = document.getElementById('loc').innerHTML;
var uni;

  function keyFn(event){

  	if (event.keyCode === 13) {
   

  	if(document.getElementById('input').value == "hacking mode"){
		document.getElementById('body').style.color = '#00ff22';
		uni = "MODE SET"
	} else if(document.getElementById('input').value == ""){
		uni = " ";
	} else if(document.getElementById('input').value == "cd"){
		uni = "CHANGED";
	} else if(document.getElementById('input').value == "reset"){
    uni = "<<<RESETING>>>";
    location.reload();
	} else if(document.getElementById('input').value == "Vjsfconsole"){
      uni = "/*VJS STARTED*/";
      document.getElementById('loc').innerHTML = "jsf>";
  } else if(document.getElementById('input').value == "txteditor"){
      var editor = '<div class="content">' +
                        '<textarea bgcolor="#333" id="area"></textarea>'
                    '</div>';
      uni = " ";
      
      document.getElementById('txtpanel').innerHTML = editor;
  } else if(document.getElementById('input').value == "save"){
    var saved =  document.getElementById('area').value;
    var file = prompt("Save As");
    localStorage.setItem(file , saved);
  } else if (document.getElementById('input').value == "open") {
    var openf = prompt("File name");

    uni = localStorage.getItem(openf);
  } else if(document.getElementById('input').value == "out"){
     
      uni = "/*CLOSING*/"
       window.close();  
  } else if (document.getElementById('input').value == "files") {
      console.log(localStorage);

      var total = "#Total " + localStorage.length + " files:";
      document.getElementById('totout').innerHTML = total;

      for(let i = 0; i < localStorage.length; i++){
        var p = document.createElement("p");

        var keys = document.createTextNode(localStorage.key(i));
        p.appendChild(keys);

      document.getElementById('txtpanel').appendChild(p);
      
    }
    uni = " ";
  } else if(document.getElementById('input').value == "del"){
      var delname = prompt("File name");

      localStorage.removeItem(delname);
      uni = "File: " + delname + " deleted";
  }


    var label = document.createElement("label");
    var input = document.createElement("input");
    var br = document.createElement("br");

    input.setAttribute('id', 'input');

    var outNode = document.createTextNode('# ' + uni );
    label.appendChild(outNode);

    document.getElementById('output').appendChild(label);
    document.getElementById('output').appendChild(input);
    document.getElementById('output').appendChild(br);

    document.getElementById('input').value = "";
	}
	
	
 } 



 function setCaretPosition(ctrl, pos) {
  // Modern browsers
  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  
  // IE8 and below
  } else if (ctrl.createTextRange) {
    var range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

// Set the cursor position of the "#test-input" element to the end when the page loads

setCaretPosition(input, input.value.length);