This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to Run Project
1. Clone project
2. Run `npm install` in command prompt from within project directory to install project dependencies.
3. Run `npm start` in command prompt from within project directory to run app in dev mode
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Thought Process

### File Structure
Since this was a simple project, I opted to use a simple file structure. If there were more components then I would have used
more folders within `components`  grouped by specific feature. I opted not to use SASS because of the minimalistic approach
to this challenge. If project was more elaborate then I would have used the help of `node-sass` and had multiple `.scss` files
relating to their respective components.

### Explanation
1. Used Redux to store the books and cities datasets via their respective reducers.
2. Used the `Search` component's local state to store user input.
3. Once three characters were input, auto complete suggestions were populated within `Search` local component state
   - Redux store was read to compare user input against store data in order to populate suggestions
4. Suggestions were then displayed in a list under input field with proper CSS rules
5. Added extra features
   - Hovering over suggestion within list would highlight that suggestion
   - Clicking suggestion will populate the input field with that selected suggestion
6. I used Bootstrap v4.3.1 for some styling for the app.