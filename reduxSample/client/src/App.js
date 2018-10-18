import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCards } from './actions';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, ButtonGroup, Button, Badge, DropdownButton  } from 'react-bootstrap';
import './App.css';

function getColor(stat){
  if(stat === 'queue'){
    return 'salmon';
  }
  else if(stat === 'progress'){
    return 'orange';
  }
  else{
    return 'cornflowerblue'
  }
}

const Card = ({prop}) => {
  let color = getColor(prop.status);
  return(
    <div className="card" style={{ backgroundColor: color }}>
      <p>{prop.task}</p>
      <p>{prop.assigned}</p>
      <p>Comments <Badge>{prop.comments}</Badge></p>
      <ButtonGroup>
        <DropdownButton id={prop.id} title={"Move"}>
          <MenuItem eventKey="1">Progress</MenuItem>
          <MenuItem eventKey="2">Done</MenuItem>
        </DropdownButton>
        <Button>Edit</Button>
        <Button>Del</Button>
      </ButtonGroup>
    </div>
  )
}

const Header = () => {
  return(<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Kanban</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">
      Link
    </NavItem>
    <NavItem eventKey={2} href="#">
      Link
    </NavItem>
    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>)
}


class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      cards: [1,1]
    }
  }

  componentDidMount(){
    this.props.loadCards();
  }






  render() {
    return (
      <div>
        <Header />
        <div className="App">
            <div className="board">
              <h1>Queue</h1>
                {this.props.cards.filter(card => {
                  return card.status === 'queue';
                }).map(card => <Card key={card.id} prop={card}/>)}
            </div>
            <div className="board">
              <h1>Progress</h1>
                {this.props.cards.filter(card => {
                return card.status === 'progress';
                }).map(card => <Card key={card.id} prop={card}/>)}

            </div>
            <div className="board">
              <h1>Done</h1>
                {this.props.cards.filter(card => {
                return card.status === 'done';
                }).map(card => <Card key={card.id} prop={card}/>)}
            </div>


        </div>
      </div>
    );
  }
}

const mapStateToProps = (cards) => {
  return {
    cards: cards
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  {loadCards}
)(App)

export default ConnectedApp;
