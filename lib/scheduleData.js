export const scheduleData = [
  {
    blockNumber: 1,
    time: "6:00 AM",
    taskItemList: [
      { name: "Wake up", isImpotant: true, isMust: false, isIgnorable: false },
      {
        name: "Breakfast",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      { name: "Exercise", isImpotant: true, isMust: false, isIgnorable: false },
      {
        name: "Go for a run",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
    ],
  },
  {
    blockNumber: 2,
    time: "7:00 AM",
    taskItemList: [
      {
        name: "Check emails",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
      {
        name: "Plan daily tasks",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
    ],
    isExceptionDate: true,
    exceptionalTask: [
      {
        name: "Respond to urgent emails",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Do the fun thing",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
    ],
  },
  {
    blockNumber: 3,
    time: "8:00 AM",
    taskItemList: [
      {
        name: "Work on project",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Meeting with team",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Follow-up with client",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
    ],
  },
  {
    blockNumber: 4,
    time: "9:00 AM",
    taskItemList: [
      {
        name: "Complete report",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Review code",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Check project progress",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 5,
    time: "10:00 AM",
    taskItemList: [
      {
        name: "Client call",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Team review",
        isImpotant: true,
        isMust: false,
        isIgnorable: false,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Technical training",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 6,
    time: "11:00 AM",
    taskItemList: [
      {
        name: "Documentation",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
      {
        name: "Prepare lunch",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      { name: "Research", isImpotant: true, isMust: false, isIgnorable: true },
    ],
  },
  {
    blockNumber: 7,
    time: "12:00 PM",
    taskItemList: [
      {
        name: "Lunch break",
        isImpotant: false,
        isMust: true,
        isIgnorable: true,
      },
      { name: "Relax", isImpotant: false, isMust: true, isIgnorable: true },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Stretching",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 8,
    time: "1:00 PM",
    taskItemList: [
      {
        name: "Check messages",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
      {
        name: "Update task list",
        isImpotant: true,
        isMust: true,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Plan for next project",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 9,
    time: "2:00 PM",
    taskItemList: [
      {
        name: "Development tasks",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Debug issues",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Brainstorm ideas",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 10,
    time: "3:00 PM",
    taskItemList: [
      {
        name: "Review meeting",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      {
        name: "Project update",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Handle support tickets",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 11,
    time: "4:00 PM",
    taskItemList: [
      {
        name: "Complete assignments",
        isImpotant: true,
        isMust: true,
        isIgnorable: false,
      },
      { name: "Team sync", isImpotant: true, isMust: false, isIgnorable: true },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Review logs",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 12,
    time: "5:00 PM",
    taskItemList: [
      {
        name: "Cleanup tasks",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
      {
        name: "Respond to emails",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Follow-up on pending items",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 13,
    time: "6:00 PM",
    taskItemList: [
      {
        name: "Evening workout",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
      {
        name: "Prepare dinner",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Grocery shopping",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 14,
    time: "7:00 PM",
    taskItemList: [
      { name: "Dinner", isImpotant: false, isMust: true, isIgnorable: true },
      {
        name: "Family time",
        isImpotant: true,
        isMust: true,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Watch a movie",
        isImpotant: false,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
  {
    blockNumber: 15,
    time: "8:00 PM",
    taskItemList: [
      {
        name: "Read a book",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
      {
        name: "Reflect on the day",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
    isExceptionDate: false,
    exceptionalTask: [
      {
        name: "Meditation",
        isImpotant: true,
        isMust: false,
        isIgnorable: true,
      },
    ],
  },
];
