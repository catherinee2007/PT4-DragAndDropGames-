//store the reference  ...box ... droppable
const draggableElement = document.querySelectorAll('.draggable');
const dropTargets = document.querySelectorAll('.drop-target');
var dragDiv;
let score = 0;

//DRAG START
draggableElement.forEach(draggable=>{
    
    draggable.addEventListener('dragstart', e=>{
        e.dataTransfer.setData('text/plain', draggable.getAttribute('data-correct'));
        dragDiv = draggable;
        // console.log(dragDiv);
        // console.log('item dragged');
        //apply the css draggableFormat       ---CSS CLASS---
        // drgStart.currentTarget.classList.add('draggableFormat');
        //console.log('dragstart event is activated!');
       // console.log(drgStart); //to check if data transfer is working

    });//end of dragstart    
});


//DROP EVENT
dropTargets.forEach(dropTarget=>{
    dropTarget.addEventListener('dragover', e=>{
        e.preventDefault();
    });
    dropTarget.addEventListener('drop', e=>{
        e.preventDefault();
        const correctAnswer = e.dataTransfer.getData('text/plain'); //BOX1
        const dropTargetAnswer = dropTarget.getAttribute('data-correct');
        // const draggableElement = document.getElementById(droppedElementId);

        dragDiv.remove(dragDiv.childNodes[1]);
        dragDiv.classList.add('after-drop');

        dragDiv.setAttribute('draggable', false);
        e.target.setAttribute('draggable', false);
        // drpEvt.target.appendChild(document.getElementById(droppedElementId));
        //drpEvt.target.appendChild(draggableElement.cloneNode(true));
        //console.log(dropZoneId);
        if(correctAnswer===dropTargetAnswer){

            dropTarget.classList.add('correct');
            score+=1;
            document.getElementById('remarks').innerText = "Correct!";
            document.getElementById('scores').innerText = score;
            //console.log('Right');
            // score+=1;
            // document.getElementById('remarks').innerText = "Tama!";
            // document.getElementById('scores').innerText = score;
        }else{
            dropTarget.classList.add('wrong');
            document.getElementById('remarks').innerText = "Wrong!";
            //console.log('Wrong');
            // document.getElementById('remarks').innerText = "Mali!";
        }//end of if else

    
    });
}); 