const uid = () => Math.random().toString(34).slice(2);

export function createCourse(name, description) {
  return {
    type: 'CREATE_COURSE',
    payload: {
      id: uid(),
      name: name,
      description: description
    }
  };
}
