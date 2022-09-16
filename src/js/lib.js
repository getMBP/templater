export function cL() {
    console.log('start');
}


function createNav() {
    const container = document.createElement('div');
}



const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return {
        max: max,
        min: min,
        sum: sum,
        avg: avg
    }
}
// const reviews = [4.5,5,6,3,12,8];
// const stats = getStats(reviews);
// console.log(stats);







/**UI Classes  */


/* 
Tooltip Class for creating Tooltip
*/
class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    
    init() {
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);
        
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });
        
        this.element.addEventListener('mouseleave', () => {
        tip.classList.remove('active');
    });
}
}


/* 
Dropdown class for creating dropddowns
*/
class Dropdown {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.trigger');
        this.content = container.querySelector('.content');
    }
    init() {
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        })
    }
}

export {Dropdown as default};




