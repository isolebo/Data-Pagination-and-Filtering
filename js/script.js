/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
//Downloaded project files


/*
For assistance:bbbbbb
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page){
   let startIndex =(page * 10)-1; //calculates the  first index of students
   let endIndex = page * 10;// calculates last student to br diplayed

   let studentList = document.querySelector(".student-list");//selected student-list from html page and assigned it to a variable
    studentList.innerHTML= "";// assigned the student list to an empty string

   for (let i = 0; i < list.length; i++){
      if(i < startIndex || i > endIndex){
         list[i].style.display = 'none';
   }
      else{
         list[i].style.display = 'block';

      }
   }
   console.log(startIndex);
    
}


showPage(data,1);





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions


