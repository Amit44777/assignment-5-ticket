
function handleButton(event){
    event.classList.remove("bg-gray-200");
    event.classList.add('bg-green-500'); 
    event.style.color = 'white';

    const homeScreen = document.getElementById("home-screen");
    homeScreen.classList.add("hidden");
    const palyGround = document.getElementById("play-ground");
    palyGround.classList.remove("hidden");

    const selectedContainer = document.getElementById("selected-price");
    const itemName = event.innerText;

    const leftSit = getConvardValue("total-sit");
    if(leftSit + 1 > 4){
        alert("Limit Sesh R Hobe Na..");
        return;
    };

    const minus = getConvardValue("minusTickets");
    const seatsLeft = document.getElementById("minusTickets").innerText = minus - 1;

    const totalSit = getConvardValue("total-sit");
    const sitAddLeft = document.getElementById("total-sit").innerText = totalSit + 1;

    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    div.classList.add("flex");
    div.classList.add("justify-between");

    div.innerText = itemName;
    p1.innerText = "Economoy"
    p2.innerText = 550;

    div.appendChild(p1);
    div.appendChild(p2)
    selectedContainer.appendChild(div);
};



const btnAll = document.getElementsByClassName("btn");

for(const btn of btnAll){
    btn.addEventListener("click", function(event){
        const price = 550;
        totalUpdateCost(price);
        updateGrandTotal();
    })
};

function updateGrandTotal(status){
    const totalCost = getConvardValue("total-cost");
    if(status == undefined){
        document.getElementById("grand-cost").innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById("copon-code").value;
        if(couponCode == "New 15"){
            const discountPrice = totalCost * 0.2;
            document.getElementById("grand-cost").innerText = totalCost - discountPrice;
        }
        else{
            alert("Please enter valid coupon code");
        }
    }
}

// 
function totalUpdateCost(value){
    const totalCost = getConvardValue("total-cost");
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

// 
function getConvardValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice;
}



