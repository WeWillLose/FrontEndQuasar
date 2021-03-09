export default {
  name:'progress_exam',
    editedIndex:-1,
    editedItem:{
      group: "",
      subject: "",
      amount: 0,
      mark5: 0,
      mark4: 0,
      mark3: 0,
      mark2: 0,
      progress: 0,
      quality: 0,
      unsuccs: "",
    },
    defaultItem: {
      group: "",
      subject: "",
      amount: 0,
      mark5: 0,
      mark4: 0,
      mark3: 0,
      mark2: 0,
      progress: 0,
      quality: 0,
      unsuccs: "",
    },
    columns: [
      {
        name: "group",
        required: true,
        label: "Группа",
        align: "left",
        field:"group"
      },
      {
        name: "subject",
        align: "center",
        label: "Дисциплина",
        field: "subject",
        style:"width:200px"
      },
      {
        name: "amount",
        align: "center",
        label: "Кол-во студентов",
        field: "amount",

      },
      { name: "mark5", label: "Оценок 5", field: "mark5", align: "center",},
      { name: "mark4", label: "Оценок 4", field: "mark4", align: "center",},
      { name: "mark3", label: "Оценок 3", field: "mark3", align: "center",},
      { name: "mark2", label: "Оценок 2", field: "mark2", align: "center",},
      {
        name: "progress",
        label: "Успеваемость %",
        field: "progress",
        align: "center",

      },
      {
        name: "quality",
        label: "Качество знаний %",
        field: "quality",
        align: "center",
      },
      {
        name: "unsuccs",
        label: "Неуспевающие студенты",
        field: "unsuccs",
        align: "center",
      },
      {
        name: "actions",
        label: "Actions",
        field: "actions",
        align: "center",
      }
    ],
    rows: [
      {
        group: "2-1 A9",
        subject: "История",
        amount: 24,
        mark5: 9,
        mark4: 11,
        mark3: 3,
        mark2: 0,
        progress: 96,
        quality: 83,
        unsuccs: "Грудинин",
      },
    ]
};
