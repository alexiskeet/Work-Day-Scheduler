var timeSectionEl = $('#currentDay');

$(document).ready(function () {
 
  var hour = dayjs().hour()
  console.log(hour);
  for (let i = 9; i < 18; i++) {
    const currentDiv = document.getElementById(`hour-${i}`)
    if (hour === i) {
      currentDiv.classList.add("present");
    } else if (hour > i){
      currentDiv.classList.add("past");
    } else {
      currentDiv.classList.add("future");
    }
    console.dir(currentDiv)

    //this button code did not work, but curious to look back on it
    //var currentButton = currentDiv.children[2]
   // currentButton.addEventListener('click', function(event){
      //var textBoxValue = event.target.previousElementSibling.value
      $('.saveBtn').on('click', function (event) {
      var notes = $(this).siblings('.description').val();
      var time = $(this).parent().attr('id');
      localStorage.setItem(time, notes);
    });
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    //checks if button works
    //console.dir(currentButton)
  
  }

  //code to display the current date in the header of the page.
  var displayTime = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
  timeSectionEl.text(displayTime)
});

