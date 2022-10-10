export const employees = [
      {
          id: 1,
          name: "Chevva Ashish Reddy",
          email: "ashish@gmail.com",
          phone: "8919119191",
          dept: "DSS",
          joined: "29-10-2020",
          isAdmin: 0,   
      },
      {
        id: 10,
        name: "Ash Ketchum",
        email: "ashKetchum@gmail.com",
        phone: "8919119191",
        dept: "Blockchain",
        joined: "29-10-2020",
        isAdmin: 0,   
    },
    {
        id: 2,
        name: "Gary Oak",
        email: "ashish@gmail.com",
        phone: "8919119191",
        dept: "DSS",
        joined: "29-10-2020",
        isAdmin: 0,   
    },
    {
        id: 3,
        name: "Bedre Dhanush",
        email: "ashish@gmail.com",
        phone: "8919119191",
        dept: "DSS",
        joined: "29-10-2020",
        isAdmin: 0,   
    },
    {
      id: 4,
      name: "Gajji Prem Kumar",
      email: "ashish@gmail.com",
      phone: "8919119191",
      dept: "DSS",
      joined: "29-10-2020",
      isAdmin: 0,   
  }
]

export const empData = [[40, 10, 30],
                  [50, 20, 10],
                  [50, 20, 10],
                  [50, 20, 10],
                  [10, 20, 10],
                  [40, 20, 10],
                  [50, 10, 10],
                ]

export const data1 = {
  labels: ['Work', 'Meet', 'Break'],
  datasets: [
    {
      label: 'Work day spent in minutes',
      data: empData[0],
      backgroundColor: [
        '#ff6666',
        '#ffe338',
        '90e0ef'
      ],
      borderColor: [
        'red',
        'black',
        'darkblue'
      ],
      borderWidth: 1,
    },
  ],
};

export const data2 = {
  labels: ['Work', 'Meet', 'Break'],
  datasets: [
    {
      label: 'Work day spent in minutes',
      data: empData[1],
      backgroundColor: [
        '#ff6666',
        '#ffe338',
        '90e0ef'
      ],
      borderColor: [
        'red',
        'black',
        'darkblue'
      ],
      borderWidth: 1,
    },
  ],
};

// export const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };


export const tasks = [
  {
    taskType: "Work",
    startTime: "8:30",
    timeTaken: "90",
    taskDesc: "Worked on frontend"
  },

  {
    taskType: "Break",
    startTime: "10:00",
    timeTaken: "10",
    taskDesc: "Took a coffee break"
  },

  {
    taskType: "Work",
    startTime: "10:10",
    timeTaken: "80",
    taskDesc: "Worked on frontend"
  },

  {
    taskType: "Meet",
    startTime: "11:30",
    timeTaken: "30",
    taskDesc: "Meeting with the client"
  }
]