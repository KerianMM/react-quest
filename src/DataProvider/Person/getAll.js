import Person from "../../Model/Person";
import hydrateQuotes from "./hydrateQuotes";

const getAll = () => {
    let contacts = [
        new Person('Kérian', 'https://www.abcdrduson.com/wp-content/uploads/2015/05/alk-site.jpg?x45032', true),
        new Person('Ben', 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fde471a33e0ee8f472214fb2040c2d6c5.566x566x1.jpg', true),
        new Person('Steven', 'http://www.swampdiggers.com/IMG/png/alk.png', false)
    ];

    hydrateQuotes(contacts);

    return contacts;
};

export default getAll;