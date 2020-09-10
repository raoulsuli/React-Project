import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments != null) {
            return (
                comments.map((comment) => {
                    return(
                        <ul className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>{`-- ${comment.author} , ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}`}</p>
                            </li>
                        </ul>
                    )
                })
            )
        } else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const dish = this.props.dish;
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}


export default DishDetail;