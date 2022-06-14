
    var diplomas=0;
    var studyCost=10000;
    var days=0;
    var mealCost=15;
    var meal=0;
    var money = 1000;
    var amount =1;
    var jobCost = 30;
    var job = 0;
    var happy = 100;
    var Interval;
    var buttonStart = document.getElementById("btn-forward");
    var buttonStop = document.getElementById("btn-stop");
    var speed=0;
    var jobpay=100;
    var carexpense=300;
    var rentexpense=800;
    var lifeinsurance=120;
    var streaming=200;
    var gas=200;
    var powerwater=270;
    var food=400;


    var stock1=0;
    var stock2=0;
    var stock3=0;
    var stock4=0;
    var stockCost1=50;
    var stockCost2=50;
    var stockCost3=50;
    var stockCost4=50;

    buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    
    speed=speed+1;
    
    Interval = setInterval(valuecalc, 1000/speed);
    document.getElementById("speed").innerHTML= speed;
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
    speed=0;
    document.getElementById("speed").innerHTML= speed
});

window.onload =function (){
     start();


}


    function getMeal(){
        if (money>mealCost){
            happy=happy+10;
            money=money-mealCost;
            meal=meal+1;
            mealCost = Math.round(mealCost*1.15);
            document.getElementById("meal").innerHTML= meal;
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("happy").innerHTML= happy;
                        document.getElementById("mealCost").innerHTML= mealCost;


        }


    }

    function buyStock1(){
        if (money>stockCost1){
            
            money=money-stockCost1;
            stock1=stock1+1;
           
            document.getElementById("meal").innerHTML= meal;
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("happy").innerHTML= happy;
                        document.getElementById("mealCost").innerHTML= mealCost;


        }


    }

    function getjob() {
                            if (happy >= jobCost) {
                        
                        happy= happy-jobCost;
                        job = job + 1;
                        jobCost = Math.round(jobCost * 1.15);
                        document.getElementById("log").innerHTML ="You got a job that should make someone proud. I guess. You have " + job + " jobs";
                        document.getElementById("happy").innerHTML= happy;
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("jobCost").innerHTML= jobCost;
                        document.getElementById("job").innerHTML= job;
                            }
                        }

    function addToScore(amount)
            {
            money = money + amount;
            document.getElementById("money").innerHTML=money;
            }



    function study()
    {
        if (money>studyCost){
        
        jobpay=jobpay*1.5;
        money=money-studyCost;
        studyCost=studyCost*1.2;
        diplomas=diplomas+1;
        document.getElementById("log").innerHTML ="You studied. Earn 50% more from your job that's $" + jobpay;
        document.getElementById("money").innerHTML= money;
        document.getElementById("studyCost").innerHTML= studyCost;
        document.getElementById("diplomas").innerHTML= diplomas;
        document.getElementById("jobpay");
    }


    }

    function valuecalc()
            {
                    
                
            money = Math.round(money + job * jobpay - (meal*10));
            
            
            happy = Math.round(happy - job*0.08 + meal*0.5);
            days=days+1;
            document.getElementById("log").innerHTML ="a day passed you earned "+(job * jobpay - (meal*10));
            document.getElementById("money").innerHTML= money;
            document.getElementById("happy").innerHTML= happy;
            document.getElementById("days").innerHTML= days;
            document.getElementById("timer");
            document.getElementById("jobCost").innerHTML= jobCost;
            document.getElementById("job").innerHTML= job;
            document.getElementById("meal").innerHTML= meal;
            document.getElementById("jobpay");
            
            if (money>10,000)
            {
                document.getElementById("money").innerHTML= money;
                alert("youre bankrupt. it's okay we're all winners here. except for you. you totally lost the game which is the opposite of winning")
            }
            if (happy<0){
                document.getElementById("happy").innerHTML= happy;
                alert("You became depressed. You hide in a corner and no longer care about the material world. Game over");
            }
            if (days % 30==0){
                money=money+job-(carexpense+rentexpense+lifeinsurance+streaming+gas+powerwater+food);
            }
           /* if (job = 0){
                alert("get a job stop wasting your life");
                document.getElementById("job").innerHTML= job;
            }
     */
}
function reset(){
    if (confirm("Do you want to reset the game?")== true){
        start();
}
}
function start(){
    var expmultiplier= Math.floor(Math.random()*4+1);
    carexpense=100*expmultiplier;
    rentexpense=300*expmultiplier;
    lifeinsurance=50*expmultiplier;
    streaming=30*expmultiplier;
    gas=70*expmultiplier;
    powerwater=80*expmultiplier;
    food=90*expmultiplier;

    document.getElementById("carexpense").innerHTML= carexpense;
     document.getElementById("rentexpense").innerHTML= rentexpense;
     document.getElementById("lifeinsurance").innerHTML= lifeinsurance;
     document.getElementById("streaming").innerHTML= streaming;
     document.getElementById("gas").innerHTML= gas;
     document.getElementById("powerwater").innerHTML= powerwater;
     document.getElementById("food").innerHTML= food;
     
     alert("You wake up it's your first day of adult life. your parents kicked you out and you get to play the game of life. Your expenses are "
    + carexpense + " for your car " + powerwater +" for electricity and water " + rentexpense + " for apartment rental " + lifeinsurance + " for your healthcare " + 
    streaming + " for some monthly entretainment " + gas + " for your car fuel " + food + " for your monthly food bill. your aim is to get rich and show the world");
     
     days=0;
     mealCost=15;
     meal=0;
     money = 1000;
     amount =1;
     jobCost = 30;
     job = 0;
     happy = 100;
     studyCost=10000;
     diplomas=0;
     
     
     document.getElementById("diplomas").innerHTML= diplomas;
     document.getElementById("studyCost").innerHTML= studyCost;
     document.getElementById("money").innerHTML= money;
     document.getElementById("days").innerHTML= days;
     document.getElementById("mealCost").innerHTML= mealCost;
     document.getElementById("meal").innerHTML= meal;
     document.getElementById("job").innerHTML= job;
     document.getElementById("jobCost").innerHTML= jobCost;
     document.getElementById("happy").innerHTML= happy;
     
 }





