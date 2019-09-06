# Gatsby Theme Like Button

A small gatsby theme which helps to add a like button to any post or page on the website.

## Details

This is built using monorepo.

- `gatsby-theme-like-post`: a main theme where we keep the functionality of the button
- `site`: contains a dummy site to test the theme

Currently when user clicks on the button, it stores the given post id into the localstorage with boolean flag about the liked state.

## How to run?

- Run `yarn` to install all the required packages
- Run `yarn workspace gatsby-theme-like-post develop` to test whether everything works without any compile issue
- Kill the process
- Run `yarn workspace site develop` to launch our dummy site

Currently, the dummy site contains 2 pages `index` and `about` with the `LikeButton` component added from the theme.

## Roadmap:

- [ ] Connect with firebase
- [ ] Allow users to customize the style of button
- [ ] Publish to npm
