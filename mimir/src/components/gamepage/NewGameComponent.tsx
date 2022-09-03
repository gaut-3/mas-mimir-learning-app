import styled from "styled-components";

export const NewGameComponent = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  `;
  const Button = styled.button`
    background: black;
    border-radius: 3px;
    color: white;
    margin: 0 1em;
    padding: 1.25em 3em;
  `;

  return (
    <>
      <Container>
        <div>
          <Button>Test</Button>
        </div>
      </Container>
      <Container>
        <div>
          <p>No game running</p>
        </div>
      </Container>
    </>
  );
};
