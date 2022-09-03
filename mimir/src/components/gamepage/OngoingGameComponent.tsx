import styled from "styled-components";

export const OngoingGameComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;
  `;
  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 20px 20px;
  `;

  const Card = styled.div`
    min-height: 400px;
    min-width: 400px;
    border: solid black 1px;
    vertical-align: middle;
  `;

  const Word = styled.div`
    padding-top: 50%;
    margin: 0;
  `;

  return (
    <>
      <Container>
        <div>
          <h2>Progess 33%</h2>
        </div>
        <div>
          <Button>Delete Game</Button>
        </div>
      </Container>
      <Content>
        <Card>
          <Word>Gegenwart</Word>
        </Card>
      </Content>
      <Content>
        <div>
          <input type="text" />
          <Button>Submit</Button>
        </div>
      </Content>
    </>
  );
};
