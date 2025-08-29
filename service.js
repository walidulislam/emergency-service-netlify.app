const serviceData = [];
// function to get imput number value
function getInputValueNumber(id) {
  const reusableNum = parseInt(document.getElementById(id).value);
  return reusableNum;
}
// function to get imput value
function getInputValue(id) {
  const reusableInt = document.getElementById(id).value;
  return reusableInt;
}
// function to get inner text
function getInnerText(id) {
  const reusableText = parseInt(document.getElementById(id).innerText);
  return reusableText;
}
// function to get inner text heart Value
function setInnerTextHeart(value) {
  const heartElemant = (document.getElementById("heart-count").innerText =
    value);
  return heartElemant;
}
// function to get inner text coin Value
function setInnerTextCoin(value) {
  const coinElemant = (document.getElementById("coin-count").innerText = value);
  return coinElemant;
}
// function to get inner text copy Value
function setInnerTextCopy(value) {
  const copyElemant = (document.getElementById("copy-count").innerText = value);
  return copyElemant;
}

// Heart icon click feture..
const icnSelect = document.querySelectorAll(".fa-heart");
for (const icn of icnSelect) {
  icn.addEventListener("click", function () {
    const heartNum = getInnerText("heart-count");
    const heartNumAdd = heartNum + 1;
    setInnerTextHeart(heartNumAdd);
  });
}
// Call button feture..
const callBtnSelect = document.querySelectorAll(".call-btn");
for (const call of callBtnSelect) {
  call.addEventListener("click", function () {
    const coinNum = getInnerText("coin-count");
    const coinNumCount = coinNum - 20;
    if (coinNumCount < 0) {
      alert("You don't have enough coins!");
      return;
    }
    if (coinNumCount < 0) {
      coinNumCount = 0;
    }

    const card = call.parentNode.parentNode;
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

    setInnerTextCoin(coinNumCount);

    const data = {
      name: serviceName,
      num: serviceNumber,
      date: new Date().toLocaleTimeString(),
    };

    // History Selection ......
    serviceData.push(data);
    const historyConteiner = document.getElementById("history-card-parent");
    const div = document.createElement("div");
    div.innerHTML = `
            <div class="bg-[#FAFAFA] flex justify-between items-center gap-4  p-4 mt-2 rounded-lg ">
                <div>
                <h1 class="inter-font text-[18px] font-semibold">${data.name}</h1>
                <p class="hind-madurai-font text-[18px] font-normal text-[#5C5C5C]">${data.num}</p>
                </div>
                <span class="hind-madurai-font text-[18px] font-normal text-nowrap">${data.date}</span>
            </div>
            `;
    historyConteiner.appendChild(div);
  });
}
// History clear button feture...
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("history-card-parent").innerHTML = "";
});
// Copy button feture...
const copyBtnSelect = document.querySelectorAll(".copy-btn");
for (const copy of copyBtnSelect) {
  copy.addEventListener("click", function () {
    const copyNum = getInnerText("copy-count");
    const copyNumAdd = copyNum + 1;

    const card = copy.parentNode.parentNode;
    const serviceNumber = card.querySelector(".service-number").innerText;
    navigator.clipboard.writeText(serviceNumber);

    alert(`📋 ${serviceNumber} Number has been copied to clipboard...`);
    setInnerTextCopy(copyNumAdd);
  });
}
