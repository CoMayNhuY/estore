import '../footer/Footer.css';
import { listFT_1, listFT_2, listFT_3, listFT_4, list_img } from '../footer/constantFooter';
function Footer() {
    return (
        <div>
            <div className="container-fluid footer">
                <div className="row">
                    <div className="col-sm-3">
                        <h4>Get in touch</h4>
                        {listFT_1.map((item) => (
                            <div className="aroundInfo" key={item.id}>
                                <div className="info-mr">
                                    <i class={item.icon} id="iconFL-1"></i>
                                    <span className="text-icon-footer">{item.ad}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-sm-3">
                        <h4>Follow Us</h4>
                        <div className="aroundButton">
                            {listFT_2.map((item, index) => (
                                <button className="btn-around" key={index}>
                                    <i class={item.icon} style={{ color: '#4b4b4b' }}></i>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="col-sm-3">
                        <h4>Company Info</h4>
                        {listFT_3.map((item) => (
                            <div className="aroundInfo" key={item.id}>
                                <div className="info-mr">
                                    <i class={item.icon} id="iconFL-1"></i>
                                    <span className="text-icon-footer">{item.ad}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="col-sm-3">
                        <h4>Purchase Info</h4>
                        {listFT_4.map((item) => (
                            <div className="aroundInfo" key={item.id}>
                                <div className="info-mr">
                                    <i class={item.icon} id="iconFL-1"></i>
                                    <span className="text-icon-footer">{item.ad}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <hr />
                <div className="row">
                    <div className="col-sm-12 accept">
                        {list_img.map((item) => (
                            <div className="surroundImg" key={item.id}>
                                <img className="styImg" src={item.img} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
