import { createApp } from 'vue';
import {Notify} from "#components";

let instance: any;

export default defineNuxtPlugin(() => {
    const notify = (message: string, type = 'info', duration = 3000, position = 'rightBottom') => {
        if (!instance) {
            const app = createApp(Notify);
            const container = document.createElement('div');
            document.body.appendChild(container);
            instance = app.mount(container);
        }
        instance.show(message, type, duration, position);
    };

    return {
        provide: {
            notify,
        },
    };
});
