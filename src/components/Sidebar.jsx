import SocialNetworks from './SocialNetworks';

import Avatar from '../img/perfil.jpeg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer';



const Sidebar = () =>{
    return(
        <aside id="sidebar">
            <img src={Avatar} alt="Breno J Leal" />
            <p className="title">Desenvolvedor Web</p>
            <SocialNetworks/>
            <InformationContainer/>
            <a href="" className="btn">Download currículo</a>
        </aside>
    )
}
export default Sidebar;