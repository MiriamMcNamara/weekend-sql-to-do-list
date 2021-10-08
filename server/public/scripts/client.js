$( document ).ready( onReady );

function onReady(){
    $( `#addTaskButton` ).on( 'click', addTask );
    getTasks();
}

function addTask(){
    console.log( 'in addTask' );
    //capture the user input 
    let objectToSend = {
        item: $( `#taskInput` ).val(),
        completed: false
    };
    console.log( 'objectToSend:', objectToSend);
    //sends an AJAX POST req to the server
    $.ajax({
        method: 'POST',
        url: '/todo',
        data: objectToSend
    }).then( function (response){
        //get call
        getTasks();
        //empty out input
        $( `#taskInput` ).val('');
    }).catch( function( err ){
        console.log( 'problem posting task!', err )
    });//end AJAX

}; //end addTask

function getTasks(){
    $.ajax({
        method: 'GET',
        url: '/todo',
    }).then( function (response){
        console.log( 'response:', response );
      //empty table
      let el = $( `#viewTasks` );
      el.empty();
      //loop through response
      //display in the table on the DOM
      for( let i=0; i<response.length; i++){
          el.append( `<tr><td>${response[i].id}</td><td><input type="checkbox"></td><td>${response[i].item}</td></tr>`);
      }
    }).catch( function( err ){
        console.log( 'problem getting tasks!', err )
    });
}