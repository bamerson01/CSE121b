/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Brady Amerson";
let currentYear = 2023;
let profilePicture = 'images/us.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
currentYear.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favFood = ['Pizza', 'Tacos', 'Sushi', 'Ice Cream'];
const favFoodTwo = 'Pie'
foodElement.innerHTML += `<br>${favFood}`;
favFood.push(favFoodTwo);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift(0);
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop(0);
foodElement.innerHTML += `<br>${favFood}`;





