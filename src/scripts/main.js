'use strict';

// write code here
const PeopleList = document.querySelector('ul');

const sortList = (list) => {
  const soretedList = list.sort((a, b) => {
    const salaryA = Number(a.salary.replace(/\$|,/g, ''));
    const salaryB = Number(b.salary.replace(/\$|,/g, ''));

    return salaryB - salaryA;
  });

  PeopleList.innerHTML = '';

  for (let i = 0; i < soretedList.length; i++) {
    const li = document.createElement('li');

    li.textContent = `${soretedList[i].name}`;
    li.dataset.position = `${soretedList[i].position}`;
    li.dataset.salary = `${soretedList[i].salary}`;
    li.dataset.age = `${soretedList[i].age}`;

    PeopleList.append(li);
  }

  return PeopleList;
};
const getEmployees = (list) => {
  const employees = [];

  for (let i = 0; i < list.children.length; i++) {
    const employee = {
      name: list.children[i].textContent.trim(),
      position: list.children[i].dataset.position,
      salary: list.children[i].dataset.salary,
      age: list.children[i].dataset.age,
    };

    employees.push(employee);
  }

  return employees;
};

const employeesList = getEmployees(PeopleList);

sortList(employeesList);
