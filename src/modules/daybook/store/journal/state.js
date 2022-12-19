export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Incididunt officia irure cupidatat ea pariatur enim Lorem pariatur ex qui in ipsum.',
      picture: null,
    },
    {
      id: new Date().getTime() + 1,
      date: new Date().toDateString(),
      text: 'Incididunt officia irure cupidatat ea pariatur enim Lorem pariatur ex qui in ipsum.',
      picture: null,
    },
    {
      id: new Date().getTime() + 2,
      date: new Date().toDateString(),
      text: 'Incididunt officia irure cupidatat ea pariatur enim Lorem pariatur ex qui in ipsum.',
      picture: null,
    },
  ]
})