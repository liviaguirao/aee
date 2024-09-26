
function Calendario(){
     <div className="calendar">
     <div className="calendar-header">
       <div>DOM</div>
       <div>SEG</div>
       <div>TER</div>
       <div>QUA</div>
       <div>QUI</div>
       <div>SEX</div>
       <div>SAB</div>
     </div>
     <div className="calendar-days">{renderDays()}</div>
   </div>
}

export default Calendario;