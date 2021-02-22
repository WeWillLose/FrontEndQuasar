export default {
  editedIndex: -1,
  editedItem: {
    namecontest: "",
    level: "",
    result: "",
    score: 0,
  },
  defaultItem: {
    namecontest: "",
    level: "",
    result: "",
    score: 0,
  },
  columns: [
    {
      name: "namecontest",
      label: "Название конкурса, конференции, проекта",
      align: "center",
      field: "namecontest"
    },
    {
      name: "level",
      label: "Уровень",
      align: "center",
      field:"level"
    },
    {
      name: "result",
      label: "Результат",
      align: "center",
      field:"result"
    },
    {
      name: "score",
      align: "center",
      label: "Баллы",
      field: "score",
      style: "width:100px"
    },
  ],
  rows: [
    {
      namecontest: "",
      level: "",
      result: "",
      score: 0,
    },
  ]
};
