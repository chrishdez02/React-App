import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            campsiteInfoState: null
          
        };
    }

    renderComments(comments){
        if(comments){
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                            <div>{comment.text}</div>
                            {/* <div>{comment.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</div> */}
                            </div>
                        )
                    })}

                </div>
            )
        }
    }

    // render() {
    //     return (
    //         <div className="row">
    //             <div className="col-md-5 m-1">
    //                 {this.renderSelectedCampsite(this.props.selectedCampsite)}
    //             </div>
    //             <div className="col-md-5 m-1">{this.renderComments(this.props.selectedCampsite)}</div>
    //         </div>
    //     )
    // }

    renderCampsite(campsite){
        return (
            <div className="col-md-5 m-1">
                <Card>
                     <CardImg top src={campsite.image} alt={campsite.name} />
                     <CardBody>
                         <CardTitle>{campsite.name}</CardTitle>
                         <CardText>{campsite.description}</CardText>
                     </CardBody>
                 </Card>
            </div>
        );
    }

    render() {
    
        if (this.props.campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                    

                </div>
            );
        }
        return <div> I have no campsite</div>;
        
    }
  }
  
  
  export default CampsiteInfo;