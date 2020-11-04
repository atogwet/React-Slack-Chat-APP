import React from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';


class MessagesHeader extends React.Component{
    render(){
        const { channelName, numUniqueUsers, isPrivateChannel } = this.props;
        return(
            <Segment clearing >
                <Header as="h3" floated="left" fluid="true" style={{marginBottom: 0}} >
                    <span>
                        {channelName}
                        { !isPrivateChannel && <Icon color="black" name={"star outline"} />}
                    </span>
                    <Header.Subheader>
                    {numUniqueUsers}
                    </Header.Subheader>
                </Header>
            </Segment>
        );
    }
}

export default MessagesHeader;