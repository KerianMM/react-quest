import Axios from 'axios';

const getAllWithCount = (count) => {
    return Axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`, {
        params: {
            count: count
        }
    });
};

export default getAllWithCount;