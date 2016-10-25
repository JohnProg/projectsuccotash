const uid = () => Math.random().toString(34).slice(2);

export function createLesson(name, type, description) {
  return {
    type: 'CREATE_LESSON',
    payload: {
      id: uid(),
      name: name,
      type: type,
      description: description
    }
  };
}
