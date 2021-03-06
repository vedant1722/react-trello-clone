# Trello Clone on React

## Folder Structure

Folder Structure - Domain Driven Design pattern. Every module has its folder in `app/domains` folder. The modules implemented are Board, List, and Card. Each domain folder has the following files -
  - **index.js** - interface to the domain for cleaner imports.
  - **container.js** - Container Component for the domain, has the logic.
  - **presentation.js** - Presentational Component, not concerned with any type of data logic. Receives data & other methods in props to render the UI and bind the events to their handlers.
  - **reducer.js** - Redux reducer for the domain.
  - **actions.js** - Has action creators for the domain.
  - **selectors.js** - Selector implementation for the Store.
  - **style.css** - Has the style for the main domain component. I couldn't find much time to implement scoped CSS functionality but I think it should be a must for a real project. For now, it's just normal CSS written with care to avoid conflict.
  - **api.js** - This is NOT included for the fact that there isn't any API implementation. But this can be implemented in the same folder if there was an API to integrate.

## Redux Stores Structure -
#### Board -
```sh
{
    all: {
        1: {
            id: 1,
            boardName: 'Board One'
        },
        2: {
            id: 2,
            boardName: 'Board two'
        }
        ...
    }
}
```

#### List -
```sh
{
    all: {
        1: {
            id: 1,
            boardId: 1,
            listName: 'List for Board One',
        },
        2: {
            id: 2,
            boardId: 2,
            listName: 'List for Board Two'
        },
        3: {
            id: 3,
            boardId: 2,
            listName: 'Another List for Board Two'
        }
    }
    ....
}
```

#### Card -
```sh
{
    all: {
        1: {
            id: 1,
            listId: 1,
            body: 'Card for List One',
        },
        2: {
            id: 2,
            listId: 1,
            body: 'Another Card for List One'
        },
        3: {
            id: 3,
            listId: 3,
            listName: 'Card for List Three'
        }
    }
    ....
}
```
