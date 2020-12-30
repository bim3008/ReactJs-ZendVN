import Button from './common/Button' ;

export default function DemoButtonComponent(){
    return(

        <div className="tcl-container">
            <div className="tcl-row">
                <div className="tcl-col-6">
                    <h1 >Types Button</h1>
                    <Button type ="button" value="Hello Button"  />
                    <Button type ="button" value="Hello Button" className="btn svg" />
                    <Button type ="button" value="Hello Button" className="btn-size-large " />
                    
                </div>
                <div className="tcl-col-6">
                    <h1 >Types Tag A</h1>
                    <Button value="Hello Tag A"  className="btn btn-category" href="#" />
                    <Button value="Hello Tag A"  className="btn btn-svg" href="#" />
                    <Button icon="icons ion-ios-eye" value="Hello Tag A"  className="btn btn-primary"  href="https://www.zendvn.com/" target='_blank'/>
                    <Button icon="icons ion-ios-eye" value="Hello Tag A"  className="btn-size-large"  href="https://www.zendvn.com/" target='_blank'/>
                </div>
              
            </div>
        </div>
    )
}