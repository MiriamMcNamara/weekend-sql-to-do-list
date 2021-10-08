$( document ).ready( onReady );

function onReady(){
    $( `#addTaskButton` ).on( 'click', addTask );
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
        //you're gonna put a get call here
        console.log( 'POSTED');
        //empty out input
        $( `#taskInput` ).val('');
    }).catch( function( err ){
        console.log( 'problem posting task!', err )
    });//end AJAX

}; //end addTask