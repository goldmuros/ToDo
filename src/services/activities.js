import { db } from "../config/db";

const add = async (name) => {
  const activity = {
    name: name,
    completed: false,
  };

  return await db
    .collection("todos")
    .add(activity)
    .then((data) => {
      return {
        id: data.id,
        ...activity,
      };
    })
    .catch((error) => {
      console.log("Error Add Activity");
      console.log(error);
    });
};

const fetch = async () => {
  return await db
    .collection("todos")
    .get()
    .then((todos) => {
      return todos.docs.map((actvity) => {
        return {
          id: actvity.id,
          name: actvity.data().name,
          completed: actvity.data().completed,
        };
      });
    })
    .catch((error) => {
      console.log("Error Fetch Activity");
      console.log(error);
    });
};

const remove = async (id) => {
  await db.collection('todos').doc(id).delete()
  .catch((error) => {
    console.log('Error Remove Activity')
    console.log(error)
  });
};

const edit = async (activity) => {
  await db.collection('todos').doc(activity.id).update({
      completed: activity.completed
    })
    .catch((error) => {
      console.log('Error Edit Activity')
      console.log(error)
    })
};

export { add, fetch, remove, edit };
