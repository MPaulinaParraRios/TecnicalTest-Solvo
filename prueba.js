namelist = [
    {
      name:"Violet",
      lastname:"Cannon"
    },
    {
      name:"Nancy",
      lastname:"Rice"
    },
    {
      name:"Mcneil",
      lastname:"Mcgee"
    },
    {
      name:"Greta",
      lastname:"Mccal"
    },
    {
      name:"Loretta",
      lastname:"Dotson"
    }
    ];
    
    const fullnames = [];
    const size = namelist.length;
    
    for (let i = 0; i < size; i++){
      let element = `${namelist[i].name} ${namelist[i].lastname}`;
      fullnames.push(element);
    }
    
    console.log(fullnames);