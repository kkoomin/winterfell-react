import React from 'react'

class CharList extends React.Component {

    state = {
        clicked: false
    }

    changeMemberList = (event) => {
        if(event.target.innerText === 'Liked Characters') {
            event.target.innerText = 'All Characters'
            this.setState({
                clicked: true
            })
        } else {
            event.target.innerText = 'Liked Characters'
            this.setState({
                clicked: false
            })
        }
    }

    membersList = () => {
        return (this.state.clicked ? this.props.likedMembers : this.props.members)
    }

    render() {
        return (
            <div className='list-container'>
                <h1>Swornmembers</h1>
                <div className="filter-bar">
                    <button onClick={this.changeMemberList}>Liked Characters</button>
                </div>
                <ul className='member-list'>
                {this.membersList().map((member, index) => <li key={index} onClick={() => {this.props.renderDetail(member)}}>{member.name}</li>)}
                </ul>
            </div>
        )
    }
}

export default CharList;