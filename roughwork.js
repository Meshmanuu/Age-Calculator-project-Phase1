// let UserInput=document.getElementById("date");
// UserInput.max=new Date().toISOString().split("T")[0];
// let result=document.getElementById("result")

// function calculateAge(){
//     let birthDate= new Date(UserInput.value)

//     let d1=birthDate.getDate();
//     let m1=birthDate.getMonth();
//     let y1=birthDate.getFullYear();

//     let today= new Date();

//     let d2= today.getDate();
//     let m2= today.getMonth() + 1;
//     let y2= today.getFullYear();

//     let d3, m3, y3;
//     y3= y2-y1
    
//     if(m2>=m1){
//         m3= m2-m1;
//     }
//     else { y3--;
//         m3= 12+m2-m1;
//     }
//     if(d2>=d1){
//         d3= d2-d1;
//     }else{ 
//         m3--;
//         d3= getDaysInmonth(y1, m1) +d2-d1;

//     }
//     if(m3 < 0){
//         m3= 11;
//         y3--;


//     }
//     result.innerHTML=`You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;


// }
// function getDaysInmonth(year, month){
//     return new Date(year, month, 0).getDate();

// }




// // Wait for the DOM content to be fully loaded before executing the script
// document.addEventListener('DOMContentLoaded', function() {
//     // Get the input element for the date
//     const UserInput = document.getElementById("date");
//     // Set the maximum date for the input to the current date
//     UserInput.max = new Date().toISOString().split("T")[0];
//     // Get the element where the result will be displayed
//     const result = document.getElementById("result"); 
  

 
//    // Function to calculate the age based on the input date
//    async  function calculateAge() {
//      try {
//         // Get the birth date from the input value
//         const birthDate = new Date(UserInput.value);
//         // Get the current date
//         const today = new Date();
  
//         // Calculate the age components
//         let y3 = today.getFullYear() - birthDate.getFullYear();
//         let m3 = today.getMonth() - birthDate.getMonth();
//         let d3 = today.getDate() - birthDate.getDate();
  
//         // Adjust the age components if necessary
//         if (m3 < 0 || (m3 === 0 && today.getDate() < birthDate.getDate())) {
//           y3--;
//           m3 += 12;
//         }
//         if (d3 < 0) {
//           m3--;
//           d3 += getDaysInMonth(birthDate.getFullYear(), birthDate.getMonth());
//         }
  

//                     // Display the calculated age on the page
//         result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`; 

//             // Fetch cohort data based on age
//             const response = await fetch('cohorts.json');
//             const data = await response.json();

//             const cohorts = data.kenya_cohorts; // Assuming data structure from previous example

//             // Find the appropriate cohort based on age
//             let cohort;
//             cohorts.forEach(c => {
//                 if (y3 >= c.age_range.min && y3 <= c.age_range.max) {
//                     cohort = c;
//                 }
//             });

//             // Display cohort information and events
//             if (cohort) {
//                 result.innerHTML += ` <br>
//                     <p id=description><span>${cohort.description}</span></p><br>
//                     <p> Your Life expectancy: ${cohort.life_expectancy} years</p><br>
//                     <p>Population estimate: ${cohort.population}</p><br>
//                     <p id="main"><span>Yearly Events</span></p><br>
//                     <ol id="phrase">
//                        <span> ${cohort.events.map(e => `<li>${e.date}: ${e.event}</li>`).join('')}<span/>
//                     </ol>
//                 `;
//             } else {
//                 result.innerHTML += `<p>No cohort information found for your age.</p>`;
//             }
//         } catch (error) {
//             console.error('Error calculating age and fetching data:', error);
//             result.innerHTML = `<p>Error calculating age and fetching data. Please try again later.</p>`;
//         }
//     }

//        // Function to get the number of days in a specific month
//        function getDaysInMonth(year, month) {
//         return new Date(year, month + 1, 0).getDate();
//       }

//     // Add an event listener to the submit button to trigger the age calculation
//     const submitButton = document.getElementById('calculateAge');
//     submitButton.addEventListener('click', calculateAge);
// });
