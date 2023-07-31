const baseUrl = `${process.env.REACT_APP_API_URL}/todos`;

export const loadTodos = () =>  {
    return fetch(baseUrl).then((res) =>res.json());    
}

export const getTodo = async (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}

export const createTodo = async (todo) => {
    const res = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
    });
    return await res.json();
};

export const updateTodo = async (todo) => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
    });
    return await res.json();
};

export const deleteTodo = async (id) => {
    const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
    });
    return await res.json();
};