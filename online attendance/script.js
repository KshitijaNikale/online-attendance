document.getElementById('attendance-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  const name = document.getElementById('name').value;
  const studentId = document.getElementById('student-id').value;
  const date = document.getElementById('date').value;
  const status = document.getElementById('status').value;

  console.log(`Name: ${name}`);
  console.log(`Student ID: ${studentId}`);
  console.log(`Date: ${date}`);
  console.log(`Status: ${status}`);

  // You can add more functionality here, like sending the data to a server
  alert('Attendance submitted successfully!');
});
