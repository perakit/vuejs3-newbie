import HelloWorld from './HelloWorld.js';
const { createApp } = Vue;
const app = createApp({});

app.component('hello-world', HelloWorld);

app.mount('#app');