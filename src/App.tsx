import React from 'react';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
import Paint from './components/Paint';

const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
  border: 1px solid green;
  box-sizing: border-box;
`;

const Buttons = styled('div')`
  display: flex;
`;

function App() {
  return (
    <Wrapper>
      <Buttons>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="paint">
          <button>paint</button>
        </Link>
      </Buttons>
      <main>
        <Switch>
          <Route exact path="/paint" component={Paint} />
        </Switch>
      </main>
    </Wrapper>
  );
}

export default App;
