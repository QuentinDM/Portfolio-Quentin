import '../styles/projetsPage.css';
import NavIcon from "../components/iconComponents/navIcon";
import SlideProjects from '../components/SlideProjects';

function ProjetsPage() {
    return (
        <div className="projets-page">
            <NavIcon />
            <div className="slides-show-container"><SlideProjects /></div>
        </div>
    );
}

export default ProjetsPage;