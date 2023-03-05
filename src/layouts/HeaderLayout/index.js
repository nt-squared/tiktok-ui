import Header from '~/layouts/components/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderLayout;
