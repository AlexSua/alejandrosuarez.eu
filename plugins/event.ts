
export class EventBus{
    events: any;
    constructor(){
        this.events = {};
    }

    on(eventName: string | number, fn: any) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    }

    off(eventName: string | number, fn: any) {
        if (this.events[eventName]) {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] === fn) {
                    this.events[eventName].splice(i, 1);
                    break;
                }
            };
        }
    }
    off_all(eventName: string | number) {
        if (this.events[eventName]) {
            this.events[eventName] = [];
        }
    }

    emit(eventName: string | number, data: any) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(function(fn: (arg0: any) => void) {
                fn(data);
            });
        }
    }
}

// export default {
//     install: (app: any, options: any) => {
//         const $bus = new EventBus();
//         app.config.globalProperties.$bus = $bus
//         app.provide("bus", $bus);
//     }
// };

export default defineNuxtPlugin(()=>{
    const $bus = new EventBus();
    return {
        provide:{
            bus: $bus
        }
    }
})