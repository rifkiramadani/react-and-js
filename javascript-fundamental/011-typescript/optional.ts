const generateError = (msg?: string) => {
     throw new Error(msg);
}

generateError("A");
generateError();

type User = {
    username: string,
    age: number,
    address?: string,
}

const user: User = {
    username: "rifky",
    age: 17,
}

//type generic
const fetchData = <T>(): T => { 
    return {} as T
}

const userData = fetchData<User>();