import styled from 'styled-components';

export const Application = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormTitle = styled.h2`
  font-size: 40px;
  margin: 30px auto;
`;

export const NoContactsMessage = styled.p`
font-size: 30px;
`

export const List = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 10px;
`
export const ListItem = styled.li`
list-style: none;
display: flex;
justify-content: space-between;
// flex-direction: row;
// gap: 10px;
`
export const DeleteContactButton = styled.button`
margin-left: 15px;
`
