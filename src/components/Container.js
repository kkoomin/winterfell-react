import React from 'react'
import CharList from './CharList';
import CharDetail from './CharDetail';

class Container extends React.Component {
    state = {
        swornMembers: [],
        selectedMember: undefined,
        likedMembers: []
     }
 
    componentDidMount() {
        fetch('https://anapioficeandfire.com/api/houses/362')
        .then(res => res.json())
        .then(data => {
                data.swornMembers.map(url => {
                    return fetch(url)
                    .then(res => res.json())
                    .then(char => {
                        this.setState({swornMembers: [...this.state.swornMembers, char]})
                    })
                })
            })
    }
    
    renderDetail = (member) => {
        this.setState({
            ...this.state,
            selectedMember: member
        })
    }

    likeMember = (event, member) => {
        // console.log(event.target.innerText, member)
        if(event.target.innerText === 'Like') {
            event.target.innerText = 'Liked'
            this.setState({
                ...this.state,
                likedMembers: [...this.state.likedMembers, member]
            })
        } else {
            event.target.innerText = 'Like'
            this.setState({
                ...this.state,
                likedMembers: [this.state.likedMembers.filter(m => m !== member)]
            })
        }  
    }

    render() {
        return (
            <div>
                <CharList members={this.state.swornMembers} likedMembers={this.state.likedMembers} renderDetail={this.renderDetail}/>
                {this.state.selectedMember !== undefined ? <CharDetail member={this.state.selectedMember} likeMember={this.likeMember}/> : null}
            </div>
            
        )
    }
}

export default Container;