import { useState } from 'react';
import BookyImg from '../assets/images/Site-reservation-hotel.webp';
import NinaImg from '../assets/images/Site-photagraphe.webp';
import ArchitecteImg from '../assets/images/Site-architecte-designer.webp';
import KasaImg from '../assets/images/Site-location-appartement.webp';
import livreImg from '../assets/images/Site-notation-livres.webp';
import ArrowLeftIcon from './inconComponents/ArrowLeftIcon';
import ArrowRightIcon from './inconComponents/ArrowRightIcon';
import GithubIcon from './inconComponents/GithubIcon';
import HtmlIcon from './inconComponents/HtmlIcon'; 
import CssIcon from './inconComponents/CssIcon';
import JavaScriptIcon from './inconComponents/JavaScriptIcon';
import ReactIcon from './inconComponents/ReactIcon';
import NodeIcon from './inconComponents/NodeIcon';
import SassIcon from './inconComponents/SassIcon';

function SlideProjects() {
    //State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const slides = [
        {
            img: BookyImg,
            text: { title: 'Intégration d’une page d’accueil responsive – Agence de voyage', content: 'Dans ce projet, j’ai réalisé l’intégration complète de la page d’accueil d’une agence de voyage en HTML et CSS, en respectant fidèlement les maquettes fournies sur Figma (mobile, tablette et desktop).\n \nL’objectif principal était de concevoir une interface entièrement responsive, garantissant une expérience utilisateur optimale sur tous les appareils et toutes les tailles d’écran.\n \nÀ partir des maquettes, des ressources visuelles et des spécifications techniques, j’ai : \n - Structuré la page avec un HTML sémantique\n - Mis en place une mise en page adaptable (Flexbox / CSS responsive)\n - Assuré la cohérence visuelle entre les différentes résolutions\n - Optimisé l’affichage pour mobile, tablette et desktop\n \nCe projet m’a permis de renforcer mes compétences en intégration web, en respect des maquettes UI et en design responsive.', icon: [{ component: <HtmlIcon />, name: 'HTML' }, { component: <CssIcon />, name: 'CSS' }] }
        },
        {
            img: NinaImg,
            text: { title: 'Débuggez et optimisez un site de photographe', content: 'Dans ce projet, j’ai travaillé sur l’analyse et l’optimisation d’un site web existant afin d’améliorer ses performances, son référencement naturel (SEO) et son accessibilité.\n \nJ’ai commencé par identifier les problèmes impactant le chargement, le référencement et l’expérience utilisateur, puis j’ai réalisé un audit complet avec les outils Lighthouse et Wave. Ensuite, j’ai mis en place des solutions concrètes : optimisation de la structure HTML, amélioration des ressources et images, et ajustements pour rendre le site plus accessible et performant sur tous les appareils.\n \nCe projet m’a permis de renforcer mes compétences en audit technique, en optimisation front-end, et en amélioration de l’expérience utilisateur, tout en développant une approche pragmatique et orientée résultats.', icon: [{ component: <HtmlIcon />, name: 'HTML' }, { component: <CssIcon />, name: 'CSS' }, { component: <JavaScriptIcon />, name: 'JavaScript' }] }
        },
        {
            img: ArchitecteImg,
            text: { title: 'Créez une page web dynamique avec JavaScript', content: 'Dans ce projet, j’ai développé une interface web dynamique pour une architecte d’intérieur en utilisant HTML5 pour la structure, CSS3 pour la mise en page et le responsive design, ainsi que JavaScript (ES6) pour rendre le site interactif (manipulation du DOM, gestion des événements, filtrage dynamique des projets, ouverture/fermeture de modale, etc.).\n \nJ’ai mis en place des requêtes HTTP (GET / POST / DELETE / UPDATE) afin de communiquer avec une API REST, en utilisant fetch et en manipulant les données au format JSON pour afficher et administrer les contenus (authentification via token, ajout et suppression de médias).\n \nLes maquettes ont été consultées sur Figma afin de respecter l’intégration pixel-perfect, le développement a été réalisé sur Visual Studio Code, et la gestion de version du projet a été assurée avec Git et GitHub (suivi des commits, gestion des versions et collaboration).\n \nCe projet m’a permis de consolider mes compétences en développement Front-End moderne, en architecture client-serveur et en bonnes pratiques de versionnement.', icon: [{ component: <HtmlIcon />, name: 'HTML' }, { component: <CssIcon />, name: 'CSS' }, { component: <JavaScriptIcon />, name: 'JavaScript' }, { component: <GithubIcon as="span" wrapperClass="icon" iconClass="proj-icon-inner" />, name: 'GitHub' }, { component: <NodeIcon />, name: 'Node.js' }] }
        },
        {
            img: KasaImg,
            text: { title: 'Créez une application web de location immobilière avec React', content: 'Dans ce projet, j’ai développé le front-end d’une application moderne en utilisant React pour la création de composants réutilisables et la gestion dynamique de l’interface utilisateur. J’ai mis en place le routage avec React Router, pour une navigation fluide entre les différentes pages.\n \nJ’ai également utilisé Node.js pour exécuter l’environnement de développement et gérer les dépendances du projet.\n \nPour le style, j’ai travaillé avec SASS (SCSS) afin de structurer le CSS de manière modulaire (variables, nesting, organisation des fichiers) et j’ai implémenté des animations CSS pour améliorer l’expérience utilisateur.\n \nLes données utilisées provenaient d’un fichier JSON simulé, ce qui m’a permis de structurer l’affichage dynamique des contenus sans dépendre d’une API réelle.', icon: [{ component: <HtmlIcon />, name: 'HTML' }, { component: <CssIcon />, name: 'CSS' }, { component: <JavaScriptIcon />, name: 'JavaScript' }, { component: <GithubIcon as="span" wrapperClass="icon" iconClass="proj-icon-inner" />, name: 'GitHub' }, { component: <NodeIcon />, name: 'Node.js' }, { component: <ReactIcon />, name: 'React' }, { component: <SassIcon />, name: 'SASS' }] }
        },
        {
            img: livreImg,
            text: { title: 'Développez le back-end d\'un site de notation de livres', content: 'Dans ce projet, j’ai développé le back-end d’un site de notation de livres en utilisant Node.js et Express pour créer le serveur et gérer les routes. J’ai connecté l’application à une base de données MongoDB via Mongoose, en modélisant les données selon les besoins des livres, des utilisateurs et des notes.\n \nJ’ai implémenté toutes les opérations CRUD (Create, Read, Update, Delete) pour gérer les contenus, tout en assurant la sécurité des données et en mettant en place un système d’authentification sécurisé pour les utilisateurs. J’ai également intégré la gestion du téléversement et de l’optimisation des images, et calculé les notes moyennes des livres.\n \nLe projet a été structuré selon l’architecture MVC (Model-View-Controller) et m’a permis de créer une RESTful API complète. J’ai aussi veillé à appliquer les bonnes pratiques du Green Code pour limiter l’empreinte écologique du site.', icon: [{ component: <HtmlIcon />, name: 'HTML' }, { component: <CssIcon />, name: 'CSS' }, { component: <JavaScriptIcon />, name: 'JavaScript' }, { component: <GithubIcon as="span" wrapperClass="icon" iconClass="proj-icon-inner" />, name: 'GitHub' }, { component: <NodeIcon />, name: 'Node.js' }, { component: <ReactIcon />, name: 'React' }, { component: <SassIcon />, name: 'SASS' }] }
        }
    ];

    //Comportement
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
        setCurrentTextIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="projet-images">
            <button onClick={prevImage} className="arrow-button prev-button">
                <ArrowLeftIcon />
            </button>

            <img
                src={slides[currentImageIndex].img}
                alt={slides[currentImageIndex].text.title}
                className="projet-image"
            />

            <div className="projet-text">
                <h3 className="projet-title-content">{slides[currentTextIndex].text.title}</h3>
                <p className="projet-text-content">
                    {slides[currentTextIndex].text.content
                        .split("\n")
                        .map((line, idx) => (
                            <span key={idx}>
                                {line}
                                <br />
                            </span>
                        ))}
                </p>
                <div className="projet-icon-content">
                    {slides[currentTextIndex].text.icon.map((iconObj, idx) => (
                        <div key={idx} className="icon-wrapper" data-name={iconObj.name}>
                            {iconObj.component}
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={nextImage} className="arrow-button next-button">
                <ArrowRightIcon />
            </button>
        </div>
    );
}

export default SlideProjects;