
import { APP_ROUTES }from "constants/routes"
import { PageWrapper, ClientsLink, NavContainer } from "./styles";

function Clients (){
    return <PageWrapper>
<NavContainer>
   <ClientsLink to={APP_ROUTES.APPLE}>Apple</ClientsLink>
   <ClientsLink to={APP_ROUTES.FACEBOOK}>Facebook</ClientsLink> 
   <ClientsLink to={APP_ROUTES.GOOGLE}>Google</ClientsLink>  
</NavContainer>
    </PageWrapper>
}
export default Clients;