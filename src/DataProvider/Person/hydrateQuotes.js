import getAllWithCount from "../Quote/getAllWithCount";

const hydrateQuotes = (personList) => {
    getAllWithCount(personList.length)
        .then(response => {
            response.data.forEach((item, key) => {
                personList[key].quote = item.quote;
            });
        });
};

export default hydrateQuotes;