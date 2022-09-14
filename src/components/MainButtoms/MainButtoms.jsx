const MainButtoms = ({ changePageHandler }) => {
    return (
        <div>
            <button onClick={() => { changePageHandler('deduction'); }}>expenses</button>
            <button onClick={() => { changePageHandler('income'); }}>income</button>
        </div>
    );
}

export default MainButtoms;