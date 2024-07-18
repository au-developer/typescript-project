

import { PageWrapper, ClientsLink, NavContainer } from "./styles";

function Clients (){
    return <PageWrapper>
<NavContainer>
   <ClientsLink to="/clients/apple">Apple</ClientsLink>
   <ClientsLink to="/clients/facebook">Facebook</ClientsLink> 
   <ClientsLink to="/clients/google">Google</ClientsLink>  
</NavContainer>
    </PageWrapper>
}
export default Clients;