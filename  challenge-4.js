const users = [];

function Person(id, firstName) {
  return {
    id,
    firstName,
  };
}

function showAllUsers() {
  if (users.length === 0) {
    console.log("No users!");
  } else {
    for (const user of users) {
      console.log(user.firstName + "'s id is: " + user.id);
    }
  }
}

function getUserById(id) {
  for (const user of users) {
    if (user.id === id) {
      console.log("id " + user.id + " is for " + user.firstName);
      return;
    }
  }
  console.log("user not found");
}

function createUser(id, firstName) {
  users.push(new Person(id, firstName));
  console.log(firstName + " is created!");
}

function editUser(id, firstName) {
  for (const user of users) {
    if (user.id === id) {
      user.firstName = firstName;
      console.log("id " + id + " is edited!");
      return;
    }
  }
  console.log(`id ${id} not found!`);
}

// // test case

createUser("1", "Mario");
createUser("2", "Emily");
createUser("3", "Sarah");
createUser("4", "David");
// showAllUsers();

getUserById("1");
getUserById("10");

editUser("1", "fateme");
editUser("5", "fateme");
showAllUsers();
