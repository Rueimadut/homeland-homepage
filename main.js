document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.innerText = 'w3schools';
  new_a.setAttribute("href", 'https://www.w3schools.com/');

  new_li.appendChild(new_a);
  let new_li2 = document.createElement('li');
  let new_a2 = document.createElement('a');
  new_a2.innerText = 'Code Your Future';
  new_a2.setAttribute("href", 'https://codeyourfuture.io/');

  new_li2.appendChild(new_a2);

  new_li.appendChild(new_li2);
  let new_li3 = document.createElement('li');
  let new_a3 = document.createElement('a');
  new_a3.innerText = 'Code Academy';
  new_a3.setAttribute("href", 'https://www.codecademy.com/');

  new_li3.appendChild(new_a3);

  new_li.appendChild(new_li3);

  element_list.appendChild(new_li);

});