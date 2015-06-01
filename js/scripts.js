$(document).ready(function(){
  $('form#new-task').submit(function(event){
    event.preventDefault();
    $("#show-incomplete").show();
    $("#show-complete").show();

    var inputTask = $("input#new-task").val();
    var newTask = { taskName: [], statusTask: true };
    newTask.taskName.push(inputTask);

  $("ul#incomplete").append("<p><span class='task-incomplete'>Task: " + newTask.taskName + "</p>");

  $(".task-incomplete").last().click(function() {
    newTask.statusTask = false
    this.remove()
    $("ul#complete").append("<p><span class='task-complete'>Task: " + newTask.taskName + "</p>");

    });

    $("input#new-task").val("");
  });
});
