function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.target.style.padding = '0';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.padding = '0';
    //$('[id*=img]').removeClass('imgAdd');
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    var element = document.getElementById(data);
    dropevent.target.appendChild(element);
    //$('[id*=img]').removeClass('picsDraggable');
    $(element).addClass('imgAdd');
    //$(this).addClass('imgAdd');
    //dropevent.addClass(picsDraggable);
}

// JQUERY
/*$(document).ready(function() { 
    $('.materialboxed').materialbox();
});*/

/*$('img').draggable({
    addClasses: false,
    opacity: 0.35,
});

$('img').droppable({
    $(".collageContainer").append('img');
    
});*/

//INTENTO 2
/*function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
}

function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
}*/

//INTENTO 3
/*function handleDragStart(e) {
    this.style.opacity = '0.4';  // this / e.target is the source node.
}
  
function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
  
    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
  
    return false;
}
  
function handleDragEnter(e) {
    // this / e.target is the current hover target.
    this.classList.add('over');

    let collageContainer1 = document.getElementById('col-cont-1');
    collageContainer1.appendChild(e)
    let collageContainer2 = document.getElementById('col-cont-1');
    collageContainer2.appendChild(e)
    let collageContainer3 = document.getElementById('col-cont-1');
    collageContainer3.appendChild(e)
}
  
function handleDragLeave(e) {
    this.classList.remove('over');  // this / e.target is previous target element.
}
  
var imgs = document.querySelectorAll('#showPics .materialboxed');
[].forEach.call(imgs, function(img) {
    img.addEventListener('dragstart', handleDragStart, false);
    img.addEventListener('dragenter', handleDragEnter, false);
    img.addEventListener('dragover', handleDragOver, false);
    img.addEventListener('dragleave', handleDragLeave, false);
});*/