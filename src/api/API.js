const availableTimesByDate = {
    '2024-05-25': ['10:00', '11:00', '12:00'],
    '2024-05-26': ['10:00', '11:00', '12:00'],
    '2024-05-27': ['14:00', '15:00', '16:00'],
    '2024-05-28': ['10:00', '11:00', '12:00'],
    '2024-05-29': ['10:00', '11:00', '12:00'],
    '2024-05-30': ['14:00', '15:00', '16:00']
  };


  const fetchAPI = (date) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            if(availableTimesByDate[date]) {
                console.log("In the API avaiable times", date)
                resolve(availableTimesByDate[date])
            }
            else{
                console.log("In the API no times", date)
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