import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const GithubIcon = ({
    as = 'a',
    href = 'https://github.com/quentindm',
    wrapperClass = 'home-contact-icon',
    iconClass = '',
    ...props
}) => {
    const Tag = as;
    const anchorProps =
        Tag === 'a'
            ? { href, target: '_blank', rel: 'noopener noreferrer' }
            : {};

    return (
        <Tag className={wrapperClass} {...anchorProps} {...props}>
            <FontAwesomeIcon icon={faGithub} className={iconClass} />
        </Tag>
    );
};

export default GithubIcon;