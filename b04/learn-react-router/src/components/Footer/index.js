import './Footer.css';

import Container from '../../common/Container' ;
import Row from '../../common/Row' ;

import FooterLogo       from './FooterLogo' ;
import FooterCopyright  from './FooterCopyright' ;
import FooterCreated    from './FooterCreated' ;
import FooterTitle      from './FooterTitle' ;
import FooterContent    from './FooterContent' ;
import FooterLink       from './FooterLink' ;

export default function Footer() {
    return (
        <footer id="footer" className="bg-white">
            <Container>
                <div className="footer">
                    <Row>
                        {/* Footer Column */}
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                                <FooterLogo></FooterLogo>
                                <FooterCopyright></FooterCopyright>
                                <FooterCreated></FooterCreated>
                        </div>
                        {/* Footer Column */}
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
                                <FooterTitle>Danh Mục</FooterTitle>
                                <FooterContent>
                                {/* <FooterLink url={"https://reactjs.org/"} target={"_blank"} > ReactJs  </FooterLink> */}
                                    {/* <li><a href="#">ReactJs</a></li>
                                    <li><a href="#">Javascript</a></li>
                                    <li><a href="#">Angular</a></li>
                                    <li><a href="#">HTML, HTML5</a></li> */}
                                </FooterContent>
                        </div>
                        {/* Footer Column */}
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
                                <FooterTitle > Liên hệ </FooterTitle>
                                <ul className="footer-content__list">
                                    <li>219/78 Trần Văn Đang - Quận 10 - Thành phố Hồ chí Minh</li>
                                    <li>0343 261 825</li>
                                </ul>
                        </div>
                        {/* Footer Column */}
                        <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
                                <FooterTitle >Fanpage</FooterTitle>
                                <div className="footer-facebook">
                                    <div className="fb-page fb_iframe_widget"
                                        data-href="https://www.facebook.com/HocLapTrinhWebTrenProjectsThucTe/" 
                                        data-tabs data-width data-height data-small-header="false"
                                        data-adapt-container-width="true" data-hide-cover="false"
                                        data-show-facepile="true" 
                                        fb-xfbml-state="rendered" 
                                        fb-iframe-plugin-query="adapt_container_width=true&app_id=682829465411569&container_width=339&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHocLapTrinhWebTrenProjectsThucTe%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width=">
                                        <span style={{verticalAlign: 'bottom', width: 339, height: 130}}>
                                        <iframe name="f2abed2709e3c48" width="1000px" height="1000px" 
                                        data-testid="fb:page Facebook Social Plugin"
                                        title="fb:page Facebook Social Plugin" 
                                        frameBorder={0} scrolling="no" allow="encrypted-media"
                                        src="https://www.facebook.com/v7.0/plugins/page.php?adapt_container_width=true&app_id=682829465411569&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df2c6f84702d1c98%26domain%3Dlocalhost%26origin%3Dhttp%253A%252F%252Flocalhost%252Ff3e9e4156b2ab7c%26relation%3Dparent.parent&container_width=339&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2FHocLapTrinhWebTrenProjectsThucTe%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width=" 
                                        style={{border: 'none', visibility: 'visible', width: 339, height: 130}}  /></span></div>
                                </div>
                        </div>
                    </Row>  
                </div>
            </Container>
        </footer>
    )
}