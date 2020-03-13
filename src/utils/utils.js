export const sortAsc = arr => {
  arr.sort((a, b) => {
    debugger;
    const nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.first.toUpperCase(); // ignore upper and lowercase

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

export const sortDesc = arr => {
  arr.sort((a, b) => {
    debugger;
    const nameA = a.name.first.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.first.toUpperCase(); // ignore upper and lowercase

    if (nameA > nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};

export const saveInLocalStorage = users => {
  if (users) {
    localStorage.setItem('users', JSON.stringify(users));
  }
};
