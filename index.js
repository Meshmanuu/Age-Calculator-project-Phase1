// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById("date");
    userInput.max = new Date().toISOString().split("T")[0];
    const result = document.getElementById("result");

// Function to calculate the age based on the input date
    async function calculateAge() {
        try {
            const birthDate = new Date(userInput.value);
            const today = new Date();

        // Calculate the age components
            let years = today.getFullYear() - birthDate.getFullYear();
            let months = today.getMonth() - birthDate.getMonth();
            let days = today.getDate() - birthDate.getDate();

            if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
                years--;
                months += 12;
            }
            if (days < 0) {
                months--;
                days += getDaysInMonth(birthDate.getFullYear(), birthDate.getMonth());
            }
                    //Display Output ,User Age
            result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old`;
                    //Fetching Data from Cohort.json
            const response = await fetch('cohorts.json');
            if (!response.ok) {
                throw new Error('Failed to fetch cohort data');
            }
            const data = await response.json();
            const cohorts = data.kenya_cohorts;

            let cohort = null;
            cohorts.forEach(c => {
                if (years >= c.age_range.min && years <= c.age_range.max) {
                    cohort = c;
                }
            });
                    //display cohort Results
            if (cohort) {
                result.innerHTML += `
                    <br>
                    <p id="description"><span>${cohort.description}</span></p><br>
                    <p>Your Life expectancy: ${cohort.life_expectancy} years</p><br>
                    <p>Population estimate: ${cohort.population}</p><br>
                    <p id="main"><span>Yearly Events</span></p><br>
                    <ol id="phrase">
                        ${cohort.events.map(e => `<li>${e.date}: ${e.event}</li>`).join('')}
                    </ol>
                `;
            } else {
                result.innerHTML += `<p>No cohort information found for your age.</p>`;
            }
        } 
                //when calculator isnt working
        catch (error) {
            console.error('Error calculating age and fetching data:', error);
            result.innerHTML = `<p>Error calculating age and fetching data. Please try again later.</p>`;
        }
    }

       // Function to get the number of days in a specific month
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
//Event listener of submiiting button
    const submitButton = document.getElementById('calculateAge');
    submitButton.addEventListener('click', calculateAge);
});

