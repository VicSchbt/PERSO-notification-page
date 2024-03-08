# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/screenshots/Screenshot-mobile.png)
![](./assets/screenshots/Screenshot-desktop.png)

### Links

- Solution URL: [Link](https://www.frontendmentor.io/solutions/notification-page-with-svelte-ifU0swWCrN)
- Live Site URL: [Link](https://vicschbt.github.io/PERSO-notification-page/)

## My process

1. Initialize the svelte project
2. Create the layout
3. Create the read notification part
4. Do the desktop layout

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- SCSS
- TypeScript
- Svelte

### What I learned

Easy trick to have clearer imports.

To see how you can add code snippets, see below:

```js
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'$components/*': './src/components/*',
			'$utils/*': './src/utils/*',
			'$style/*': './src/style/*',
			'$type/*': './src/type/*'
		}
	},
	preprocess: sveltePreprocess()
};
```

### Continued development

I would like to use this project to learn testing on web projects.

### Useful resources

- [Add Sass to a Svelte project](https://dev.to/mefaba/how-to-use-scss-with-svelte-4c6o) - This helped me for use SASS in this project.

## Author

- Frontend Mentor - [@VicSchbt](https://www.frontendmentor.io/profile/VicSchbt)
- LinkedIn - [Victoire Schubert](www.linkedin.com/in/victoire-schubert)
