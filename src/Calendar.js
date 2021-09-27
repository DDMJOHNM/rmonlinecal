

class Calendar{

  
  constructor(currentDate){
        this.currentDate = currentDate;       
       
    }

    displayCal(){
     
      //gets number of day of the week you are on
      let days = [];
      let dayName = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];     
     
      //day in month
      const currentDay = this.currentDate.getDate();
      const ldom = new Date(this.currentDate.getYear(),this.currentDate.getMonth(),0).getDate(); 
     
      //day in week & no days left in week
      let startDayRemainderRight = Number(this.currentDate.getDay()%7);
     
      //days elapsed in current week
      console.log(currentDay,"Start Day");
      console.log(startDayRemainderRight,"Start Right Remainder");
      console.log(ldom,"ldom")
     
      //days remaining in week
      for (let i = 1; i < ldom;i++){  
        let df = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),i); 
         days.push(df);         
      }      
     
      //sort days in order 
      //days.sort();
      console.log(days);
               
      //create template for calendar for the week
      days.forEach((d,i)=>{  
             if(i===0){
               
             }
             document.querySelector('.calendar').insertAdjacentHTML('beforeend',`<div class="cal-cell ${currentDay === d.getDate() ? 'today':''}">
            ${d.toLocaleDateString()}
         </div>`);    
      });
       
       document.querySelectorAll('.cal-cell').forEach((cell,i)=>{          
          
          //get appointments from server
          const slots = ["9am","10am","11am","1pm","2pm","3pm"];         

          slots.forEach((s)=>{            
            let slotSpan = document.createElement('span');
            let appt = document.createElement('span');
            appt.classList.add("appt");

            if(i===0){              
              slotSpan.append(s);
            }
            slotSpan.append(appt);
            slotSpan.classList.add("slot");
            cell.append(slotSpan);
            slotSpan.addEventListener('click',function(e){

              //todo:open modal to add appointment 
              if(e.currentTarget.children[0].classList == "appt"){
                e.currentTarget.children[0].classList.add("active"); 
              
                //todo:open modal for new appoint
              } else if(e.currentTarget.children[0].classList == "appt active"){
                 e.currentTarget.children[0].classList.remove("active"); 
              
                 //todo:open modal for appoint only if remove slected remove active class 
              }
              
              //todo: booking drag move and insert in new spot
            })
          })
        })

    } 

}

export default Calendar;