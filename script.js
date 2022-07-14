
    var diplomas=0;
    var studyCost=25000;
    var days=0;
    var mealCost=150;
    var meal=0;
    var money = 0;
    var amount =1;
    var jobCost = 30;
    var job = 0;
    var happy = 100;
    var Interval;
    var speed=0;
    var jobpay=80;
    var carexpense=300;
    var rentexpense=800;
    var lifeinsurance=120;
    var streaming=200;
    var gas=200;
    var powerwater=270;
    var food=400;
    var loan=0;

    var stock1=0;
    var stock2=0;
    var stock3=0;
    var stock4=0;
    var stockCost1=50;
    var stockCost2=50;
    var stockCost3=50;
    var stockCost4=50;

    var factory=0;
    
    var factorycost=5000000;
    var housecost=700000;
    var house=0;
    var revenue=0;
    
    
    function speedup(){
    clearInterval(Interval);
    
    speed=speed+1;
    
    Interval = setInterval(valuecalc, 1000/speed);
    document.getElementById("speed").innerHTML= speed;
};



function stopspeed() {
    clearInterval(Interval);
    speed=0;
    document.getElementById("speed").innerHTML= speed;
};


window.addEventListener('load', start);




    function getMeal(){
        if (money>mealCost){
            happy=happy+10;
            money=money-mealCost;
            meal=meal+1;
            mealCost = Math.round(mealCost*1.15);
            food=food+250;
            document.getElementById("meal").innerHTML= meal;
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("food").innerHTML= food;
                        document.getElementById("happy").innerHTML= happy;
                        document.getElementById("mealCost").innerHTML= mealCost;
                        document.getElementById("log").innerHTML ="You got a meal plan. you now have " + meal;


        }
        else{
            document.getElementById("log").innerHTML ="You need more money";
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
                        document.getElementById("stock1").innerHTML= stock1;
                        document.getElementById("stockCost1").innerHTML= stockCost1;
                        document.getElementById("log").innerHTML ="You bought some MacroSoft. You now have "+ stock1;
                        


        }
        else{
            document.getElementById("log").innerHTML ="You need more money to buy stock";
        }


    }

    function buyStock150(){
        if (money>stockCost1*50){
            
            money=money-stockCost1*50;
            stock1=stock1+50;
           
        
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("stock1").innerHTML= stock1;
                        document.getElementById("stockCost1").innerHTML= stockCost1;
                        document.getElementById("log").innerHTML ="You bought 50 MacroSoft. You now have "+ stock1;
                        


        }
        else{
            document.getElementById("log").innerHTML ="You need more money to buy 50 MacroSoft";
        }


    }

    function sellStock1(){
        if (stock1>0){
            
            money=money+stockCost1*stock1;
            stock1=stock1-stock1;
            
           
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("stock1").innerHTML= stock1;
                        document.getElementById("stockCost1").innerHTML= stockCost1;
                        document.getElementById("log").innerHTML ="you sell your stock for " + stockCost1 + " that's decent I guess";


        }
        else{
            document.getElementById("log").innerHTML ="you need to buy some stock before you sell it";
        }


    }

    function getjob() {
                    if (happy >= jobCost) {
                        
                        happy= happy-jobCost;
                        job = job + 1;
                        jobCost = Math.round(jobCost * 1.15);
                        document.getElementById("log").innerHTML ="You got a job. congrats. I guess. You have " + job + " job(s). you are less happy";
                        document.getElementById("happy").innerHTML= happy;
                        document.getElementById("money").innerHTML= money;
                        document.getElementById("jobCost").innerHTML= jobCost;
                        document.getElementById("job").innerHTML= job;
                            }
                            else{
                                document.getElementById("log").innerHTML ="You need more happiness";
                            }
                        }

    function buyfactory() {
        if (money>factorycost){
            money=money-factorycost;
            factory=factory+1;
            revenue=revenue+30000;
            factorycost=factorycost*1.5;
            rentexpense=rentexpense+700;
            
            document.getElementById("money").innerHTML= money;
            document.getElementById("factorycost").innerHTML= factorycost;
            document.getElementById("factory").innerHTML= factory;
            document.getElementById("rentexpense").innerHTML= rentexpense;
            document.getElementById("revenue").innerHTML= revenue;
            document.getElementById("log").innerHTML ="You bought a factory now you have " + factory + " factory(ies)";
           
    }
 
    else {
        document.getElementById("log").innerHTML ="You need more money. youre missing" + (factorycost-money) + "dollars";
    }}

    function buyhouse(){
        if (money>housecost){
            money=money-housecost;
            house=house+1;
            revenue=revenue+6000;
            housecost=housecost*1.5;
            rentexpense=rentexpense+500;
            document.getElementById("log").innerHTML ="You bought a house now you have" + house + "house(es)";
            document.getElementById("money").innerHTML= money;
            document.getElementById("housecost").innerHTML= housecost;
            document.getElementById("house").innerHTML= house;
            document.getElementById("rentexpense").innerHTML= rentexpense;
            document.getElementById("revenue").innerHTML= revenue;
           
    }
 
    else {
        document.getElementById("log").innerHTML ="You need more money. youre missing" + housecost-money + "dollars";
    }}

    function addToScore(amount)
            {
            money = money + amount;
            document.getElementById("money").innerHTML=money;
            }



    function getloan()
    {                       
        if (days>200 && loan<5){

                money=money+10000;
                loan=loan+1;
                powerwater=powerwater+1000;
                    document.getElementById("powerwater").innerHTML= powerwater;
                    document.getElementById("money").innerHTML= money;
                    document.getElementById("loan").innerHTML= loan;
                    document.getElementById("days").innerHTML= days;
                    document.getElementById("log").innerHTML ="Here's 10k. Youll pay 1000 a month until you pay it off. don't make me find you";

        }
        if (days<200){
            document.getElementById("log").innerHTML ="Cant trust ya kid. You on day " + days + " You need to have a job for 200 days to get a loan";
        }
        if (loan>4) {
            document.getElementById("log").innerHTML ="Get outta here. You already have " + loan + " loans pay them off first!";

        }

        
        
    }



    function payloan()
    {
        if (loan>0){

                money=money-10000;
                loan=loan-1;
                powerwater=powerwater-1000;
                    document.getElementById("powerwater").innerHTML= powerwater;
                    document.getElementById("money").innerHTML= money;
                    document.getElementById("loan").innerHTML= loan;
                    document.getElementById("days").innerHTML= days;
                    document.getElementById("log").innerHTML ="You paid off your loan. you get to keep your fingers. this time...";

        }
        else{
            document.getElementById("log").innerHTML ="get outta here kid. you don't have a loan with me";
        }
    }




    function study()
    {
        if (money>studyCost){
        
        jobpay=jobpay*1.2;
        money=money-studyCost;
        studyCost= Math.round(studyCost*1.2);
        diplomas=diplomas+1;
        document.getElementById("log").innerHTML ="You studied. Earn 20% more from your job that's $" + jobpay;
        document.getElementById("money").innerHTML= money;
        document.getElementById("studyCost").innerHTML= studyCost;
        document.getElementById("diplomas").innerHTML= diplomas;
        document.getElementById("jobpay");
    }
    else{
        document.getElementById("log").innerHTML ="You need more money";
    }

    }

    function valuecalc()
            {
                    
                var stockspricemulti= Math.floor(Math.random()*100+1);    
            money = Math.round(money +  job * jobpay - (meal*10));
            
            
            happy = Math.round(happy - job*0.08 + meal*0.3);
            days=days+1;
            document.getElementById("log").innerHTML ="a day passed you earned "+Math.round((job * jobpay - (meal*10)));
            document.getElementById("money").innerHTML= money;
            document.getElementById("happy").innerHTML= happy;
            document.getElementById("days").innerHTML= days;
            document.getElementById("timer");
            document.getElementById("jobCost").innerHTML= jobCost;
            document.getElementById("job").innerHTML= job;
            document.getElementById("meal").innerHTML= meal;
            document.getElementById("stockCost1").innerHTML= stockCost1;
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
                stockCost1= stockspricemulti;
                document.getElementById("log").innerHTML ="it's a new month. stock prices have changed and you pay off your bills of "
                +(carexpense+rentexpense+lifeinsurance+streaming+gas+powerwater+food);

            }
            if (days % 14==0 && revenue>0){
                money=money+job+revenue/2
                document.getElementById("log").innerHTML ="2 weeks passed you earn revenue from your properties of $" + revenue;

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
     
     Swal.fire({
            title: 'You wake up it is your first day of adult life.',
            text: 'your parents kicked you out and you get to play the game of life. Click on yourself to go to the next day, but dont let yourself run out of money',  
            imageUrl: 'images/avatar.png',
            imageWidth: 100,
            imageHeight: 100,
            imageAlt: 'Custom image',
            confirmButtonText: 'Cool',});

    document.getElementById("log").innerHTML ="click on yourself to have a day pass. Get a job first! "
     days=0;
     mealCost=250;
     meal=0;
     money = 500;
     amount =1;
     jobCost = 40;
     job = 0;
     jobpay=50;
     happy = 100;
     studyCost=25000;
     diplomas=0;
     factory=0;
     loan= 0;
     factorycost=5000000;
     housecost=700000;
     house=0;
     revenue=0;

     document.getElementById("loan").innerHTML= loan;
     document.getElementById("factory").innerHTML= factory;
     document.getElementById("factorycost").innerHTML= factorycost;
     document.getElementById("housecost").innerHTML= housecost;
     document.getElementById("house").innerHTML= house;
     document.getElementById("revenue").innerHTML= revenue;
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
/*
 function createnumber(event){
    let clicker = document.getElementById("clicker");
    let element= document.createElement("div");
    element.textContent= "+" + Math.round( job * jobpay - (meal*10));
    element.classList.add("number","unselectable");
    clicker.appendChild(element);

    let clickerOFFset = clicker.getBoundingClientRect();
    let position={
        x:event.pageX-clickerOFFset.left,
        y
    }

}


*/

