const namelist = [
    { name: "Violet", lastname: "Cannon" },
    { name: "Nancy", lastname: "Rice" },
    { name: "Mcneil", lastname: "Mcgee" },
    { name: "Greta", lastname: "Mccal" },
    { name: "Loretta", lastname: "Dotson" }
  ];
  
  const fullnames = [];
  
  namelist.forEach(person => {
    const fullname = `${person.name} ${person.lastname}`;
    fullnames.push(fullname);
  });
  
  console.log(fullnames);
  