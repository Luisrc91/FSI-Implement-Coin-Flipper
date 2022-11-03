// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0

//create a click funtion for the coin to change to tail or heads radomly. 
document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    document.querySelector('#flip').addEventListener('click', () => {

        const resultIsHeads = Math.random() < 0.5;

        if (resultIsHeads) {

            document.querySelector('#penny-image').src =
                'assets/images/penny-heads.jpg';
            document.querySelector('#penny-image').alt = 'Penny(heads up)'
            document.querySelector('#message').textContent = 'You flipped heads';
            totalHeads += 1;
            // TODO: Determine flip outcome
            // TODO: Update image and status message in the DOM

        } else {
            document.querySelector('#penny-image').src =
                'assets/images/penny-tails.jpg';
            document.querySelector('#penny-image').alt = 'Penny(tails up)'
            document.querySelector('#message').textContent = 'You flipped tails';
            totalTails += 1;
        }


        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


        let overallTotal = totalHeads + totalTails

        let percentageOfHeads = 0;
        let percentageOfTails = 0;

        if (overallTotal > 0) {
            percentageOfHeads = Math.round((totalHeads / overallTotal) * 100)
            percentageOfTails = Math.round((totalTails / overallTotal) * 100)


        }
        document.querySelector('#heads').textContent = totalHeads
        document.querySelector('#heads-percent').textContent = `${percentageOfHeads}%`;
        document.querySelector('#tails').textContent = totalTails
        document.querySelector('#tails-percent').textContent = `${percentageOfTails}%`;



        // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

        document.querySelector('#clear').addEventListener('click', () => {



            totalHeads = 0
            totalTails = 0

            document.querySelector('#message').textContent = `Let's Get Rolling!!`


            let overallTotal = totalHeads + totalTails;

            let percentageOfHeads = 0;
            let percentageOfTails = 0;

            if (overallTotal > 0) {
                percentageOfHeads = Math.round((totalHeads / overallTotal) * 100)
                percentageOfTails = Math.round((totalTails / overallTotal) * 100)


            }
            document.querySelector('#heads').textContent = totalHeads
            document.querySelector('#heads-percent').textContent = `${percentageOfHeads}%`;
            document.querySelector('#tails').textContent = totalTails
            document.querySelector('#tails-percent').textContent = `${percentageOfTails}%`;



        })


    });
});