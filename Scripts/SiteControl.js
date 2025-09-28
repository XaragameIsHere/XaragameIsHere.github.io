

document.querySelectorAll(".title-bar").forEach(function(firstObject){
    var Object = firstObject.parentElement;
    console.log(Object.parentElement);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    firstObject.onmousedown = dragMouseDown;
    
    function dragMouseDown(event){
        event = event || window.Event;
        event.preventDefault();
        
        pos3 = event.clientX;
        pos4 = event.clientY;
        
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.Event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1);
        // set the element's new position:
        Object.style.top = (Object.offsetTop - pos2) + "px";
        Object.style.left = (Object.offsetLeft - pos1) + "px";
      }

      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
})


