import Icons from './Icons';
import Book from './Book';

export default function NavBar() {

    return (
        <div className="nav-bar">
            <div className="nav-title">
                <Icons />
                <h1 className='aleo-font-h1'>MagicRecipeBook</h1>
                <Book />
            </div>
            
        </div>
    );
}