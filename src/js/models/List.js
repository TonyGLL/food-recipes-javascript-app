import uniqid from 'uniqid';

export default class List {

    constructor(){

        this.items = [];
    };

    addItem(count, unit, ingredient){

        const item = {

            id: uniqid(),
            count,
            unit,
            ingredient
        };

        this.items.push(item);
        return item;
    };

    deleteItem(id){

        // [2, 8, 4] splice(1, 1) --> returns 8, original array is [2, 4]
        // [2, 8, 4] slice(1, 1) --> returns 8, original array is [2, 4]
        const index = this.items.findIndex(el => el.id === id);

        this.items.splice(index, 1);
    };

    updateCount(id, newCount){

        this.items.find(el => el.id === id).count = newCount;
    };
};
