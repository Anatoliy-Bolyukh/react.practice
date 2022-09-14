import PropTypes from 'prop-types'

const Header = ({ title, btnContent, cbHeaderBtn }) => {
    console.log(cbHeaderBtn);
    return (
        <header>
            {btnContent && <button> onClick={() => cbHeaderBtn()}{btnContent}</button>}
            <h1>{title}</h1>
        </header>
    );
}

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    btnContent: PropTypes.string,
};