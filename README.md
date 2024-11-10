# digiproc

## Getting started

1. Clone the repository to your local machine.
2. Run `npm install` and `npm run dev` from both the `client` and `server` directories.
3. Done! You've now got the server running on port 5050 and the client can be accessed from `http://localhost:3000/`.

## Choices and trade-offs

Since NextJS and ExpressJS are the technologies I am most comfortable with I decided to build the project using those. I had never previously used ExpressJS in combination with Typescript but it was straightforward and did not cause any issues.

One of the main features of NextJS is that it offers a serverless setup, but to better emulate working conditions I decided to stick with a separate backend.

Because of the time constraint and to not reinvent the wheel, I used MaterialUI's Rating component in the product cards as well as react-toastify to notify the user of when an item is added to the cart.

When creating a NextJS app, you are asked if you'd like to use Tailwind, to which I answered yes. I did not realise that it would hinder me more than it aided me; I had to use a custom font, custom colours and custom spacings to match the design specification as closely as possible. Because of this, if I had to redo it, I would have preferred to have written my own CSS.
