import Header from '../Header'
import TransactionForm from 'components/TransactionForm';
import MainButtoms from 'components/MainButtoms/MainButtoms';
import Categories from 'components/Categories';
import { categoriesList } from 'components/Data/categoriesList';
import { Component } from 'react';

class MainPage extends Component {
    state = {
        isCategories: false,
    }
    openCategories() {
        this.setState({ isCategories: true })
    }

    closeCategories = () => {
        this.setState({ isCategories: false })
    }

    render() {
        return (
            <>
                {!this.state.isCategories ? (
                    <>
                        <Header cbHeaderBtn={this.closeCategories} btnContent={undefined} title={"Журнал витрати"} />
                        <TransactionForm openCategories={this.openCategories} />
                        <MainButtoms changePageHandler={this.props.changePageHandler} />
                    </>
                ) : (
                    <Categories categoriesList={categoriesList} closeCategories={this.closeCategories} />
                )}
            </>
        );
    }
}

export default MainPage