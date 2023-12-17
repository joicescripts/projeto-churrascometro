const Banner = ({ page }) => {
    const titles = {
        title1: "Fique por dentro de todas as novidades. Cadastre seu e-mail e receba promoções especiais!",
        title2: "Precisa de uma ajudinha com o churrasco? :) Quantas pessoas vão participar?"
    }

    return (
        <>
            {page === 'FormPage' && <p id="header-form">{titles.title1}</p>}
            {page === 'PrincipalPage' && <h3>{titles.title2}</h3>}
        </>
    );
}

export default Banner;