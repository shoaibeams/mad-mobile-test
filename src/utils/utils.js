export const sortAsc = arr => {
  arr.sort((a, b) => {
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();

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
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();

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
