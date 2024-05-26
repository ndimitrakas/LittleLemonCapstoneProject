const availableTimesByDate = {
    '2024-05-25': ['10:00', '11:00', '12:00'],
    '2024-05-26': ['10:30', '11:30', '12:30'],
    '2024-05-27': ['14:00', '15:00', '16:00'],
    '2024-05-28': ['10:00', '11:00', '12:00'],
    '2024-05-29': ['10:00', '11:00', '12:00'],
    '2024-05-30': ['14:30', '15:30', '16:30']
  };


  const fetchAPI = (date) => {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    console.log("this is the date received before", formattedDate)
    return new Promise((resolve) => {
        setTimeout(() =>{
            if(availableTimesByDate[formattedDate]) {
                console.log("In the API avaiable times", formattedDate)
                resolve(availableTimesByDate[formattedDate])
            }
            else{
                console.log("In the API no times", formattedDate)
                resolve([]);
            }
        } , 1000)
    })
  }

  const submitAPI = (formData) => {
    availableTimesByDate[formData.date] = availableTimesByDate[formData.date].filter(time => time !== formData.time);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formData) {
          resolve(true); // Simulate successful submission
        } else {
          reject(new Error('Form submission failed.'));
        }
      }, 1000); // Simulate API delay
    });
  };

  export{fetchAPI,submitAPI}