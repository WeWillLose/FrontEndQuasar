export default {
  editedIndex: -1,
  editedItem: {
    name: "",
    role: "",
    score: 0,
  },
  defaultItem: {
    name: "",
    role: "",
    score: 0,
  },
  columns: [
    {
      name: "name",
      label: "Название мероприятия",
      align: "center",
      field:"institutions"
    },
    {
      name: "role",
      label: "Роль преподавателя (помощь в организации, подготовка фрагмента мероприятия, организация мероприятия в целом)",
      align: "center",
      field:"students"
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
      name: "",
      role: "",
      score: 0,
    },
  ]
};
