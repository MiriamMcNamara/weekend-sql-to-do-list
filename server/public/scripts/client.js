$( document ).ready( onReady );

function onReady(){
    getTasks();
    $( `#addTaskButton` ).on( 'click', addTask );
    $( `#viewTasks` ).on( 'click', `.deleteButton`, deleteTask );
    $( `#viewTasks` ).on( 'click', `.uncompleteButton`, completeTask);
};

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

function completeTask(){
    console.log( 'in complete task' );
    $.ajax({
        method: 'PUT',
        url: '/todo?id=' + $( this ).data( 'id' )
    }).then(function (response){
        getTasks();
    }).catch(function (err){
        console.log( 'problem updating task!', err )
    })
}; //end completeTask

function deleteTask(){
    console.log( 'in deleteTask', $( this ).data( 'id' ) );
//create a function that sends an AJAX DELETE 
    //req to the server in the client using $(this).data( 'id' )
    $.ajax({
        method: 'DELETE',
        url: '/todo?id=' + $( this ).data( 'id' )
    }).then(function (response){
        getTasks();
    }).catch( function( err ){
        console.log( 'problem deleting task!', err )
    })}; //end deleteTask

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
          if( response[i].completed === false ){
          el.append( `<tr>
                        <td>${response[i].id}</td>
                        <td><button data-id='${response[i].id}' class="uncompleteButton"><img class="no" src="./images/no.png"/></button></td>
                        <td class="taskToComplete">${response[i].item}</td>
                        <td><button data-id='${response[i].id}' class="deleteButton">Delete</button></td>
                    </tr>`)}
        else{
            el.append( `<tr>
                        <td>${response[i].id}</td>
                        <td><button data-id='${response[i].id}' class="completeButton"><img class="yay" src="./images/yay.jpg"/></button></td>
                        <td class="taskCompleted">${response[i].item}</td>
                        <td><button data-id='${response[i].id}' class="deleteButton">Delete</button></td>
                    </tr>`)
        }
    }}).catch( function( err ){
        console.log( 'problem getting tasks!', err )
    })}; //end getTasks