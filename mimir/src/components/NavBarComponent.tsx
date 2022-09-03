import styled from "styled-components";

export const NavBarComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
    padding: 0 5px
  `;

  interface ItemProps {
      alignment: string
  }

  const Item = styled.div<ItemProps>`
    margin: 10px;
    text-align: ${p => p.alignment};
    width: 100%;
     justify-content: right;
  `;

  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  return (
    <Container>
      <Item alignment="left">
        <h1>Mimir</h1>
      </Item>
      <Item alignment="center"><Button>New Game</Button></Item>
      <Item alignment="right"><Button>Manage Card</Button></Item>
    </Container>
  );
};
