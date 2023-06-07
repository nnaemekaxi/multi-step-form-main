    let myIds = {
      personalInfo:info_selection,
      planSelection:plan_selection,
      addonsSelection:addons_selection,
      finishSelection:finish_selection,
      popUp:pop_up,
      selectOne:select_one,
      selectTwo:select_two,
      selectThree:select_three,
      selectFour:select_four,
      confirmButton:confirm_selections,
      nextButtonTwo:to_step_2,
      nextButtonThree:to_step_3,
      nextButtonFour:to_step_4,
      backButtonOne:back_step_1,
      backButtonTwo:back_step_2,
      backButtonThree:back_step_3,
      monthlySel:monthly,
      yearlySel:yearly,
      checkedYear:checkyear,
      checkedMonth:checkmonth,
      checksMonth:checksmonth,
      checksYear:checksyear,
      arcadePrice:arcade_price,
      advancedPrice:advanced_price,
      proPrice:pro_price,
      online,storage,custom, changeButton, planSelected, planSelectedControl, addonsSelected,
      moneyChanger, onlineService,storageService, customService, arcadeSelection, advancedSelection, proSelection,totalText,
      totalMoney
    }
    
    function switchSelection() {if (myIds.yearlySel.checked){
      myIds.checkedYear.classList.add("active"); 
      myIds.checkedMonth.classList.remove("active"); 
      myIds.checkedMonth.classList.remove("check");
      myIds.checksYear.classList.add("check2"); 
      myIds.checksMonth.classList.remove("check2"); 
      myIds.arcadePrice.innerHTML =  `$90/yr <br> <p style="color: var(--primary-col-1);font-weight: var(--font-weight-2); ">2 months free</p>`;
      myIds.advancedPrice.innerHTML =   `$120/yr <br> <p style="color: var(--primary-col-1);font-weight: var(--font-weight-2);">2 months free</p>`;
      myIds.proPrice.innerHTML =   `$150/yr <br> <p style="color: var(--primary-col-1);font-weight: var(--font-weight-2);">2 months free</p>`;
      myIds.online.innerHTML = "$10/yr";
      myIds.storage.innerHTML = "$20/yr";
      myIds.custom.innerHTML = "$20/yr";
    } else if (myIds.monthlySel.checked){
      myIds.checkedMonth.classList.add("active");
      myIds.checkedYear.classList.remove("active");
      myIds.checksMonth.classList.add("check2"); 
      myIds.checksYear.classList.remove("check2"); 
      myIds.arcadePrice.innerHTML =  "$9/mo";
      myIds.advancedPrice.innerHTML =   "$12/mo"
      myIds.proPrice.innerHTML =   "$15/mo";
      myIds.online.innerHTML = "$1/mo";
      myIds.storage.innerHTML = "$2/mo";
      myIds.custom.innerHTML = "$2/mo";
    }
  } 

  let planAmount = 0;
  let addonsAmount = 0;
  let frequency = "";
  let subscription = "";
  let freq = "";

    myIds.addonsSelected.innerHTML = ``
    function CheckOut() {
      if (myIds.monthlySel.checked== true && myIds.arcadeSelection.checked ==true ){
        planAmount = 9;
        frequency = "/mo";
        freq = "month";
        subscription = "Arcade monthly";
      } else if (myIds.monthlySel.checked== true && myIds.advancedSelection.checked ==true ){
        planAmount = 12;
        frequency = "/mo";
        freq = "month";
        subscription = "Advanced monthly";
      } else if (myIds.monthlySel.checked== true && myIds.proSelection.checked ==true ){
        planAmount = 15;
        frequency = "/mo";
        freq = "month";
        subscription = "Pro monthly";
      } else if (myIds.yearlySel.checked== true && myIds.arcadeSelection.checked ==true ){
        planAmount = 90;
        frequency = "/yr";
        freq = "year";
        subscription = "Arcade yearly";
      } else if (myIds.yearlySel.checked== true && myIds.advancedSelection.checked ==true ){
        planAmount = 120;
        frequency = "/yr";
        freq = "year";
        subscription = "Advanced yearly";
      } else if (myIds.yearlySel.checked== true && myIds.proSelection.checked ==true ){
        planAmount = 150;
        frequency = "/yr";
        freq = "year";
        subscription = "Pro yearly";
      }

      if (((myIds.onlineService.checked == true && myIds.storageService.checked == true && myIds.customService.checked == true)) && myIds.monthlySel.checked == true){
        addonsAmount = 5;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$1/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$2/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      } else if ((myIds.onlineService.checked == true && myIds.storageService.checked == true && myIds.customService.checked == true) && myIds.yearlySel.checked == true){
        addonsAmount = 50;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$10/yr</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$20/yr</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$20/yr</span>
        </aside>
      </div>
    `
      }else if ((myIds.onlineService.checked == true && myIds.storageService.checked == true) && myIds.monthlySel.checked == true){
        addonsAmount = 3;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$1/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      } else if ((myIds.onlineService.checked == true && myIds.storageService.checked == true)  && myIds.yearlySel.checked == true){
        addonsAmount = 30;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$10/yr</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$20/yr</span>
        </aside>
      </div>
    `
      }else if ((myIds.onlineService.checked == true && myIds.customService.checked == true)  && myIds.monthlySel.checked == true){
        addonsAmount = 3;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$1/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      }else if ((myIds.onlineService.checked == true && myIds.customService.checked == true)  && myIds.yearlySel.checked == true){
        addonsAmount = 30;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$10/yr</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$20/yr</span>
        </aside>
      </div>
    `
      } else if ((myIds.storageService.checked == true && myIds.customService.checked == true) && myIds.monthlySel.checked == true){
        addonsAmount = 4;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$2/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile</span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      }else if ((myIds.storageService.checked == true && myIds.customService.checked == true) && myIds.monthlySel.checked == true){
        addonsAmount = 40;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$20/mo</span>
        </aside>
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile</span><span class="second-part">+$20/mo</span>
        </aside>
      </div>
    ` 
  }else if (myIds.storageService.checked == true && myIds.monthlySel.checked == true){
        addonsAmount = 2;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      }else if (myIds.storageService.checked == true && myIds.yearlySel.checked == true){
        addonsAmount = 20;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Larger Storage </span><span class="second-part">+$20/yr</span>
        </aside>
      </div>
    `
      } else if (myIds.customService.checked == true  && myIds.monthlySel.checked == true){
        addonsAmount = 2;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$2/mo</span>
        </aside>
      </div>
    `
      }else if (myIds.customService.checked == true && myIds.yearlySel.checked == true){
        addonsAmount = 20;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside  class="selected-addons">
          <span class="first-part">Customizable Profile </span><span class="second-part">+$20/yr</span>
        </aside>
      </div>
    `
      }else if(myIds.onlineService.checked == true && myIds.monthlySel.checked == true) {
        addonsAmount = 1;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$1/mo</span>
        </aside>
      </div>
    `
      }  else if(myIds.onlineService.checked == true  && myIds.yearlySel.checked == true) {
        addonsAmount = 10;
        myIds.addonsSelected.innerHTML = `
        <div id="addonsSelected" class="addons-carrier">
        <aside class="selected-addons">
          <span class="first-part">Online Service</span> <span class="second-part">+$10/yr</span>
        </aside>
      </div>
    `
      }


      myIds.moneyChanger.innerHTML = planAmount+frequency
      myIds.planSelectedControl.innerHTML = subscription
      myIds.totalText.innerHTML = `Total (per ${freq})`
      myIds.totalMoney.innerHTML = (planAmount+addonsAmount)+frequency
    }

    myIds.yearlySel.onclick = switchSelection;
    myIds.monthlySel.onclick = switchSelection;

    myIds.personalInfo.style.display = "block";
    myIds.selectOne.style =  `background-color: hsl(206, 94%, 87%); color: black`;
    myIds.planSelection.style.display = "none";
    myIds.addonsSelection.style.display = "none";
    myIds.finishSelection.style.display = "none";
    myIds.popUp.style.display = "none";

    function displayOne(){
      myIds.personalInfo.style.display = "block";
      myIds.planSelection.style.display = "none";
      myIds.addonsSelection.style.display = "none";
      myIds.finishSelection.style.display = "none";
      myIds.popUp.style.display = "none";
      myIds.selectOne.style =  `background-color: hsl(206, 94%, 87%); color: black`;
      myIds.selectTwo.style =  `background-color: none; color: white`;
      myIds.selectThree.style =  `background-color: none; color: white`
      myIds.selectFour.style =  `background-color: none; color: white`;

    }

    function displayTwo(){
      myIds.personalInfo.style.display = "none";
      myIds.planSelection.style.display = "block";
      myIds.addonsSelection.style.display = "none";
      myIds.finishSelection.style.display = "none";
      myIds.popUp.style.display = "none";
      myIds.selectTwo.style =  `background-color: hsl(206, 94%, 87%); color: black`;
      myIds.selectOne.style =  `background-color: none; color: white`
      myIds.selectThree.style =  `background-color: none; color: white`
      myIds.selectFour.style =  `background-color: none; color: white`;

    }

      function displayThree(){
        myIds.personalInfo.style.display = "none";
        myIds.planSelection.style.display = "none";
        myIds.addonsSelection.style.display = "block";
        myIds.finishSelection.style.display = "none";
        myIds.popUp.style.display = "none";
        myIds.selectThree.style =  `background-color: hsl(206, 94%, 87%); color: black`;
        myIds.selectOne.style =  `background-color: none; color: white`
        myIds.selectTwo.style =  `background-color: none; color: white`;
        myIds.selectFour.style =  `background-color: none; color: white`;
        
      }

      function displayFour(){
        myIds.personalInfo.style.display = "none";
        myIds.planSelection.style.display = "none";
        myIds.addonsSelection.style.display = "none";
        myIds.finishSelection.style.display = "block";
        myIds.popUp.style.display = "none";
        myIds.selectFour.style =  `background-color: hsl(206, 94%, 87%); color: black`;
        myIds.selectOne.style =  `background-color: none; color: white`
        myIds.selectTwo.style =  `background-color: none; color: white`;
        myIds.selectThree.style =  `background-color: none; color: white`;
        CheckOut()
      }

      myIds.confirmButton.onclick = function submitPlan() {
        alert("Form submitted successfully");
        myIds.finishSelection.style.display = "none";
        myIds.popUp.style.display = "flex"
      }

      //Side-Selectors
      myIds.selectOne.onclick = displayOne;
      myIds.selectTwo.onclick = displayTwo;
      myIds.selectThree.onclick = displayThree;
      myIds.selectFour.onclick = displayFour;

      // Buttons
      myIds.nextButtonTwo.onclick = displayTwo;
      myIds.nextButtonThree.onclick = displayThree;
      myIds.nextButtonFour.onclick = displayFour;
      myIds.backButtonOne.onclick = displayOne;
      myIds.backButtonTwo.onclick = displayTwo;
      myIds.backButtonThree.onclick = displayThree;
      myIds.changeButton.onclick = displayTwo;

      myIds.moneyChanger.innerHTML = myIds.arcadePrice.innerHTML;

      