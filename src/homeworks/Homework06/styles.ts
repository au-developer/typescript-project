import styled from "@emotion/styled";

export const PageWrapper = styled ("div")`
display: flex;
  justify-content: center;
  padding-top: 50px;
  flex: 1;
  background-image: url(https://images.pexels.com/photos/12969804/pexels-photo-12969804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
  background-size: cover;
  gap: 40px;
`;

export const CardWrapper = styled ("div")`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 200px;
  min-height: 250px;
  height: fit-content;
  border: 2px solid rgb(43, 43, 47);
  color: rgb(33, 136, 129);
  background-color: rgba(49, 57, 58, 0.451);
  border-radius: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;


