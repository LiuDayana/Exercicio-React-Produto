import img from './../assets/protetor.jpg'


const Hero = () => {
    return (
        <div className="d-flex">
            <div className="Hero">
                <h1>Protetor solar Oil Control Sérum</h1>
                <p>Reduz e controla o brilho e a oleosidade da pele por 8h.</p>
                <div className="links-flex">
                    <p className='preco'>R$85</p>
                    <a href="./#" className='btn'>Comprar</a>
                </div>
            </div>
            <img src={img} alt="" width="500"/>
        </div>
    )
}

export default Hero