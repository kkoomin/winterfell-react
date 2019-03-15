import React from 'react'

class CharDetail extends React.Component {

    render() {
        return (
            <div className='detail-container'>
                <h1>{this.props.member.name}</h1>
                <h4>Title: {this.props.member.title ? this.props.member.title : 'No title'}</h4>
                <h4>Aliases: {this.props.member.aliases.join(", ")}</h4>
                <button onClick={event => {this.props.likeMember(event, this.props.member)}}>Like</button>
            </div>
        )
    }
}

export default CharDetail;