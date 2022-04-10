import App from './App.svelte';

let comments = document.getElementById('comments');

const app = new App({
	target: comments,
});

export default app;