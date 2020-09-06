/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
//Downloaded project files


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


const pageItems = 9;// global variable to display the items per page

const showPage = (list, page) => { //function to create a student list up to 9 in a page 
   let startIndex =(page * pageItems)-pageItems; //calculates the  first index of students
   let endIndex = page * pageItems;// calculates last student to be diplayed
   let studentList = document.querySelector(".student-list");//selected student-list from html page and assigned it to a variable
   studentList.innerHTML= " ";// assigned the student list to an empty string

   for (let i = 0; i < list.length; i++){// loop will run for each student list parameter
      let studentObject = list[i]//variable used to access student object
      if(i >= startIndex && i < endIndex){//conditional statement to check to if certain students are between these indexes
        
         let studentsInfo= '';

         /*
            Template literal to create DOM elements to display the students info 
         */ 
         studentsInfo +=  `<li class="student-item cf"> 
         <div class="student-details"> 
            <img class="avatar" src="${studentObject.picture.thumbnail}"> 
            <h3>${studentObject.name.first} ${studentObject.name.last}</h3> 
               <span class="email">${studentObject.email}</span> 
            </div> 
            <div class="joined-details"> 
              <span class="date">Joined: ${studentObject.registered.date}</span> 
         </div> 
            </li>`

         const insertStudents = document.getElementsByClassName("student-list")[0];
         insertStudents.insertAdjacentHTML('beforeend', studentsInfo)//to insert the student list to the DOM
      } 
   } 
};

 //showPage(data,1); //calling function to display students

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list){
   const numOfPages = Math.ceil(list.length / pageItems); //calculates the number of pagination buttons
   const linkList = document.querySelector(".link-list");// selecting link-list, paginatio buttons will be added to this element
   linkList.innerHTML = " ";

   for(let i = 1; i <= numOfPages.length; i++){ // for loop for the number of pages to be shown


   }

   console.log(list);
}

addPagination(data);

// Call functions


