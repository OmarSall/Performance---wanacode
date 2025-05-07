// Exercise: rewrite the checkForDuplicateNames function to use a single for loop.

function checkForDuplicateNames(usersArray) {
    const usedNames = {};
  
    for (let i = 0; i < usersArray.length; i++) {
      const user = usersArray[i];
      
      usedNames[user.name] = usedNames[user.name] || 0;
      usedNames[user.name] += 1;
    }
  
    console.log(usedNames);
    /*
    {
      John: 2,
      Amy: 1,
      Olivia: 1
    }
    */
  
    for (let i = 0; i < usersArray.length; i++) {
      const user = usersArray[i];
  
      if (usedNames[user.name] > 1) {
        return true;
      }
    }
  
    return false;
  }

  // -------------------------------------------------------

  function checkForDuplicateNames(usersArray) {
    const seenNames = new Set();

    for (let i = 0; i < usersArray.length; i++) {
        const name = usersArray[i].name;

        if (seenNames.has(name)) {
            return true;
        }

        seenNames.add(name);
    }
    return false;
  }