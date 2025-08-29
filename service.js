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
  const heartElemant = (document.getElementById("coin-count").innerText =
    value);
  return heartElemant;
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